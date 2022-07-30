const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: 'This is the first product'
    },
];

const users = [
    {
        id: 1,
        name: 'User 1',
        email: 'mail@mail.com',
        password: '123456'
    }
];

const carts = [
    {
        id: 1,
        name: 'Cart 1',
        user: 1,
        products: [1]
    }
];

const orders = [
    {
        id: 1,
        name: 'Order 1',
        user: 1,
        products: [1]
    }
];

const messages = [
    {
        name: 'Message 1',
        text: 'This is the first message',
    }
];

module.exports = {
    products,
    users,
    carts,
    orders,
    messages
}