import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import pageRenderer from "./utils/pageRenderer";

const app = express();

// view engine setup
// app.engine("html", es6Renderer);
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "html");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use("/templates", express.static(path.resolve(__dirname, "./templates")));
// app.get("/templates/*", express.static(path.resolve(__dirname, "./templates")));

app.get("*", pageRenderer);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("Error occurred : " + err.message);
});

export default app;
