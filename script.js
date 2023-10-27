// let database = [];

"use strict";
let users;
if (localStorage.users) {
  users = JSON.parse(localStorage.getItem("users"));
} else {
  users = [];
  localStorage.setItem("users", JSON.stringify(users));
}

function submitForm() {
  let userName = document.querySelector("fname").value;
  let email = document.querySelector("#email").value;
  let age = document.querySelector("#lname").value;
  let password = document.querySelector("#password").value;

  users = JSON.parse(localStorage.getItem("users"));

  let userResult = {
    username: userName,
    email: email,
    age: age,
    password: password,
  };

  users.push(userResult);

  console.log(users);
  localStorage.setItem("users", JSON.stringify(users));

  // let user = (result);
  // console.log(user.length);
  // for (i = 0; i < user.length; i++) {
  //   console.log(user[i])
  // };

  // database.push(user);

  // console.log(database);
  // localStorage.setItem("users", JSON.stringify(user));

  // let table = document.querySelector("#tableBody");
  // line = "";
  // for (x = 0; x < database.length; x++) {
  //   line +=
  //     "<tr> <th scope='row'>" +
  //     (x + 1) +
  //     "</th><td>" +
  //     user[0] +
  //     "</td><td>" +
  //     user[1] +
  //     "</td><td>" +
  //     user[2] +
  //     "</td><td>" +
  //     user[3] +
  //     "</td><td>" +
  //     user[4] +
  //     "</td><tr>";
  // };

  // table.innerHTML = line;
}

// console.log(database.length);
// console.log(database);

// function writeStudent() {
//     let table = document.querySelector('#tableBody');
//     line = "";
//     for (x = 0; x < database.length; x++) {
//         line += "<tr> <th scope='row'>" +
//         (x + 1) +
//         "</th><td>" +
//         database[0] +
//         "</td> <td>"
//         "<tr>";
//         console.log(database);
//         console.log(database.length);
//         console.log(user[1]);

//     }

//     table.innerHTML = line;
// }

// function login() {
//   let memberList = localStorage.getItem("members");
//   memberData = JSON.parse(memberList);

//   console.log(memberData);
//   console.log(memberData.length);

//   let emailInput = document.querySelector("#email").value;
//   let passwordInput = document.querySelector("#password").value;
// }

// function loadStudentList() {
//     let userList = localStorage.getItem("members");
//     let newUserList = JSON.parse(userList);

//     console.log(newUserList);

//     let display = " ";
//     for (let i = 0; i < newUserList.length; i++) {
//         console.log(i);
//     }
// }
