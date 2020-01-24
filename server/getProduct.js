const products = require('../products.json');

const getProduct = (req, res) => {
    // find returns the item if it finds it, or undefined if no
  
    if (req.params.id) {
        const item = products.find(val => val.id === parseInt(req.params.id));
        res.status(200).send(item)
    } else if (req.query.price) {
        const items = products.filter(val => val.price >= parseInt(req.query.price));
        res.status(200).send(items)
    } else {
        res.status(200).send(products);
    }
}

module.exports = {getProduct}