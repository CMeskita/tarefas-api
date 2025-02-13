import app from "./src/app.js"


debugger;

const PORT = `${process.env.PORT}`;

app.listen(PORT, () => {
console.log(`Rodando em http://localhost:${PORT}`);
});