const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/search", (req, res) => {
  const query = req.query.q;

  try {
    const data = fs.readFileSync("./documents.json", "utf8");
    const documents = JSON.parse(data);

    if (!query) {
      res.json(documents);
    } else {
      const filteredDocuments = documents.filter((doc) => {
        return (
          (doc.name && doc.name.includes(query)) ||
          (doc.price && doc.price.includes(query)) ||
          (doc.description && doc.description.includes(query)) ||
          (doc.type && doc.type.includes(query)) ||
          (doc.value && doc.value.includes(query))
        );
      });

      res.json(filteredDocuments);
    }
  } catch (error) {
    console.error("Error reading JSON file:", error);
    res.status(500).json({ error: "Error reading JSON file" });
  }
});

app.get("/documents/:id", (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const data = fs.readFileSync("./documents.json", "utf8");
    const documents = JSON.parse(data);

    const foundDocument = documents.find((doc) => doc.id === id);

    if (foundDocument) {
      res.json(foundDocument);
    } else {
      res.status(404).send("Error 404: Document not found");
    }
  } catch (error) {
    console.error("Error reading JSON file:", error);
    res.status(500).send("Error reading JSON file");
  }
});

app.post("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;

  if (query && fields) {
    res.status(400).json({ error: '"query" and "fields" cannot be provided' });
    return;
  }

  try {
    const data = fs.readFileSync("./documents.json", "utf8");
    const documents = JSON.parse(data);

    let filteredDocuments = documents;

    if (query) {
      filteredDocuments = filteredDocuments.filter((doc) =>
        Object.values(doc).some((value) => value.includes(query))
      );
    }

    if (fields) {
      filteredDocuments = filteredDocuments.filter((doc) =>
        Object.entries(fields).every(
          ([key, value]) => doc[key] && doc[key].toString() === value.toString()
        )
      );
    }

    res.json(filteredDocuments);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    res.status(500).json({ error: "Error reading JSON file" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
