function recommendRestaurant() {

    // Get values from form
    let diet =
        document.getElementById("diet").value;

    let budget =
        document.getElementById("budget").value;

    let purpose =
        document.getElementById("purpose").value;

    let restaurant = "";

    // Recommendation Logic
    if (diet === "Halal") {

        restaurant =
            "Persian Kebab House";
    }

    else if (diet === "Vegan") {

        restaurant =
            "Thai Eat Restaurant";
    }

    else if (
        purpose === "Date"
        && budget === "High"
    ) {

        restaurant =
            "Kobe Teppanyaki";
    }

    else if (
        purpose === "Family"
    ) {

        restaurant =
            "BBQ-K Doncaster";
    }

    else if (
        purpose === "Business"
    ) {

        restaurant =
            "Saporito Restaurant";
    }

    else {

        restaurant =
            "Doncaster Greek Tavern";
    }

    // Display Recommendation
    document.getElementById(
        "result"
    ).innerHTML =

    "<h3>Recommended Restaurant:</h3>" +

    "<p>" + restaurant + "</p>" +

    "<a href='reservation.html'>" +

    "<button>Reserve Now</button>"

    + "</a>";
}
//Registration
document.addEventListener(
"DOMContentLoaded",
function () {

    let registerForm =
        document.getElementById(
            "registerForm"
        );

    if (registerForm) {

        registerForm
        .addEventListener(
        "submit",
        function (event) {

            let errors = [];

            // Get Inputs
            let username =
                document.getElementById(
                    "username"
                ).value;

            let email =
                document.getElementById(
                    "email"
                ).value;

            let phone =
                document.getElementById(
                    "phone"
                ).value;

            let password =
                document.getElementById(
                    "password"
                ).value;

            let confirmPassword =
                document.getElementById(
                    "confirmPassword"
                ).value;

            let gender =
                document.querySelector(
                'input[name="gender"]:checked'
                );

            // Username Validation
            let usernamePattern =
                /^[a-zA-Z0-9_]{5,}$/;

            if (
                !usernamePattern
                .test(username)
            ) {

                errors.push(
                "Username must be at least 5 characters and only contain letters, numbers, and underscores."
                );
            }

            // Email Validation
            let emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (
                !emailPattern
                .test(email)
            ) {

                errors.push(
                    "Invalid email."
                );
            }

            // Phone Validation
            let phonePattern =
                /^[0-9]{8,15}$/;

            if (
                !phonePattern
                .test(phone)
            ) {

                errors.push(
                "Phone number must be between 8 and 15 digits."
                );
            }

            // Password Validation
            let passwordPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{10,}$/;

            if (
                !passwordPattern
                .test(password)
            ) {

                errors.push(
                "Password must contain uppercase, lowercase, number, special character, and be at least 10 characters."
                );
            }

            // Password Match
            if (
                password !==
                confirmPassword
            ) {

                errors.push(
                "Passwords do not match."
                );
            }

            // Gender Selected
            if (!gender) {

                errors.push(
                "Please select gender."
                );
            }

            // Show Errors
            if (
                errors.length > 0
            ) {

                event.preventDefault();

                document
                .getElementById(
                    "registerError"
                ).innerHTML =
                errors.join("<br>");
            }
            else {

                alert(
                "Registration Successful!"
                );
            }

        });
    }

});

// Update Deposit
function updateDeposit() {

    let restaurant =
        document.getElementById(
            "restaurant"
        ).value;

    let deposit = "";

    switch (restaurant) {

        case "Saporito Restaurant":
            deposit = "$20";
            break;

        case "Kobe Teppanyaki":
            deposit = "$25";
            break;

        case "BBQ-K Doncaster":
            deposit = "$20";
            break;

        case "Doncaster Greek Tavern":
            deposit = "$15";
            break;

        case "Thai Eat Restaurant":
            deposit = "$15";
            break;

        case "Persian Kebab House":
            deposit = "$20";
            break;
    }

    document
    .getElementById(
        "deposit"
    ).value = deposit;
}


// Payment Method
function togglePayment() {

    let paymentMethod =
        document.getElementById(
            "paymentMethod"
        ).value;

    // Voucher
    if (
        paymentMethod ===
        "Voucher"
    ) {

        document
        .getElementById(
            "voucherField"
        ).style.display =
        "block";

        document
        .getElementById(
            "cardField"
        ).style.display =
        "none";
    }

    // Online Payment
    else if (
        paymentMethod ===
        "Online"
    ) {

        document
        .getElementById(
            "cardField"
        ).style.display =
        "block";

        document
        .getElementById(
            "voucherField"
        ).style.display =
        "none";
    }

    // Nothing Selected
    else {

        document
        .getElementById(
            "voucherField"
        ).style.display =
        "none";

        document
        .getElementById(
            "cardField"
        ).style.display =
        "none";
    }
}

// Copy Email
function copyEmail() {

    let checked =
        document.getElementById(
            "sameEmail"
        ).checked;

    if (checked) {

        let email =
        document.getElementById(
            "reservationEmail"
        ).value;

        document
        .getElementById(
            "billingEmail"
        ).value = email;
    }
}