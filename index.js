const express = require("express")
const { nav } = require("./nav.js")

const PORT = 9000
const app = express()

app.set("view engine", "ejs");
app.use(express.static("public"))

app.use((req, _, next) => {
    console.log("newest request", req.method, req.url);
    next()
})

app.get('/', (_, res) => {
    res.render("home", { nav })
})

app.get("/:name", (req, res) => {
    const pagename = req.params.name

    console.log(nav);
    console.log("pagename", pagename);

    const page = nav.find(site => site.url === "/" + pagename)

    console.log("page", page);


    console.log(page.name());

    const pname = page.name()
    res.render(pname, { nav })
})

app.listen(PORT), () => console.log("myserver is listening on port", PORT)