// routes/schoolRoutes.js

const express = require('express');
const router = express.Router();
const School = require('../models/School');

// GET all schools
router.get('/', async (req, res) => {
  try {
    const schools = await School.find();
    res.json(schools);
  } catch (error) {
    console.error('Error fetching schools:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST a new school
router.post('/', async (req, res) => {
  const newSchool = new School(req.body);
  try {
    const savedSchool = await newSchool.save();
    res.json(savedSchool);
  } catch (error) {
    console.error('Error adding school:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// PUT update a school
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSchool = await School.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedSchool);
  } catch (error) {
    console.error('Error updating school:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// DELETE a school
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await School.findByIdAndDelete(id);
    res.json({ message: 'School deleted successfully' });
  } catch (error) {
    console.error('Error deleting school:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
