import express, { Express, Request, Response, urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

dotenv.config();

const port = process.env.PORT;
const app: Express = express();

const limit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

// routers
import test from "./src/routers/test";
import users from "./src/routers/users";
import productInventory from "./src/routers/products";

app.use(cors());
app.use(helmet());
app.use(limit);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routers
app.use("/test", test);
app.use("/user", users);
app.use("/products", productInventory);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
