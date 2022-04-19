const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required : [true, "Se requiere un nombre."],
        minlength: [2, "El nombre requiere minimo 2 caracteres."]
    },

    petType: {
        type: String,
        required : [true, "Se requiere tipo de mascota."],
        minlength: [2, "El tipo requiere minimo 2 caracteres."]
    },

    petDescription: {
        type: String,
        required : [true, "Se requiere una descripcion de la mascota."],
        minlength: [4, "La descripcion de la mascota requiere minimo 4 caracteres."]
    },
    petSkill1: {
        type: String,
        required : [true, "Se requiere una skill."],
        minlength: [3, "El skill requiere minimo 3 caracteres."]
    },
    petSkill2: {
        type: String,
        required : [true, "Se requiere una skill."],
        minlength: [3, "El skill requiere minimo 3 caracteres."]
    },
    petSkill3: {
        type: String,
        required : [true, "Se requiere una skill."],
        minlength: [3, "El skill requiere minimo 3 caracteres."]
    },

}, {timestamps: true});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
