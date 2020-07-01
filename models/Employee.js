const mongoose = require('mongoose');
var validator = require('email-validator');

const employeeSchema = new mongoose.Schema({
    fullName: { type: String, required: 'This field is required' },
    email: String,
    mobile: String,
    city: String
});

// custom validation for email
employeeSchema.path('email').validate((val) => {
    return validator.validate(val);
}, 'Invalid Email');

mongoose.model('Employee', employeeSchema);
