const mongoose = require('mongoose')
const main = async () => {
    try {
        mongoose.connect('mongodb://localhost:27017/shoes_db')
        console.log('Connected to Mongo')
    } catch (err) {
        console.log(err)
    }
}

// schema for products validation
// const productSchema = new mongoose.Schema({
//     name: {
//         type: String,
//     }, brand: {
//         type: String,
//     }, price: {
//         type: Number, required: true,
//     }
// })

// schema many type data
const shoeSchema = new mongoose.Schema({
    name: {
        type: String, required: true,
    }, brand: {
        type: String, required: true,
    }, price: {
        type: Number, required: true, min: [0, 'Price must be greater than 0'],
    }, color: {
        type: String, required: true,
    }, size: [{
        type: String, required: true,
    }], description: {
        type: String, required: true, maxlength: 200,
    }, condition: [{
        type: String,
    }], stock: {
        type: Number, required: true, min: 0,
    }, availability: {
        online: {
            type: Boolean, required: true,
        }, offline: {
            type: Boolean, required: true,
        }
    }
})

// custom method validation
shoeSchema.methods.outStock = function () {
    this.stock = 0
    return this.save()
}

const Shoe = mongoose.model('Shoe', shoeSchema)

// custom static validation
const changeStock = async (id) => {
    const foundShoe = await Shoe.findById(id)
    await foundShoe.outStock()
    console.log('Stock changed')
}

changeStock('653e3057bd86d79955f678cc')
// const Product = mongoose.model('Product', productSchema)

// save data
// const Shoe = mongoose.model('Shoe', shoeSchema)
// const shoe = new Shoe({
//     name: 'Air Jordan 1 Low',
//     brand: 'Nike',
//     price: 300,
//     color: 'Black',
//     size: ['40', '41', '42'],
//     description: 'Air Jordan 1 Low Black Toe',
//     condition: ['New', 'Second'],
//     stock: 10,
//     availability: {
//         online: true, offline: false
//     }
// })
// shoe.save().then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

// findOneAndUpdate
// new true to return the new data
// runValidators to run the validation
// Shoe.findOneAndUpdate({name: 'Air Jordan 1 Low'}, {price: -2100000}, {new: true, runValidators: true})
//     .then((res) => {
//         console.log(res)
//     }).catch((err) => {
//     console.log(err.errors.price.properties.message) // view custom error message
// })

// const low = new Product({name: 'Low', brand: 'Nike', price: '300'})
// low.save()
//     .then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
// })
// const insertProduct = async () => {
//     try {
//         // const low = new Product({name: 'Low', brand: 'Nike', price: "sdsadsda"})
//         // const low = new Shoe({name: 'Air Jordan 1 Low', brand: 'Nike', price: 300, color: 'Black', size: ['40', '41', '42'], description: 'Air Jordan 1 Low Black Toe', condition: ['New', 'Second'], stock: 10, availability: {online: true, offline: false}})
//
//         // updateOne Validation
//         const low = Shoe.updateOne({name: 'Air Jordan 1 Low'}, {price: ''})
//         // const res = await low.save()
//         const res = await low.exec()
//         console.log(res)
//     } catch (err) {
//         console.log(err)
//     }
// }

// insertProduct()
main()