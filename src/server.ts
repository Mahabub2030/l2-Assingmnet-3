import app from "./app";

let server;
const port = 9000;

const boostrap = async () => {
    app.listen(port, () => {
      console.log(`libiry app listening on port ${port}`);
    });
}
boostrap()