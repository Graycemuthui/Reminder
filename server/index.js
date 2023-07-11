const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a reminder

app.post("/reminders", async (req, res) => {
  try {
    const { description } = req.body;
    const newReminder = await pool.query(
      "INSERT INTO reminder (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newReminder.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all reminders

app.get("/reminders", async (req, res) => {
  try {
    const allReminders = await pool.query("SELECT * FROM reminder");
    res.json(allReminders.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a reminder

app.get("/reminders/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const reminder = await pool.query(
      "SELECT * FROM reminder WHERE reminder_id = $1",
      [id]
    );
    res.json(reminder.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a reminder

app.put("/reminders/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateReminder = await pool.query(
      "UPDATE reminder SET description = $1 WHERE reminder_id = $2",
      [description, id]
    );

    res.json("Reminder was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a reminder

app.delete("/reminders/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteReminder = await pool.query(
      "DELETE FROM reminder WHERE reminder_id = $1",
      [id]
    );
    res.json("Reminder was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
