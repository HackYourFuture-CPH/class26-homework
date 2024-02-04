
const express = require("express");
const router = express.Router();
const knex = require("../database");

//Week- 3

//Returns all meals that are cheaper than maxPrice. Data type Number. api/meals?maxPrice=90

router.get('/maxPrice', async (req, res) => {
  try {
    const maxPrice = req.query.maxPrice;

    if (maxPrice !== undefined && isNaN(maxPrice)) {
      return res.status(400).json({ error: 'The maxPrice parameter accepts numbers only' });
    }

    const cheaperMeals = await knex('meal').where('price', '<', maxPrice);

    res.json(cheaperMeals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred while processing your request.' });
  }
});


//Returns all meals that still have available spots left, if true. 
//If false, return meals that have no available spots left.1	api/meals?availableReservations=true

router.get('/available', async (req, res) => {
  try {
    const availableReservations = req.query.availableReservations;

    if (availableReservations !== undefined && availableReservations !== 'true' && availableReservations !== 'false') {
      return res.status(400).json({ error: 'The availableReservations parameter accepts true or false only' });
    }

    // Convert the string 'true' or 'false' to a boolean
    const isAvailable = availableReservations === 'true';

    // Use the boolean value in the query
    const meals = await knex('reservation').where('number_of_guests', '<', isAvailable ? 0 : Number.MAX_VALUE);

    res.json(meals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred while processing your request.' });
  }
});

//Returns all meals that partially match the given title. 
//Rød grød will match the meal with the title Rød grød med fløde.	api/meals?title=Indian%20platter
router.get('/title', async (req, res) => {
  try {
    const title = req.query.title;

    if (!title) {
      return res.status(400).json({ error: 'The title parameter is required' });
    }

    const titleMatch = await knex('meal').where('title', 'like', `%${title}%`);

    res.json(titleMatch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred while processing your request.' });
  }
});

//Returns all meals where the date for when is after the given date.	api/meals?dateAfter=2022-10-01
router.get('/dateAfter', async (req, res) => {
  try {
    const dateAfter = req.query.dateAfter;

    if (!dateAfter) {
      return res.status(400).json({ error: 'The dateAfter parameter is required' });
    }

    const lateMeals = await knex('meal').where('when', '>', dateAfter);

    res.json(lateMeals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred while processing your request.' });
  }
});

//Returns all meals where the date for when is before the given date.	api/meals?dateBefore=2022-08-08
router.get('/dateBefore', async (req, res) => {
  try {
    const dateBefore = req.query.dateBefore;

    if (typeof dateBefore !== 'string' || dateBefore.trim() === '') {
      return res.status(400).json({ error: 'The dateBefore parameter is required and must be a non-empty string' });
    }

    const earlyMeals = await knex('meal').where('when', '<', dateBefore);

    res.json(earlyMeals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred while processing your request.' });
  }
});

// Returns the given number of meals.	api/meals?limit=7
router.get('/limit', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit);

    if (isNaN(limit) || limit <= 0) {
      return res.status(400).json({ error: 'The limit parameter must be a positive number' });
    }

    const limitedMeals = await knex('meal').select('*').limit(limit);

    res.json(limitedMeals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred while processing your request.' });
  }
});

//Returns all meals sorted by the given key. 
//Allows when, max_reservations and price as keys. Default sorting order is asc(ending).	api/meals?sortKey=price
router.get('/sortedMeals', async (req, res) => {
  try {
    const sortKey = req.query.sortKey || 'price';
    const sortDir = req.query.sortDir && req.query.sortDir.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const allowedKeys = ['when', 'max_reservations', 'price'];

    if (!allowedKeys.includes(sortKey)) {
      return res.status(400).json({ error: 'Invalid sortKey parameter' });
    }

    const sortedMeals = await knex('meal').orderBy(sortKey, sortDir);

    res.json(sortedMeals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred while processing your request.' });
  }
});

//Returns all meals sorted in the given direction. Only works combined with the sortKey and allows asc or desc.	
//api/meals?sortKey=price&sortDir=desc

router.get('/sort', async (req, res) => {
  try {
    const sortKey = req.query.sortKey;
    const sortDir = req.query.sortDir;

    if (!sortKey) {
      return res.status(400).json({ error: 'The sortKey parameter is required' });
    }

    const allowedKeys = ['when', 'max_reservations', 'price'];

    if (!allowedKeys.includes(sortKey)) {
      return res.status(400).json({ error: 'Invalid sortKey parameter' });
    }

    const sortedMeals = await knex('meal').orderBy(sortKey, sortDir || 'asc');

    res.json(sortedMeals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred while processing your request.' });
  }
});



// Week 2
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
