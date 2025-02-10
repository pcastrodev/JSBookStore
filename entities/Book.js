module.exports = class Book {
    constructor(title, synopsis, genre, pages, author, description, price, inStock) {
        this.title = title
        this.synopsis = synopsis
        this.genre = genre
        this.pages = pages
        this.author = author
        this.description = description
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
