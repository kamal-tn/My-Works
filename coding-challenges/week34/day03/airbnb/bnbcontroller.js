const bnbModel = require('./bnbmodel')

const getAllList = async (req,res) => {

    try {
        const list = await bnbModel.aggregate([
            {
                $match: {
                    address: {
                        country: "spain"
                    },
                    price: {
                        $lte: 15.00
                    },
                    review_scores: {
                        review_scores_rating:{
                            $gte: 75
                        }
                    },
                    $sort: {
                        price: -1
                    }
                }
            }
        ])
        res.status(200).send({status:"success",list})
    } catch (error) {
        res.status(500).send({status: 'error', msg: "Error fetching lists from DB"})
    }
}

module.exports = {
    getAllList
}