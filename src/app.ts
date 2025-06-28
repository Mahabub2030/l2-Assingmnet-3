import express, { Application, Request, Response } from "express";
// const express = require("express");
const app:Application = express();

const port = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("hello from server");
});

app.listen(port, () => {
  console.log(`libiry app listening on port ${port}`);
});
