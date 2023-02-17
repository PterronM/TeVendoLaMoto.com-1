const { Schema, model, default: mongoose } = require("mongoose");

const productSchema = new Schema(
  {
    nombre: {
      type: String,
      trim: true,
      required: false,
    },
    precio: {
      type: Number,
      required: true,
      // trim: true
    },
    descripcion: {
      type: String,
      require: true
    },

    vendedor: String ,
    
    img: String //todo: URL DE CLOUDINARY
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Product = model("Producto", productSchema);

module.exports = Product;
