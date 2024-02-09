const express = require("express");
const router = express.Router();
const knex = require("../database");

// GET - Returns all reservations
router.get("/", async (request, response) => {
  try {
    const allReservations = await knex("reservation").select("*");
    response.json(allReservations);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Failed to retrieve reservations" });
  }
});

// POST - Adds a new reservation to the database
router.post("/", async (request, response) => {
  const addReservation = request.body;
  addReservation.created_date = new Date();

  try {
    await knex("reservation").insert(addReservation);
    response.status(201).json("New reservation has been added");
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Failed to add a new reservation" });
  }
});

// GET - Returns the reservation by id
router.get("/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const reservation = await knex("reservation").select("*").where({ id }).first();
    if (reservation) {
      response.json(reservation);
    } else {
      response.status(404).json({ error: "Reservation not found" });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Failed to retrieve the reservation" });
  }
});

// PUT - Updates the reservation by id
router.put("/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const reservation = await knex("reservation").select("*").where({ id }).first();
    if (reservation) {
      const updatedReservation = request.body;
      const results = await knex("reservation").update(updatedReservation).where({ id });
      if (results) {
        return response.json({ message: "Reservation updated successfully" });
      } else {
        return response.status(500).json({ error: "Failed to update reservation" });
      }
    } else {
      response.status(404).json({ error: "Reservation not found" });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Failed to update reservation" });
  }
});

// DELETE - Deletes the reservation by id
router.delete("/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const reservation = await knex("reservation").select("*").where({ id }).first();
    if (!reservation) {
      return response.status(404).json({ error: "Reservation not found" });
    }

    await knex("reservation").where({ id }).del();
    response.json({ message: "Reservation deleted successfully" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Error deleting reservation" });
  }
});

module.exports = router;
