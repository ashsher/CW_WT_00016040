document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // defining the names of inputs
        const ownerName = document.getElementById("ownerName").value.trim();
        const ownerPhone = document.getElementById("ownerPhone").value;
        const ownerLocation = document.getElementById("ownerLocation").value.trim();
        const carModel = document.getElementById("carModel").value.trim();
        const carYear = document.getElementById("carYear").value;
        const transmission = document.getElementById("transmission").value;
        const carPrice = document.getElementById("carPrice").value.trim();

        function validatePhoneNumber(ownerPhone) {
            // phone number format: +998123456789
            const re = /^\+998\d{9}$/;
            return re.test(ownerPhone);
        }

        if (!validatePhoneNumber(ownerPhone)) {
            alert("Please enter a valid phone number.", form);
            return; // finishing here if validation process fails
        }
        if (!ownerName) {
            alert("Please enter your name!");
            return;
        }
        if (!ownerLocation) {
            alert("Please enter the location where you are from");
            return;
        }
        if (!carModel) {
            alert("Please enter the full name of car model");
            return;
        }
        if (!carYear) {
            alert("Please enter when the car was produced");
            return;
        }
        if (!carPrice) {
            alert("Please enter the price of car");
            return;
        }
        axios
            .post("/api/user/register", {
                ownerName,
                ownerPhone,
                ownerLocation,
                carModel,
                carYear,
                transmission,
                carPrice,
            })
            .then(function (response) {
                alert("Car has been successfully added to database!");
                // handling possible success, it may redirect or show success text
                location.href = "/user/register";
            })
            .catch(function (error) {
                if (error.response && error.response.data) {
                    // supposing the server responds error message under "message"
                    showError(
                        error.response.data.errors
                            .map((error) => error.msg)
                            .join(" "),
                        form
                    );
                } else {
                    // showing error message if a response cannot be properly parsed
                    alert("Please reload the page. Error occured");
                }
            });
    });
});
