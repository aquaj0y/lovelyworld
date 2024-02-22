const { Schema } = require("mongoose")

const Country = new Schema(
  {
    name: { type: String, required: true },
    language: { type: [String], required: true },
    continent: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Country;