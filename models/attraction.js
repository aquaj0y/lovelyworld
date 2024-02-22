const { Schema } = require("mongoose")

const Attraction = new Schema(
  {
    name: { type: String, required: true },
    coverImg: { type: String, required: true },
    img1: { type: String, required: true },
    img2: { type: String, required: true },
    img3: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: Schema.Types.ObjectId, required: true, ref: "City" },
    address: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = Attraction;