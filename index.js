const express = require('express')
const app = express()
const path = require("path");

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

// app.get('/', (req, res)=> {
//     res.send('<h1>Hello World!</h1>');
// })

app.post('/api/v1/quiz', (req, res) => {
    const answer = req.body.answer;
    // req.body...はテキストで返される
    if (answer === "2") {
        // res.send("正解！");
        res.redirect("/correct.html")
    } else {
        // res.send("不正解！");
        res.redirect("/wrong.html")
    }
})

app.get('/api/users', (req, res)=> {
    res.send({
        name: "MIKE",
        age: 30,
        school: "Kwansei Unversity"
    });
})


app.listen(3000, () => console.log('I am running!'));