const { Schema, model } = require('mongoose')

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    model: {
      type: String,
    },
    colors: {
      type: [String],
    },
    globalCategory: {
      type: String,
    },
    category: {
      type: String,
    },
    images: {
      type: [{ original: String, thumbnail: String, color: [String] }],
      require: [true, 'Image is required'],
    },
    sizes: {
      type: [String],
      default: {},
    },
    material: {
      type: [String],
      default: [],
    },
    popularity: {
      type: Number,
      default: 0,
    },
  },
  {
    bufferTimeoutMS: 300000,
    timestamps: true,
    toJSON: {
      transform: (_, ret) => {
        ret.id = ret._id
        delete ret._id
        ret.images.map((el) => delete el._id)
      },
    },
  }
)

const products = model('products', productSchema)

module.exports = products
