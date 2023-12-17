const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { readFileSync } = require("fs");

const loadData = () => {
    try {
        const data = readFileSync('./documents.json');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error loading data:", error);
        return [];
    }
};

const searchDocumentsByQuery = (parsedData, query) => {
    return parsedData.filter(document => {
        for (const property in document) {
            const value = document[property];
            if (!isNaN(value) || !value.toLowerCase().includes(query.toLowerCase())) {
                continue;
            }
            return true;
        }
        return false;
    });
};

const searchDocumentsByFields = (parsedData, fields) => {
    return parsedData.filter(document => {
        for (const [field, value] of Object.entries(fields)) {
            if (!document.hasOwnProperty(field) || !document[field].includes(value)) {
                return false;
            }
        }
        return true;
    });
};

app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is a search engine");
});

app.get("/search", (req, res) => {
    const query = req.query.q;
    const parsedData = loadData();

    if (!query) {
        res.json(parsedData);
    } else {
        const searchResults = searchDocumentsByQuery(parsedData, query);
        res.json(searchResults);
    }
});

app.get("/documents/:id", (req, res) => {
    const id = req.params.id;
    const parsedData = loadData();

    const document = parsedData.find(doc => doc.id === parseInt(id));

    if (document) {
        res.json(document);
    } else {
        res.status(404).json({ error: "404 Document Not Found" });
    }
});

app.post("/search", (req, res) => {
    const query = req.query.q;
    const fields = req.body.fields;
    const parsedData = loadData();

    if (query) {
        const searchResults = searchDocumentsByQuery(parsedData, query);
        res.json(searchResults);
    } else if (fields) {
        const searchResults = searchDocumentsByFields(parsedData, fields);
        res.json(searchResults);
    } else {
        res.status(404).json({ error: "404 Document Not Found" });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
