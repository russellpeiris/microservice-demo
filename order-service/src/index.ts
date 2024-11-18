import axios from "axios";
import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get("/test-order", (req: Request, res: Response) => {
    res.send("Order Service is running!");
});

//ping the user microservice 
app.get('/test-user-through-order', async (req: Request, res: Response) => {
    try {
        const response = await axios.get('http://user-service:3000/test');
        res.status(response.status).json(response.data);
    } catch (error: any) {
        console.error("Error communicating with user-service:", error.message);
        res.status(500).json({ error: "Failed to fetch data from user-service" });
    }
});

app.listen(port, () => {
    console.log(`Order Service listening on port ${port}`);
});
