function showInfo() {
    var fullName = document.getElementById("fullname").value;
    var password = document.getElementById("password").value;
    var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone").value;
    var phoneRegex = /^\d{10,}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var student = document.getElementById("student").checked;
    var teacher = document.getElementById("teacher").checked;
    var badminton = document.getElementById("bad").checked;
    var volleyball = document.getElementById("vol").checked;
    var soccer = document.getElementById("ball").checked;

    if (fullName === "" || password === "" || username === "" || email === "" || phoneNumber === "" ||
        (student === false && teacher === false) || (badminton === false && volleyball === false && soccer === false)) {
        alert("Please fill in all required information.");
    } else if (!passwordRegex.test(password)) {
        alert("Password must be at least 6 characters, including 1 uppercase letter and 1 special character.");
    } else if (!emailRegex.test(email)) {
        alert("Email must be in a valid format.");
    } else if (!phoneRegex.test(phoneNumber)) {
        alert("Telephone number must have at least 10 digits.");
    } else {
        alert("Registration successful!");
    }
}
