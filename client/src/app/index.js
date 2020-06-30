import "./index.css";
import { getUsers } from "../api/userApi";

// Populate table via API call

getUsers().then((result) => {
  let usersBody = "";

  result.forEach((user) => {
    usersBody += `<tr>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
`;
  });

  global.document.getElementById("users").innerHTML = usersBody;
});

export const sum = (a, b) => a + b;
