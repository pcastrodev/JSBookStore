module.exports = class Order {
    constructor(items, user) {
        this.data = {
            items: items,
            user: user
        }
    }
}
