const Pet = require("../models/pet.model");


module.exports.findAllPets = (req, res) => { // traer todas las pets
    Pet.find()
        .then(allPets => res.json({ pets: allPets }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
};

module.exports.findOnePet = (req, res) => { // encontrar una pet
    Pet.findOne({ _id: req.params.id })
      .then(onePet => res.json({ pet: onePet }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createPet= (req, res) => { // crear una pet
    Pet.create(req.body)
      .then(newPet => res.json({ pet: newPet }))
      .catch(err => res.status(400).json(err));
};

module.exports.updatePet = (req,res)=>{ // actualizar una pet
    Pet.findOneAndUpdate({_id: req.params.id},req.body,{new:true})
        .then((updatePet)=>res.json({pet:updatePet}))
        .catch(err => res.status(400).json(err));
};

module.exports.deletePet = (req, res) => { // eliminar una pet
    Pet.deleteOne({ _id: req.params.id })
      .then((result) => res.json({ result: result }))
      .catch((err) => res.json({ message: "Something went wrong", error: err }));
};