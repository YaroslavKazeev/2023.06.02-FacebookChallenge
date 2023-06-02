const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yaroslavkazeyev:tFva9V1Ex3Vxv0uz@cluster0.zzdkhgp.mongodb.net/')
.then(()=> console.log('DB is connected'))
.catch(err=> console.log(err))