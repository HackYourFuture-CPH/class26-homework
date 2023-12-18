const knex = require("knex")({
    client: "mysql2",
    connection: {
        host: process.env.DB_HOST || "127.0.0.1",
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "Aaaaaa111*",
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


// URL with injections for test http://localhost:3000/api/contacts?sort=last_name;%20DROP%20TABLE%20contacts;%20DESC

contactsAPIRouter.get("/", async (req, res) => {
    let query = knex.select("*").from("contacts");

    if ("sort" in req.query) {
        const orderBy = req.query.sort.toString();
        if (orderBy.length > 0) {
            const [column, order] = orderBy.split(' ');
            if (column && order && (order.toUpperCase() === 'ASC' || order.toUpperCase() === 'DESC')) {
                query = query.orderBy(column, order);
            } else {
                res.status(400).json({ error: "Invalid sort parameter" });
                return;
            }
        }
    }

    const sql = query.toSQL().toNative();
    console.log("SQL", sql);

    try {
        const data = await query;
        res.json({ data });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: e.message });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});