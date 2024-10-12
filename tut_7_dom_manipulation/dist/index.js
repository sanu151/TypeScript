"use strict";
// Select DOM Elements
const userForm = document.querySelector(".user-form");
const userName = userForm === null || userForm === void 0 ? void 0 : userForm.querySelector("#name");
const userEmail = userForm.querySelector("#email");
const userCountry = userForm.querySelector("#country");
const userGender = userForm.querySelector('input[name = "gender"]');
const userFeedback = userForm.querySelector("#feedback");
// Collect Form Values
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        username: userName.value,
        useremail: userEmail.value,
        usercountry: userCountry.value,
        usergender: userGender.value,
        userfeedback: userFeedback.value,
    };
    console.log(data);
});
