// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
//放在所有路由設定之前，使不管從哪個路由發送過來的請求，都先經過 bodyParser 進行前置處理
app.use(express.urlencoded({ extended: true }))

console.log(module)

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', { password: password, options: options })
  //當物件的屬性名稱和屬性要帶入的變數名稱相同時，可簡寫成屬性名稱即可
  //res.render('index', { password, options })
})


// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})