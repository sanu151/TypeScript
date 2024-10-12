// Select DOM Elements
const userForm = document.querySelector(".user-form") as HTMLFormElement;
const userName = userForm?.querySelector("#name") as HTMLInputElement;
const userEmail = userForm.querySelector("#email") as HTMLInputElement;
const userCountry = userForm.querySelector("#country") as HTMLSelectElement;
const userGender = userForm.querySelector(
  'input[name = "gender"]'
) as HTMLInputElement;
const userFeedback = userForm.querySelector("#feedback") as HTMLTextAreaElement;

// Collect Form Values
userForm.addEventListener("submit", (event: Event) => {
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
