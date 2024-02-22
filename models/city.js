const { Schema } = require("mongoose")

const City = new Schema(
  {
    name: { type: String, required: true },
    country: { type: Schema.Types.ObjectId, required: true, ref: 'Country' },
    temperature: {type: Number}
  },
  { timestamps: true }
)

module.exports = City;