# Documentation for Liliana's Contribution

>Below was my code for the sidebar style. My industry expert advised me to add line height and make the text more readable so I added those attributes.
```css
<#sidebarContainer {
  font-family: "Montserrat", sans-serif;
  background-color: #44a692;
  width: 25vw;
  height: 100vh;
  margin-top: 3.5%;
  margin-left: 4.5%;
  float: left;
  line-height: 2.5; 
  letter-spacing: 1.5px;
  text-align: center;
  padding: 15px;
  border-radius: 5%;
  top: 3%;
  /* position: sticky; */
  overflow: scroll;
}
```

>I had trouble getting the localStorage to work because I didn't realize that the id's for the divs were not even set up. So the localStorage function was fine but I had to solve the problem in the HTML.
```js
 doneButton.addEventListener("click", function() {
        let userName = document.getElementById("user-name-input").value;
        let userEmail = document.getElementById("user-email-input").value;
        let userPassword = document.getElementById("user-password-input").value;
        // console.log( 
        //   "Hello " + userName + " from the event listener. Your email is: " + userEmail +
        //   "Your password is: " + userPassword
        // );
        console.log( 
            " Hello " + userName + " from local storage, your email is " + userEmail + " Your password is: " + userPassword
          );
        localStorage.setItem("userName", userName);
        localStorage.setItem("userEmail", userEmail);
        localStorage.setItem("userPassword", userPassword);   
    });
```

>This was the Thank You Message function where when the user clicked the "Done" button from the signup form, a confirmation message would replace the form. I love how simple we were able to make it. Very simple yet conveniant for the website.
```js
const thanksMessage = document.getElementById("thank-you-message")

// Thank you Message 
function showMessage() {
    console.log("firing show message")
    thanksMessage.style.display = "block";
    showFormButton.style.display = "none";
    signUpForm.style.display = "none"; 
}
```