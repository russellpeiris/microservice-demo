import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/test", (req: Request, res: Response) => {
    res.send("User Service is running!");
});

app.get("/user", (req: Request, res: Response) => {
    res.json({
        userId: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        role: "Admin",
    });
});
app.listen(port, () => {
    console.log(`User Service listening on port ${port}`);
});
