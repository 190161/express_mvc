const express = require('express')

//HomeController　モジュール読み込み
const homeController = require('./controllers/HomeController')

const router = express.Router()

//ルーティングの設定
// router.get('/', (req, res) => {
//     res.send('Hello routes /')
// })

//HomeController の index を実行
//HomeController
router.get('/', homeController.index)
router.get('/about', homeController.about)
router.get('/items', homeController.items)

module.exports = router