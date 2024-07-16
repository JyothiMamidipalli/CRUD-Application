var studentDetails = [
  {
    name: "M.Jyothi",
    roll: "22A91A12A7",
    department: "IT",
    age: 19,
    campus: "AEC",
  },
  {
    name: "N R YADAV",
    roll: "22A91A05E7",
    department: "CSE",
    age: 23,
    campus: "AEC",
  },
  {
    name: "Divya",
    roll: "22A91A12B1",
    department: "ECE",
    age: 22,
    campus: "AEC",
  },
  {
    name: "Pavani",
    roll: "22A91A12C3",
    department: "IT",
    age: 21,
    campus: "AEC",
  },
];
var cnt = 5;
var rowCount = 0;
var db;
mainFun = () => {
  if (document.getElementsByClassName("button")[0].innerHTML === "Show") {
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "lightpink";
    body.style.transition = "all 0.5s ease";
    var but = document.getElementsByClassName("button")[0];
    but.innerHTML = "ADD";
    var t = document.getElementsByTagName("table")[0];
    t.style.opacity = 1;
    t.style.transition = "all 0.6s ease";
    t.style.marginBottom = "30px";
    for (let i = 0; i < 5; i++) {
      let a = document.createElement("tr");
      if(i===0) {
        a.style.borderLeft="1px solid black";
      }
      a.style.backgroundColor = "transparent";
      a.style.color = "black";
      a.style.display = "flex";
      a.style.height = "100px";
      a.style.width = "1200px";
      for (var j = 0; j < 6; j++) {
        
        var b = document.createElement("th");
        if(i===0) {
          b.style.borderTop="1px solid black";
          b.style.borderRight="1px solid black";
          b.style.borderBottom="2px solid black";
        }
        if(i===4)
        {
          b.style.borderBottom="3px solid black";
        }
        b.style.backgroundColor = "transparent";
        b.style.color = "black";
        b.style.height = "100px";
        b.style.width = "200px";

        if (j === 5) {
          b.style.border = "1px solid black";
          b.style.display = "flex";
          b.style.justifyContent = "center";
          b.style.alignItems = "center";
          if (i !== 0) {
            db = document.createElement("button");
            db.style.height = "50px";
            db.style.width = "130px";
            db.innerHTML = "Delete";
            db.style.fontSize = "25px";
            db.style.fontWeight = "700";
            db.style.cursor = "pointer";
            db.className = "dlt";
            db.addEventListener("click", deletingRow);
            b.append(db);
          }
        } else {
          var inp = document.createElement("input");
          inp.style.position = "absolute";
          inp.style.zIndex = "1";
          inp.style.backgroundColor = "transparent";
          inp.style.color = "black";
          inp.style.display = "block";
          inp.style.height = "100px";
          inp.style.width = "200px";
          inp.style.outline = "0";
          inp.style.fontSize = "25px";
          inp.style.textAlign = "center";
          if (i === 0) {
            inp.style.fontSize = "35px";
            inp.disabled = true;
          }
          inp.addEventListener("mouseover", inpMouseEntry);
          inp.addEventListener("mouseleave", inpMouseExit);
          b.append(inp);
        }
        a.append(b);
      }
      t.appendChild(a);
    }
    let h1 = document.getElementsByTagName("input")[0];
    h1.value = "Name";
    let h2 = document.getElementsByTagName("input")[1];
    h2.value = "Roll No.";
    let h3 = document.getElementsByTagName("input")[2];
    h3.value = "Department";
    let h4 = document.getElementsByTagName("input")[3];
    h4.value = "Age";
    let h5 = document.getElementsByTagName("input")[4];
    h5.value = "Campus";
    let h6 = document.getElementsByTagName("th")[5];
    h6.style.textAlign = "center";
    h6.style.alignContent = "center";
    h6.innerHTML = "Remove";
    h6.style.color = "";
    h6.style.fontSize = "30px";
    studentDetails.forEach((item) => {
      for (let k = 0; k < 5; k++) {
        let temp = document.getElementsByTagName("input")[cnt];
        cnt += 1;
        if (k === 0) {
          temp.value = item.name;
        } else if (k === 1) {
          temp.value = item.roll;
        } else if (k === 2) {
          temp.value = item.department;
        } else if (k === 3) {
          temp.value = item.age;
        } else if (k === 4) {
          temp.value = item.campus;
        }
      }
    });
  } else {
    let tempObject = {
      name: prompt("Enter Your Name"),
      roll: prompt("Enter Your Roll No."),
      department: prompt("Enter Your Deparment Name"),
      age: prompt("Enter Your Age"),
      campus: prompt("Enter Your Campus"),
    };
    var t = document.getElementsByTagName("table")[0];
    let a = document.createElement("tr");
    a.style.display = "flex";
    a.style.height = "100px";
    a.style.width = "1200px";
    for (let j = 0; j < 6; j++) {
      var b = document.createElement("th");
      b.style.outline = "0";
      b.style.height = "100px";
      b.style.width = "200px";
      if (j !== 5) {
        var inp = document.createElement("input");
        inp.style.backgroundColor = "transparent";
        inp.style.color = "#E90074";
        inp.style.display = "block";
        inp.style.height = "100px";
        inp.style.width = "200px";
        inp.style.outline = "0";
        inp.style.fontSize = "30px";
        inp.style.textAlign = "center";
        b.append(inp);
      } else {
        b.style.border = "3px solid white";
        b.style.display = "flex";
        b.style.justifyContent = "center";
        b.style.alignItems = "center";
        db = document.createElement("button");
        db.style.height = "50px";
        db.style.width = "130px";
        db.innerHTML = "Delete";
        db.style.fontSize = "25px";
        db.style.fontWeight = "700";
        db.style.cursor = "pointer";
        db.className = "dlt";
        db.addEventListener("click", deletingRow);
        db.addEventListener("mouseover", dbMouseEntry);
        db.addEventListener("mouseleave", dbMouseExit);
        b.append(db);
      }
      a.appendChild(b);
    }
    t.appendChild(a);
    for (let k = 0; k < 5; k++) {
      let temp = document.getElementsByTagName("input")[cnt];
      cnt += 1;
      if (k === 0) {
        temp.value = tempObject.name;
      } else if (k === 1) {
        temp.value = tempObject.roll;
      } else if (k === 2) {
        temp.value = tempObject.department;
      } else if (k === 3) {
        temp.value = tempObject.age;
      } else {
        temp.value = tempObject.campus;
      }
    }
    studentDetails.push(tempObject);
  }
};

deletingRow = (event) => {
  var row = event.target.closest("tr");
  row.parentNode.removeChild(row);
};
inpMouseEntry = (event) => {
  event.target.style.backgroundColor = "#E90074";
  event.target.style.color = "white";
  event.target.style.cursor = "pointer";
  event.target.style.transform = "scale(1.03)";
  event.target.style.zIndex = "90";
  event.target.style.fontSize = "30px";
  event.target.style.transition = "all 0.3s ease";
};

inpMouseExit = (event) => {
  event.target.style.backgroundColor = "transparent";
  event.target.style.color = "black";
  event.target.style.transform = "scale(1)";
  event.target.style.zIndex = "1";
  event.target.style.fontSize = "25px";
  event.target.style.transition = "all 0s ease";
};

dbMouseEntry = (event) => {
  event.target.style.backgroundColor = "red";
  event.target.style.color = "red ";
  event.target.style.zIndex = "90";
  event.target.style.transition = "all 0.3s ease";
};

dbMouseExit = (event) => {
  event.target.style.backgroundColor = "red";
  event.target.style.color = "white";
  event.target.style.zIndex = "1";
  event.target.style.transition = "all 0.6s ease";
};
