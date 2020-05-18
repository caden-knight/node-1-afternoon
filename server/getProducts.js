const products = require('../products.json')

module.exports = {
    getProducts: (req, res) => {
        const {price} = req.query

        if(price){
            const filtered = products.filter(e => e.price >= +price)
            res.status(200).send(filtered)
        }
        else{
            res.status(200).send(products)
        }

    },

    getProductById: (req, res) => {
        const {id} = req.params
        const product = products.find(el => el.id === +id)
        if(product) {
            res.status(200).send(product)
        }
        else {
            res.status(500).send('Item not in list')
        }
    },

  
}