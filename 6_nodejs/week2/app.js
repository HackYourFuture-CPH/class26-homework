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
        const document = documents.find(doc => doc.id === parseInt(id)); // its an integer

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

app.post('/search', async (req, res) => {
    try {
        const documents = JSON.parse(await fs.readFile('documents.json'));
        const { q } = req.query;
        const {fields} = req.body;

        if (q && fields) {
            res.status(400).json({ error: "Bad Request: query and fields can't be provided at the same time." });
        }

        if (q) {
            const filteredDocuments = documents.filter(document =>
                Object.values(document).some(value => String(value).includes(q))
            );
            res.json(filteredDocuments);
        }

        if (fields) {
            const filteredDocuments = documents.filter(doc =>
                (fields.price  && doc.price === fields.price) ||
                (!isNaN(fields.id)  && doc.id === parseInt(fields.id)) || // because its an integer
                (fields.description && String(doc.description).includes(fields.description)) ||
                (fields.name && String(doc.name).includes(fields.name))
            );
            res.json(filteredDocuments);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An unexpected error occurred while processing your request.' });
    }
});

  app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
