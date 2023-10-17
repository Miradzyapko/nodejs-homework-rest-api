const mongoose = require('mongoose')
const app = require('./app');

/* Md3oY0uiHBnm32gQ */
const DB_HOST ="mongodb+srv://Mira:Md3oY0uiHBnm32gQ@cluster0.gkw5pgd.mongodb.net/db-contacts?retryWrites=true&w=majority"
mongoose.connect(DB_HOST)
.then(()=> {
app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000")
})
})
.catch(error => {
  console.log(error.message);
  process.exit(1);
})