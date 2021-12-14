// const mysql = require('mysql2')

// const db = mysql.createConnection('mysql://root:rootroot@localhost:3306/users_db')

// db.connect(() => console.log('connected!'))

// db.query('SELECT * FROM users', (err, users) => {
//   if (err) { console.log(err) }
//   console.log(users)
// })

// const user = {
//   name: 'Jane Doe',
//   email: 'janedoe@gmail.com',
//   phone: 1222222222,
//   isAdmin: true
// }

// db.query('INSERT INTO users SET ?', user, err => {
//   if (err) { console.log(err) }
//   console.log('User created!')
// })