const { Schema, SchemaTypes, model } = require('mongoose')

const categoriesSchema = new Schema(
  {
    category: {
      type: String,
      required: [true, 'Set categories for config'],
    },
  },
  {
    versionKey: false,
    timestamps: false,
    // toObject: {
    //   virtuals: true,
    //   transform: function (doc, red) {
    //     delete red._id
    //     return red
    //   },
    // },
    toJSON: {
      virtuals: true,
      transform: function (doc, red) {
        delete red._id
        return red
      },
    },
  }
)

categoriesSchema.virtual('id').get(function () {
  return this._id
})

const contacts = model('categories', categoriesSchema)

module.exports = contacts
