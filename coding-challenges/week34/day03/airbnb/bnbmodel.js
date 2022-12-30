const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const bnbSchema = new Schema ({
    listing_url: String,
    name: String,
    summary: String,
    space: String,
    description: String,
    neighborhood_overview: String,
    notes: String,
    transit: String,
    access: String,
    interaction: String,
    house_rules: String,
    property_type: String,
    room_type: String,
    bed_type: String,
    minimum_nights: String,
    maximum_nights: String,
    cancellation_policy: String,
    price: Number,
    address: {
        street: String,
        suburb: String,
        government_area: String,
        market: String,
        country: String,
        country_code: String,
    },
    review_scores: {
        review_scores_rating: Number
    }

})

const bnbModel = mongoose.model('listingsAndReviews',bnbSchema)

module.exports = bnbModel
