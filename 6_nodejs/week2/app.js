const fs = require('fs').promises;
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


// Support parsing JSON requests
app.use(express.json());


app.get("/", (req, res) => {
    res.send("This is a search engine");
});


// GET /search

app.get('/search', async (req, res) => {
    try {
        const documents = JSON.parse(await fs.readFile('documents.json'));
        const { q } = req.query;

        if (!q) {
            res.json(documents);
        } else {
            const filteredDocuments = documents.filter(document =>
                Object.values(document).some(value => String(value).includes(q))
            );
            res.json(filteredDocuments);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An unexpected error occurred while processing your request.' });
    }
});

// GET /documents/:id

app.get('/documents/:id', async (req, res) => {
    try {
        const documents = JSON.parse(await fs.readFile('documents.json'));
        const { id } = req.params;
        const document = documents.find(doc => doc.id === id);

        if (document) {
            res.json(document);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: 'Not found' });
    }
});


//POST /search

app.post("/search", async (req, res) => {
    try {
        const documents = JSON.parse(await fs.readFile('documents.json'));
        const { q, fields } = req.query;

        if (q && fields) {
            return res.status(400).json({
                message: "Query param and fields cannot be used together"
            });
        }

        let results = documents;

        if (q) {
            results = filterByQueryParam(results, q);
        }

        if (fields) {
            results = filterByFields(results, fields);
        }

        return res.json(results);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'An unexpected error occurred while processing your request.'
        });
    }
});

function filterByQueryParam(documents, query) {
    return documents.filter(document =>
        Object.values(document).some(value => String(value).includes(query))
    );
}

function filterByFields(documents, filterFields) {
    return documents.filter(document =>
        Object.entries(filterFields).every(([key, value]) => document[key] === value)
    );
}

  app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});