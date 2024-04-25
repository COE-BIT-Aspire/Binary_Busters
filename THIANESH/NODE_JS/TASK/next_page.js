const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/form") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<form action=\"/sample\" method='POST'>");
    res.write('<input type="text" name="name">');
    res.write('<input type="email" name="mail">');
    res.write('<input type="number" name="phone">');
    res.write('<button type="submit">send</button>'); // changed input type to button
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/sample" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const decodedBody = decodeURIComponent(parsedBody); // decode URL-encoded form data
      const formData = decodedBody.split("&");
      const formDetails = {};
      for (const data of formData) {
        const keyValue = data.split("=");
        formDetails[keyValue[0]] = keyValue[1];
      }
      // Writing form details to hello.txt
      fs.writeFileSync("hello.txt", JSON.stringify(formDetails));
      // Redirecting to a new page to display form details
      res.setHeader("Location", "/display");
      res.statusCode = 302;
      return res.end();
    });
  }
  if (url === "/display") {
    // Reading form details from hello.txt and displaying on the page
    const formDetails = fs.readFileSync("hello.txt", "utf8");
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Form Details:</h1>");
    res.write("<pre>" + formDetails + "</pre>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<body><h1>Server's response url:</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
