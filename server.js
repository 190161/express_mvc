//モジュール読み込み
const express = require('express')
//const ejs = require('ejs')
const config = require('config')
//追加
const layouts = require('express-ejs-layouts')

//カスタムモジュール　読み込み
const routes = require('./routes')

//config 設定
const port = config.server.port
const host = config.server.host

//Express を作成
const app = express()

//EJS を有効にする（テンプレートエンジンを利用する)
//修正
//app.set('ejs', ejs.renderFile)
//テンプレートエンジンを　EJS　にする
app.set('view engine', 'ejs')
//views/layouts/layout.ejs を利用する
app.set('layout', 'layouts/layout')
//レイアウトを有効にする
app.use(layouts)

//ミドルウェア設定
//JSON
app.use(express.json())

//URLエンコード
app.use(express.urlencoded({ extended: true }))

//静的ファイル有効
app.use(express.static(__dirname + '/public'))

//ミドルウェアルーティング
app.use('/',routes)

//ポート: 3000 ホスト: Localhost で待機
app.listen(port, host, () => {
    console.log(`app listen: http://${host}:${port}`)
});