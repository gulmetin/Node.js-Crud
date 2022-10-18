const express = require('express');
const app = express();


app.use('/hello',(request, response, next) => {
    console.log("Middleware working, a new request has arrived");
    if(request.method=='POST'){
        console.log("Request sent for post request.");
    }
    next();
});

app.get("/hello", (request, response) => {
    response.send("Hello, You sent a GET request");
});

app.post("/hello", (request, response) => {
    response.send("Hello, You sent a POST request");
});

app.delete("/hello", (request, response) => {
    response.send("Hello, You sent a DELETE request");
});

app.put("/hello", (request, response) => {
    response.send("Hello, You sent a PUT request");
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});