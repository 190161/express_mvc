//アクションメソッド
exports.index = (req, res) => {
    //res.send('HomeController index')
    //処理
    let data = {
        title: 'Index Page',
        message: 'Welcome to Homepage',
    }
    // HTML の表示 & data を受け渡す
    res.render('home/index.ejs', data)
}

exports.about = (req, res) => {
    //処理
    let data = {
        title: 'About Page',
        message: 'This is about page',
        name: 'Tokyo Taro',
    }
    // HTML の表示 & data を受け渡す
    res.render('home/about.ejs', data)
}

exports.items = (req, res) => {
    let items = [
        {name: 'Apple', price: 150},
        {name: 'Orange', price: 200},
        {name: 'Peacn', price: 350},
    ]
    //処理
    let data = {
        items: items,
    }
    // HTML の表示 & data を受け渡す
    res.render('home/items.ejs', data)
}