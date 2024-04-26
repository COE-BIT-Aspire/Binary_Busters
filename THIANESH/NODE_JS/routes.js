const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<form action='/sample' method='POST'>");
    res.write(
      '<input type="text" name="sample"><input type="submit" value="send">'
    );
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/sample" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log("Chunk:");
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const splittedMessage = parsedBody.split("=");
      console.log(splittedMessage[1]);
      fs.writeFileSync("hello.txt", splittedMessage[1]);
    });

    res.setHeader("Location", "/");
    res.statusCode = 302;
    return res.end();
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<body><h1>Server's response url:</h1></body>");
  res.write("</html>");
  res.end();
  //process.exit();//to stop the event loop
};
module.exports = {
  handler: requestHandler,
  someText: "printing something in random again",
};
