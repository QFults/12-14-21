const router = require('express').Router()
const db = require('../db')

router.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, users) => {
    if (err) { console.log(users) }
    res.json(users)
  })
})

router.post('/users', (req, res) => {
  db.query('INSERT INTO users SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.put('/users/:id', (req, res) => {
  db.query('UPDATE users SET ? WHERE ?', [req.body, { id: req.params.id }], err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.delete('/users/:id', (req, res) => {
  db.query('DELETE FROM users WHERE ?', { id: req.params.id }, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

module.exports = router
