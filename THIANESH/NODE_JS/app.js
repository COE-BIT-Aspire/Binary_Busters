// //console.log("Welcome buddy");
// let array1 = [1, 2, 3, 4, 5];
// array1[1] = 20;
// array1[5] = 6; //size can be increased
// //console.log(array1);
// array1[1] = 2;

// let array2 = [7, 8, 9, 10];
// let array3 = new Array(array1, array2);
// console.log(array3);

// function reqListener(req,res){
//     console.log(req);
// } No need for external functions
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<form action=\"/sample\" method='POST'>");
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
    });

    fs.writeFileSync("hello.txt", "Dummy");
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
});
server.listen(3000);
