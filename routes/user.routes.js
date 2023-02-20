const express = require("express");
const router = express.Router();

const User = require("../models/User.model.js");
const Product = require("../models/Product.model.js")
const {isLoggedIn, isCliente, isVendedor} = require("../middlewares/auth-middleware.js")


// GET => renderiza vista de perfil de vendedor
router.get("/perfVendedor", isLoggedIn, isVendedor, async(req,res,next)=>{

    const response = await Product.find();
        res.render("vendedor/perfil-privado.hbs",{
      allProduct: response
    })
})

// GET => renderiza vista de formulario de update de vendedor
router.get("/perfVendedor/update", isLoggedIn, isVendedor, (req,res,next)=>{
  res.render("vendedor/update-vendedor-form.hbs")
})

// GET => renderiza vista de formulario cliente
router.get("/perfCliente", isLoggedIn, isCliente, (req,res,next)=>{
  res.render("cliente/perfil-privado.hbs")
})

// GET => renderiza vista de formulario de update de cliente
router.get("/perfCliente/update", isLoggedIn, isCliente, (req,res,next)=>{
  res.render("cliente/update-cliente-form.hbs")
})

//POST => Elimina un usuario de la BD
router.post("/:idUser" , isLoggedIn, async (req,res,next)=>{

  const {idUser} = req.params

  try {

    await User.findByIdAndDelete(idUser)
    req.session.destroy(() => {
      res.redirect("/auth/signup");
    })  
    
  } catch (error) {
    next (error)
  }

})
  


  module.exports = router;