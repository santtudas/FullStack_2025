const express = require('express');
const Henkilo = require('../models/henkilo');

const router = express.Router();

// GET all documents
router.get('/getall', async (req, res, next) => {
  try {
    const henkilot = await Henkilo.find();
    res.status(200).json(henkilot);
  } catch (error) {
    next(error);
  }
});

// GET a document by ID
router.get('/:id', async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const henkilo = await Henkilo.findById(req.params.id);
    if (!henkilo) {
      return res.status(404).json({ error: 'Document not found' });
    }
    res.status(200).json(henkilo);
  } catch (error) {
    next(error);
  }
});

// POST a new document
router.post('/add', async (req, res, next) => {
  try {
    const newHenkilo = new Henkilo(req.body);
    await newHenkilo.save();
    res.status(201).json(newHenkilo);
  } catch (error) {
    next(error);
  }
});

// Update a document by ID
router.patch('/update/:id', async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const updatedHenkilo = await Henkilo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedHenkilo) {
      return res.status(404).json({ error: 'Document not found' });
    }
    res.status(200).json(updatedHenkilo);
  } catch (error) {
    next(error);
  }
});

// DELETE a document by ID
router.delete('/delete/:id', async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const deletedHenkilo = await Henkilo.findByIdAndDelete(req.params.id);
    if (!deletedHenkilo) {
      return res.status(404).json({ error: 'Document not found' });
    }
    res.status(200).json({ message: 'Document deleted successfully', deletedHenkilo });
  } catch (error) {
    next(error);
  }
});

module.exports = router;