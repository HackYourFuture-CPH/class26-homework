const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const documents = require("./document.json");
const { filterByQueryParam, filterByFields } = require('./util')

// Support parsing JSON requests
app.use(express.json());


//  GET/search
app.get("/search", (req, res) => {
  const queryParam = req.query.q;

  if (!queryParam) {
    return res.json(documents);
  }

  const results = filterByQueryParam(queryParam);

  return res.json(results);
})

//GET /documents/:id

app.get("/documents/:id", (req, res) => {

  const id = parseInt(req.params.id);
  const document = documents.find(doc => doc.id === id);

  if (!document) {
    return res.status(404).json({ message: "Document not found" });
  }
  
  return res.json(document);
})

//POST /search

app.post("/search", (req, res) => {
  const queryParam = req.query.q;
  const fields = req.body?.fields
  
  if(queryParam && fields){
    return res.status(400).json({
      message: "Query param and fields cannot be used together"
    })
  }

  if (queryParam) {
    const results = filterByQueryParam(queryParam);
    return res.json(results);
  }

  if(fields){
    const results = filterByFields(fields);
    return res.json(results); 
  }

  return res.json(documents);
});




app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});