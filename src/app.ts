import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import hpp from "hpp";
import { env } from "@/config/env";

const app = express();

app.use(helmet());
app.use(cors({
  origin: env.FRONTEND_URL,
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(hpp());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: `${env.APP_NAME} running`,
    timestamp: new Date().toISOString(),
    environment: env.NODE_ENV
  });
});

app.get("/api/health", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "The API is healthy",
    timestamp: new Date().toISOString()
  });
});

// 404 status for undefine routes
app.use((req: Request, res: Response) => {
  res.status(404).json({
    status: "error",
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

export default app;