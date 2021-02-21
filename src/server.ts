import bodyParser from "body-parser";
import App from "./app";

const app = new App({
  port: 3000,
  controllers: [],
  middlewares: [bodyParser.json(), bodyParser.urlencoded({ extended: true })],
});

app.listen();
