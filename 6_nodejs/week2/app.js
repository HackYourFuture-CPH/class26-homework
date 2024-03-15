import express from 'express';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Load documents from documents.json
let documents = [];
fs.readFile('documents.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading documents:", err);
    return;
  }
  documents = JSON.parse(data);
});

// GET /search
app.get("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;

  if (query && fields) {
    res.status(400).send("Both query parameter and fields in body cannot be provided simultaneously.");
  } else if (query) {
    const matchedDocuments = documents.filter(doc => Object.values(doc).some(value => typeof value === 'string' && value.includes(query)));
    res.json(matchedDocuments);
  } else {
    res.json(documents);
  }
});
