document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    let fname = fnameVal();
    let lname = lnameVal();
    let email = emailVal();
    let cemail = cemailVal();
    let mobile = mobileVal();
    let password = passwordVal();

    if (valid) {
        alert("Form Submitted Successfully ✅");
        this.reset();
    }

    function fnameVal() {
        let val = document.getElementById("fname").value.trim();
        document.getElementById("fnameError").innerText = val ? "" : (valid = false, "First name required");
        return val;
    }

    function lnameVal() {
        let val = document.getElementById("lname").value.trim();
        document.getElementById("lnameError").innerText = val ? "" : (valid = false, "Last name required");
        return val;
    }

    function emailVal() {
        let val = document.getElementById("email").value.trim();
        document.getElementById("emailError").innerText = val ? "" : (valid = false, "Email required");
        return val;
    }

    function cemailVal() {
        let val = document.getElementById("cemail").value.trim();
        let email = document.getElementById("email").value.trim();
        document.getElementById("cemailError").innerText =
            val === "" ? (valid = false, "Confirm email required") :
            val !== email ? (valid = false, "Email not match") : "";
        return val;
    }

    function mobileVal() {
        let val = document.getElementById("mobile").value.trim();
        document.getElementById("mobileError").innerText = val ? "" : (valid = false, "Mobile required");
        return val;
    }

    function passwordVal() {
        let val = document.getElementById("password").value.trim();
        document.getElementById("passwordError").innerText = val ? "" : (valid = false, "Password required");
        return val;
    }
});
