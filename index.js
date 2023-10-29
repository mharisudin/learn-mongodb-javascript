const mongoose = require('mongoose')

// schema for shoes
const shoeSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    size: Number,
    color: String,
    image: String,
    description: String,
    quantity: Number
})
const main = async () => {
    try {
        mongoose.connect('mongodb://localhost:27017/shoes_db')
        console.log('Connected to Mongo')
    } catch (err) {
        console.log(err)
    }
}

// model for shoes
// const Shoe = mongoose.model('Shoe', shoeSchema)

// find shoes in the database order by price
// const getShoe = async () => {
//     try {
//         const shoes = await Shoe.find({name: 'Nike', price: {$gte: 300}}).exec()
//         console.log(shoes)
//     } catch (err) {
//         console.log(err)
//     }
// }

// find shoes order by id
// const getShoe = async () => {
//     try {
//         // const shoes = await Shoe.findOne({_id: '653cd455b028b3854fd7ad74'}).exec()
//
//         // findById
//         // const shoes = await Shoe.findById('653cd455b028b3854fd7ad74').exec()
//         // console.log(shoes)
//         // console.log(`Get One : ${shoes.name}`)
//
//         // updateOne
//         // const res = await Shoe.updateOne({name: 'Nike'}, {price: 500})
//
//         // updateMany
//         // const res = await Shoe.updateMany({name: 'Nike'}, {size: 20}, {new: true})
//
//         // deleteOne
//         // const res = await Shoe.deleteOne({name: 'Nike'})
//
//         // deleteMany
//         // const res = await Shoe.deleteMany({name: /Nike/, quantity: {$gte: 10}})
//         console.log(res)
//     } catch (err) {
//         console.log(err)
//     }
// }

// create a new shoe or instance object of the model
// const shoe = new Shoe({
//     name: 'Nike',
//     brand: 'Nike',
//     price: 100,
//     size: 10,
//     color: 'Black',
//     image: 'https://images.unsplash.com/photo-1580927752452-9d9b3c2c4c5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ydGhfYmFja2dyb3VuZCUyMHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
//     description: 'This is a shoe',
//     quantity: 10
// })

// Shoe.insertMany([
//     {
//         name: 'Nike',
//         brand: 'Nike',
//         price: 100,
//         size: 10,
//         color: 'Black',
//         image: 'https://images.unsplash.com/photo-1580927752452-9d9b3c2c4c5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ydGhfYmFja2dyb3VuZCUyMHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
//         description: 'This is a shoe',
//         quantity: 10
//     },
//     {
//         name: 'Air Jordan',
//         brand: 'Nike',
//         price: 200,
//         size: 12,
//         color: 'White',
//         image: 'https://images.unsplash.com/photo-1580927752452-9d9b3c2c4c5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ydGhfYmFja2dyb3VuZCUyMHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
//         description: 'This is a shoe',
//         quantity: 10
//     },
//     {
//         name: 'Nike',
//         brand: 'Converse',
//         price: 300,
//         size: 8,
//         color: 'Red',
//         image: 'https://images.unsplash.com/photo-1580927752452-9d9b3c2c4c5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ydGhfYmFja2dyb3VuZCUyMHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
//         description: 'This is a shoe',
//         quantity: 10
//     }
// ]).then((result) => {
//     console.log('its works')
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

// save the shoe to the database
// shoe.save()

// getShoe()
main()