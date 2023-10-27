//collect the customer data
let students; //declare studenst
if (localStorage.students) {
  //check if we have any students in the local storage
  //if we have, send the data in the locastorge into the student variable
  students = JSON.parse(localStorage.getItem("students"));
} else {
  //if we do not have anything like student in out local storage/Database create a student array
  students = [];
  // create a databse location called Students
  localStorage.setItem("students", JSON.stringify(students));
}

// we will be collecting what the user enters into the inpput tags
function collectData() {
  //collecting what the users has entered and sending it to a variable
  let firstName = document.querySelector("#fname").value;
  let lastName = document.querySelector("#lname").value;
  let Hobbies = document.querySelector("#Hobbies").value;
  let phoneNumber = document.querySelector("#number").value;
  let password = document.querySelector("#password").value;

  //let create an object to save all these values as one user foe exmaple -> [{user1},{user2},{user3}]
  let thisStudent = {
    fName: firstName,
    lName: lastName,
    Hobbie: Hobbies,
    pNumber: phoneNumber,
    Password: password,
  };

  // mow push all the values from this user into the studnets array [];
  students.push(thisStudent);

  // update what the user just entred to the local storage
  localStorage.setItem("students", JSON.stringify(students));

  // display the update in the DOM
  addStudents();
}

//function to add the entries on the Frontend or on the DOM
function addStudents() {
  //get all the values of student from the localSTorage and assign it to (let student)
  let students = JSON.parse(localStorage.getItem("students"));

  //just a gimmick to display it on the dom so that it can keep adding one after another
  let display = "";
  let display2 = ""; // ignore it,,, it is for latest registration

  // loop through everything in students and display the HTML with the values in the DOM
  for (let i in students) {
    display += `<tr class="block-${i}"><td>${Number(i) + 1}</td>
        <td> ${students[i].fName}</td> <td>${students[i].lName}</td> <td>${
      students[i].Hobbie
    }</td> <td>${students[i].pNumber}</td> <td>${
      students[i].Password
    }</td> <td><button id="Del-${i}" class="btn-danger btn" onclick="removeStudent(${i})">Delete</button></td> <td> <button id="Edit-${i}" class="btn btn-secondary hidden Update-${i}" onclick="EditStudents(${i})">Edit</button> </td>
       </tr>`;
  }

  //  show the final value in the DOM
  table.innerHTML = display;

  //ignore
  // this aspect is simply showing the latest registration of users
  if (students.length >= 4) {
    //start showing latest registration when we have four studenst registered
    for (let i = students.length - 1; i >= students.length - 3; i--) {
      display2 += ` <div class="customers">
    <span>${students.length - Number(i)}</span>
    <p>${students[i].fName}</p>
  </div>`;
    }
    document.querySelector(".latestCustomers").innerHTML = display2;
  } else {
    display2 = "";
  }
  resetform();
}
addStudents();

//deleting srudents
function removeStudent(i) {
  //get students from the loacl storage
  let students = JSON.parse(localStorage.getItem("students"));
  students.splice(i, 1); //delete the on eyou selected

  //update the local storage
  localStorage.setItem("students", JSON.stringify(students));
  //update the DOM
  addStudents();
  resetform();
}

//editing studnest section
function EditStudents(i) {
  //create a new update button everytime the edit button is clicked
  var button = document.createElement("button");
  button.innerText = "Update";
  button.className = "btn btn-warning hidden upBtn";
  document.querySelector("#updateSection").appendChild(button);

  // get the values of studnets form the local storage
  let students = JSON.parse(localStorage.getItem("students"));

  //  populate the input tag with what is in the studnets loal storage
  document.querySelector(".fname").value = students[i].fName;
  document.querySelector(".lname").value = students[i].lName;
  document.querySelector(".Hobbies").value = students[i].Hobbie;
  document.querySelector(".number").value = students[i].pNumber;
  document.querySelector(".password").value = students[i].Password;

  //whne you click the update button send what is in the input tag back to the local storage
  button.addEventListener("click", function () {
    students[i].fName = document.querySelector(".fname").value;
    students[i].lName = document.querySelector(".lname").value;
    students[i].Hobbie = document.querySelector(".Hobbies").value;
    students[i].pNumber = document.querySelector(".number").value;
    students[i].Password = document.querySelector(".password").value;

    //update everything you just did
    localStorage.setItem("students", JSON.stringify(students)); //updating
    //Display the pdate on the DOM
    addStudents();
  });

  //whne you click the edit button the modal blur and a the update box should appear
  document.querySelector(".update").classList.remove("hidden");
  document.querySelector(".modal-blur").classList.remove("hidden");
}

//whne you clikc the X button after updating
function closeen() {
  // window.location.reload();
  //remove the modal blur and the update box
  document.querySelector(".update").classList.add("hidden");
  document.querySelector(".modal-blur").classList.add("hidden");

  //deletes the update button that was there before as youclick on Edit
  const delbtns = document.querySelectorAll(".upBtn");
  delbtns.forEach((btn) => {
    btn.remove();
  });
}

// simply makes the form empty anytime you clikc on submit
function resetform() {
  document.querySelector("#fname").value = "";
  document.querySelector("#lname").value = "";
  document.querySelector("#Hobbies").value = "";
  document.querySelector("#number").value = "";
  document.querySelector("#password").value = "";
}

//END
