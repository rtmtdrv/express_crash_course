const express = require('express');
const uuid = require('uuid');
const members = require('../../Members');
const router = express.Router();

// Gets All Members
router.get('/', (req, res) => res.json(members));

// Get Single Member
router.get('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if(found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}`});
  }
});

// Create Member
router.post('/', (req, res) => {
  const newMember = {

  }
});


module.exports = router;