const PetController = require("../controllers/pet.controller");


module.exports = app => {

    app.get("/api/pets", PetController.findAllPets); // todas las pets

    app.get("/api/pets/:id", PetController.findOnePet); // traer pet por id

    app.put("/api/pets/update/:id", PetController.updatePet); // modificar una pet

    app.post("/api/pets/new", PetController.createPet); // crea una pet

    app.delete("/api/pets/delete/:id", PetController.deletePet); // borra una pet cuando es adoptada

};