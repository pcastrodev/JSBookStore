module.exports = class Poster {
    constructor(name, description, height, width, price, inStock) {
        this.name = name
        this.description = description
        this.height = height
        this.width = width
        this.price = price
        this.inStock = inStock
    }

    addToStock(quantity) {
        this.inStock += quantity
    }

    removeFromStock(quantity) {
        if (this.inStock >= quantity) {
            this.inStock -= quantity
        } else {
            console.log("Not enough stock to remove")
        }
    }
}
