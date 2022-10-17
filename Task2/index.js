let fs = require("fs");

let dbPath = "./students.json";
let db = null;

let method = process.argv[2];

if (method) {
  let name = process.argv[3];
  let age = process.argv[4];
  try {
    readJson();
  } catch (e) {
    console.log(e);
    return;
  }
  switch (method) {
    case "SEARCH":
      let matchIndex = match(name);
      if (matchIndex >= 0) console.log(db[matchIndex]);
      else console.log("The search did not return any match");
      break;
    case "CREATE":
      let exitsIndex = exists(name);
      if (exitsIndex === -1) {
        db.push({ name: name, age: age });
        saveJson();
        console.log("Student created succesfuly: " + name);
      } else console.log("Student already exists: " + db[exitsIndex].name);
      break;
    case "UPDATE":
      let updateIndex = exists(name);
      if (updateIndex > -1) {
        db[updateIndex] = { name: name, age: age };
        saveJson();
        console.log("Student updated succesfuly: " + name);
      } else console.log("Student does not exists");
      break;
    case "DELETE":
      let deleteIndex = exists(name);
      if (deleteIndex > -1) {
        db.splice(deleteIndex, 1);
        saveJson();
        console.log("Student deleted succesfuly: " + name);
      } else console.log("Student does not exists");
      break;
  }
}

function readJson() {
  db = JSON.parse(fs.readFileSync(dbPath));
}

function saveJson() {
  fs.writeFileSync(dbPath, JSON.stringify(db));
}

function match(filter) {
  let res = -1;
  db.forEach((student, i) => {
    if (student.name.includes(filter)) res = i;
  });
  return res;
}

function exists(name) {
  let res = -1;
  db.forEach((student, i) => {
    if (student.name === name) res = i;
  });
  return res;
}