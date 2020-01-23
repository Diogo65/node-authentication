const mongoose = require('../database/index');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false, //Para quando buscar o usuario e informação da senha não venha no array de usuarios
    },
    //Anotar a data que o registro foi criado
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

//encriptar a senha antes de salvar o usuário
// UserSchema.pre('save', async function(next){
//     const hash = await bcrypt.hash(this.password, 10);
//     this.password = hash;

//     next();
// });

//definir o nome do model passando o schema dele
const User = mongoose.model('User', UserSchema);

module.exports = User;