import express, { Application, Request, Response } from "express";
// const express = require("express");
const app:Application = express();


app.get("/", (req: Request, res: Response) => {
  res.send("hello from server");
});

app.get("/books", (req: Request, res: Response) => {
  res.send("hello from server");
});

app.post("/books/createBooks", (req: Request, res: Response) => {
  res.send("hello from server");
});


export default app;