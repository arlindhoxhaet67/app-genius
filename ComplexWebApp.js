/*
File Name: ComplexWebApp.js
Description: This JavaScript code represents a complex web application with multiple features, including authentication, form validation, AJAX requests, and DOM manipulation.
Author: John Doe
Date: January 1, 2023
*/

// User Authentication Module
class UserAuth {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  static validate(username, password) {
    // Simulating server-side authentication
    return username === "admin" && password === "password";
  }
}

// Form Validation Module
class FormValidator {
  static validateForm(elementId) {
    const formElement = document.getElementById(elementId);
    const inputElements = formElement.getElementsByTagName("input");
    let isValid = true;

    for (let i = 0; i < inputElements.length; i++) {
      if (inputElements[i].value.trim() === "") {
        isValid = false;
        inputElements[i].classList.add("error");
      } else {
        inputElements[i].classList.remove("error");
      }
    }

    return isValid;
  }
}

// AJAX Request Module
class AjaxRequest {
  static sendRequest(url, data) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.onload = function () {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = function () {
        reject("Network Error");
      };
      xhr.send(JSON.stringify(data));
    });
  }
}

// DOM Manipulation Module
class DomManipulator {
  static showMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.className = className;
    messageElement.appendChild(document.createTextNode(message));
    document.body.appendChild(messageElement);
  }
}

// Main Application
(function () {
  // Login Page
  const username = prompt("Enter username:");
  const password = prompt("Enter password:");
  const isAuthenticated = UserAuth.validate(username, password);

  if (isAuthenticated) {
    DomManipulator.showMessage("Login successful!", "success");
  } else {
    DomManipulator.showMessage("Invalid credentials!", "error");
    return;
  }

  // Check if the form is valid
  const isFormValid = FormValidator.validateForm("myForm");

  if (!isFormValid) {
    DomManipulator.showMessage("Please fill in all fields!", "error");
    return;
  }

  // Submit form via AJAX
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  AjaxRequest.sendRequest("https://api.example.com/submit", formData)
    .then((response) => {
      DomManipulator.showMessage(response, "success");
    })
    .catch((error) => {
      DomManipulator.showMessage(error, "error");
    });
})();