
const express = require("express");
const router = express.Router();
const knex = require("../database");

//GET - Returns all meals
router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const allMeals = await knex("meal").select("*");
    response.json(allMeals);
  } catch (error) {
    throw error;
  }
});

//Post - Adds a new meal to the database
router.post("/", async (request, response) => {
  const addMeal = request.body;
  addMeal.created_date = new Date();

  try {
    await knex("meal").insert(addMeal);
    response.status(201).json("New meal has been added");
  } catch (error) {
    console.error(error); 
    response.status(500).json({ error: "Failed to add a new meal" });
  }
});

// Get - /api/meals/:id- Returns the meal by id


router.get("/:id", async (request, response) => {
  
  const { id } = request.params; 
  
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const meal = await knex("meal").select("*").where({ id }).first(); 
    if (meal) {
      response.json(meal);
    } else {
      response.status(404).json({ error: "Meal not found" });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Failed to retrieve the meal" });
  }
});

//PUT - /api/meals/:id		Updates the meal by id

router.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const updatedMeal = request.body;

    const results = await knex("meal")
      .update(updatedMeal).where({ id });

    if (results) {
      return response.json({ message: "Meal updated successfully" });
    } else {
      return response.status(404).json({ error: "Meal not found" });
    }
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Error updating meal" });
  }
});


//DELETE - /api/meals/:id		Deletes the meal by id

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const meal = await knex("meal").select("*").where({ id }).first();

    if (!meal) {
      return response.status(404).json({ error: "Meal not found" });
    }

    await knex("meal").where({ id }).del();

    response.json({ message: "Meal deleted successfully" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Error deleting meal" });
  }
});



module.exports = router;
