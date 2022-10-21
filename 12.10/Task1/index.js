let fs = require("fs"),
  request = require("request");

//* if url & path on argv
if (process.argv[2] && process.argv[3])
  request.get(process.argv[2], function (err, res) {
    if (err) {
      console.log("Error while requesting url: " + err);
      return;
    }
    if (
      checkFormat(process.argv[2], res.headers["content-type"])
    )
      request(process.argv[2])
        .pipe(fs.createWriteStream(process.argv[3]))
        .on("close", () => {
          console.log("Image downloaded succesfully");
        });
    else console.log("Error on image format");
  });

function checkFormat(str1, str2) {
  return str1.split(".").pop() === str2.split("/").pop();
}