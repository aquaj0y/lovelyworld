const { Schema} = require("mongoose")

const Continent = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = Continent;