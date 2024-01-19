const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "0.0.0.0",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "pass",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  try {
    let query = knex.select("*").from("contacts");

    if ("sort" in req.query) {
      const orderBy = req.query.sort.toString();
      if (orderBy.length > 0) {
        // Use query() instead of calling it as a function
        query = query.orderByRaw(knex.raw("??", [orderBy]));
      }
    }

    console.log("SQL", query.toSQL().sql);

    const data = await query;

    // Send a more specific response, including the status
    res.status(200).json({ success: true, data });
  } catch (e) {
    console.error(e);
    // Send a more specific error response
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
