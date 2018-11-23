const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { template } = require('../models/template');

// => localhost:3000/employees/
router.get('/', (req, res) => {
    template.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving template :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    template.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving template :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var temp = new template({
      name: req.body.name,
      template: req.body.template,
      createdBy: req.body.createdBy,
      deletedBy: req.body.DeletedBy,
      lastModifiedAt: new Date().toString(),
    });
    temp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in template Save :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;
