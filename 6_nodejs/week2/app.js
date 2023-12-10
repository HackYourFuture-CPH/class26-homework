const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('This is a search engine');
});

//Get request
app.get('/search', (req, res) => {
  const documents = JSON.parse(fs.readFileSync('documents.json'));
  const q = req.query.q;

  if (!q) {
    res.json(documents);
  } else {
    const filteredDocuments = documents.filter((document) =>
      Object.values(document).some((value) => String(value).includes(q))
    );
    res.json(filteredDocuments);
  }
});

// document/:id
app.get('/documents/:id', (req, res) => {
  const documents = JSON.parse(fs.readFileSync('documents.json'));
  const id = Number(req.params.id);
  const document = documents.find((doc) => doc.id === id);

  if (document) {
    res.json(document);
  } else {
    res.status(404).send('Document not found');
  }
});

//Post request
app.post('/search', (req, res) => {
  const documents = JSON.parse(fs.readFileSync('documents.json'));
  const q = req.query.q;
  const fields = req.body.fields;

  if (q && fields) {
    res.status(400).send("Both q and fields can't be provided");
  } else if (q) {
    const filteredDocuments = documents.filter((document) =>
      Object.values(document).some((value) => String(value).includes(q))
    );
    res.json(filteredDocuments);
  } else if (fields) {
    const filteredDocuments = documents.filter((document) =>
      Object.entries(fields).every(([key, value]) => document[key] === value)
    );
    res.json(filteredDocuments);
  } else {
    res.json(documents);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
//
