const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { readFileSync } = require("fs");
const { parse } = require('path');

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is a search engine");
});

app.get("/search", (req, res) => {
    const query = req.query.q
    const data = readFileSync('./documents.json');
    const parsedData = JSON.parse(data);

    if (!query) {
        res.send(parsedData)
    }

    for (const document of parsedData) {
        for (const property in document) {
            const value = document[property]
            if (!isNaN(value)) {
                continue
            }
            if (value.toLowerCase().includes(query.toLowerCase())) {
                res.send(document);
            }
        }
    }

});

app.get("/documents/:id", (req, res) => {
    const id = req.params.id
    const data = readFileSync('./documents.json');
    const parsedData = JSON.parse(data);

    for (const document of parsedData) {
        if (document.id === parseInt(id)) {
            res.send(document);
        }
    }
    res.status(404).json({ error: "404 Document Not Found" });
});

app.post("/search", (req, res) => {
    const query = req.query.q
    const fields = req.body.fields
    const data = readFileSync('./documents.json');
    const parsedData = JSON.parse(data);

    if (query && fields) {
        res.status(400).json({ error: "Both query and fields can't be provided" });
    }

    if (query) {
        for (const document of parsedData) {
            for (const property in document) {
                const value = document[property]
                if (!isNaN(value)) {
                    continue
                }
                if (value.toLowerCase().includes(query.toLowerCase())) {
                    res.send(document);
                }
            }
        }
    }

    if (fields) {
        for (const document of parsedData) {
            let flag = true
            for (const [field, value] of Object.entries(fields)) {
                if (!document.hasOwnProperty(field) || !document[field].includes(value)) {
                    flag = false
                }
            }
            if (flag) {
                res.send(document);
            }
        }
    }

    res.status(404).json({ error: "404 Document Not Found" });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
