const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, '../data/productsDB.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


let productId = function() {
	return products[products.length - 1].id + 1;
}

module.exports = productId;