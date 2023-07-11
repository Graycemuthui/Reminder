const express = require("express");
const router = express.Router();

const pool = require("../db/db");

const assignments = [];

// get all assignments

router.get("/", async (req, res) => {
  try {
    const allAssignments = await pool.query("SELECT * FROM assignments");
    res.json(allAssignments.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a assignment

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const assignment = await pool.query(
      "SELECT * FROM assignments WHERE assignment_id = $1",
      [id]
    );
    res.json(assignment.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// create a assignment

router.post("/assignments", async (req, res) => {
  try {
    const { student_id, lecturer_id, course_id } = req.body;
    const newAssignment = await pool.query(
      "INSERT INTO assignments (student_id, lecturer_id, course_id) VALUES($1, $2, $3) RETURNING *",
      [student_id, lecturer_id, course_id]
    );
    res.json(newAssignment.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a assignment

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      assignment_name,
      assignment_description,
      assignment_due_date,
      assignment_status,
      assignment_priority,
    } = req.body;
    const updateAssignment = await pool.query(
      "UPDATE assignments SET assignment_name = $1, assignment_description = $2, assignment_due_date = $3, assignment_status = $4, assignment_priority = $5 WHERE assignment_id = $6",
      [
        assignment_name,
        assignment_description,
        assignment_due_date,
        assignment_status,
        assignment_priority,
        id,
      ]
    );
    res.json("Assignment was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a assignment

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAssignment = await pool.query(
      "DELETE FROM assignments WHERE assignment_id = $1",
      [id]
    );
    res.json("Assignment was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
