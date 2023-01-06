const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
  title: String,
  image: String,
  price: Number,
  description: String,
  location: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Campground = mongoose.model("Campground", CampgroundSchema);

module.exports = Campground;

// Instead of writing the functions above, simply use: mondule.exports = mongoose.model("Campground", CampgroundSchema)

// Check out review.js for more details
