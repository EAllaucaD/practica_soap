import express from "express";
import getSoapData from "./Cliente2.js";

const app = express();
const port = 2000;

app.use(express.static('public'));

app.get("/soap-data", async (req, res) => {
    try {
        const data = await getSoapData();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching SOAP data");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
