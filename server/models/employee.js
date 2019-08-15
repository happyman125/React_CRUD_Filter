const ORM = require("../orm");
const Joi = require("joi");

let name = Joi.string()
  .min(3)
  .max(50);
let code = Joi.string()
  .min(3)
  .max(10);
let profession = Joi.string()
  .min(3)
  .max(50);
let color = Joi.string()
  .min(3)
  .max(30);
let city = Joi.string()
  .min(3)
  .max(50);
let branch = Joi.string()
  .min(1)
  .max(30);
let assigned = Joi.boolean();

module.exports = ORM.Model.extend({
  tableName: "employees ",
  schema: {
    create: Joi.object().keys({
      name: name.required(),
      code: code.required(),
      profession: profession.required(),
      color: color.required(),
      city: city.required(),
      branch: branch.required(),
      assigned: assigned.required()
    })
  }
});
