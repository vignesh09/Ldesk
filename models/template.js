const mongoose = require('mongoose');

var template = mongoose.model('template', {
    name: { type: String },
    template: { type: String },
    createdBy: { type: String },
    deletedBy: { type: String },
    lastModifiedAt: {type: String}
});

module.exports = { template };
