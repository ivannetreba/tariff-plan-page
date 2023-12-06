// Steps and circles constants
const pInfo = document.querySelector('.personal_info');
const pinfo_cir = document.querySelector('.pinfo_cir');
const pinfo_cir_mb = document.querySelector('.pinfo_cir_mb');
const plan = document.querySelector('.select_plan');
const plan_cir = document.querySelector('.plan_cir');
const plan_cir_mb = document.querySelector('.plan_cir_mb');
const addOns = document.querySelector('.add_ons');
const addons_cir = document.querySelector('.addons_cir');
const addons_cir_mb = document.querySelector('.addons_cir_mb');
const summary = document.querySelector('.summary');
const summary_cir = document.querySelector('.summary_cir');
const summary_cir_mb = document.querySelector('.summary_cir_mb');
const thankyou = document.querySelector('.thankyou');

// To toggle when user changes plan from summary
var planChanged = false;

// Default stuff
stepAndCircleDisplayChanges();

// Display changes based on active class
function stepAndCircleDisplayChanges() {
    // Personal Info
    if (pInfo.classList.contains("active")) {
        pInfo.style.display = "block";

        pinfo_cir.style.backgroundColor = "hsl(206, 94%, 87%)";
        pinfo_cir.style.borderColor = "hsl(206, 94%, 87%)";
        pinfo_cir.style.color = "hsl(213, 96%, 18%)";

        pinfo_cir_mb.style.backgroundColor = "hsl(206, 94%, 87%)";
        pinfo_cir_mb.style.borderColor = "hsl(206, 94%, 87%)";
        pinfo_cir_mb.style.color = "hsl(213, 96%, 18%)";
    } else {
        pInfo.style.display = "none";

        pinfo_cir.style.backgroundColor = "transparent";
        pinfo_cir.style.border = "1px solid hsl(231, 100%, 99%)";
        pinfo_cir.style.color = "hsl(231, 100%, 99%)";

        pinfo_cir_mb.style.backgroundColor = "transparent";
        pinfo_cir_mb.style.border = "1px solid hsl(231, 100%, 99%)";
        pinfo_cir_mb.style.color = "hsl(231, 100%, 99%)";
    }

    // Select Plan
    if (plan.classList.contains("active")) {
        plan.style.display = "block";

        plan_cir.style.backgroundColor = "hsl(206, 94%, 87%)";
        plan_cir.style.borderColor = "hsl(206, 94%, 87%)";
        plan_cir.style.color = "hsl(213, 96%, 18%)";

        plan_cir_mb.style.backgroundColor = "hsl(206, 94%, 87%)";
        plan_cir_mb.style.borderColor = "hsl(206, 94%, 87%)";
        plan_cir_mb.style.color = "hsl(213, 96%, 18%)";
    } else {
        plan.style.display = "none";

        plan_cir.style.backgroundColor = "transparent";
        plan_cir.style.border = "1px solid hsl(231, 100%, 99%)";
        plan_cir.style.color = "hsl(231, 100%, 99%)";

        plan_cir_mb.style.backgroundColor = "transparent";
        plan_cir_mb.style.border = "1px solid hsl(231, 100%, 99%)";
        plan_cir_mb.style.color = "hsl(231, 100%, 99%)";
    }

    // Add Ons
    if (addOns.classList.contains("active")) {
        addOns.style.display = "block";

        addons_cir.style.backgroundColor = "hsl(206, 94%, 87%)";
        addons_cir.style.borderColor = "hsl(206, 94%, 87%)";
        addons_cir.style.color = "hsl(213, 96%, 18%)";

        addons_cir_mb.style.backgroundColor = "hsl(206, 94%, 87%)";
        addons_cir_mb.style.borderColor = "hsl(206, 94%, 87%)";
        addons_cir_mb.style.color = "hsl(213, 96%, 18%)";
    } else {
        addOns.style.display = "none";

        addons_cir.style.backgroundColor = "transparent";
        addons_cir.style.border = "1px solid hsl(231, 100%, 99%)";
        addons_cir.style.color = "hsl(231, 100%, 99%)";

        addons_cir_mb.style.backgroundColor = "transparent";
        addons_cir_mb.style.border = "1px solid hsl(231, 100%, 99%)";
        addons_cir_mb.style.color = "hsl(231, 100%, 99%)";
    }

    // Summary
    if (summary.classList.contains("active")) {
        summary.style.display = "block";

        summary_cir.style.backgroundColor = "hsl(206, 94%, 87%)";
        summary_cir.style.borderColor = "hsl(206, 94%, 87%)";
        summary_cir.style.color = "hsl(213, 96%, 18%)";

        summary_cir_mb.style.backgroundColor = "hsl(206, 94%, 87%)";
        summary_cir_mb.style.borderColor = "hsl(206, 94%, 87%)";
        summary_cir_mb.style.color = "hsl(213, 96%, 18%)";
    } else {
        summary.style.display = "none";

        summary_cir.style.backgroundColor = "transparent";
        summary_cir.style.border = "1px solid hsl(231, 100%, 99%)";
        summary_cir.style.color = "hsl(231, 100%, 99%)";

        summary_cir_mb.style.backgroundColor = "transparent";
        summary_cir_mb.style.border = "1px solid hsl(231, 100%, 99%)";
        summary_cir_mb.style.color = "hsl(231, 100%, 99%)";
    }

    // Thank You
    if (thankyou.classList.contains("active")) {
        thankyou.style.display = "block";

        summary_cir.style.backgroundColor = "hsl(206, 94%, 87%)";
        summary_cir.style.borderColor = "hsl(206, 94%, 87%)";
        summary_cir.style.color = "hsl(213, 96%, 18%)";

        summary_cir_mb.style.backgroundColor = "hsl(206, 94%, 87%)";
        summary_cir_mb.style.borderColor = "hsl(206, 94%, 87%)";
        summary_cir_mb.style.color = "hsl(213, 96%, 18%)";

        document.querySelector('.white_bg_mb').style.display = 'none';
    } else {
        thankyou.style.display = "none";
    }
}

// Input Field IDs
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

// Preserve valid user submitted values if they exist in sessionStorage
const storedName = sessionStorage.getItem("name");
const storedEmail = sessionStorage.getItem("email");
const storedPhone = sessionStorage.getItem("phone");

if (storedName !== null && storedName !== undefined) {
    nameInput.value = storedName;
}

if (storedEmail !== null && storedEmail !== undefined) {
    emailInput.value = storedEmail;
}

if (storedPhone !== null && storedPhone !== undefined) {
    phoneInput.value = storedPhone;
}

// Validate personal info submission
function validatePersonalInfo(event) {
    // Prevent default form submission
    event.preventDefault();

    // Check if input values are null or contain white spaces
    if (nameInput.value === null || nameInput.value.trim() === '') {
        // Display field required error message
        document.getElementById("nameErrM").innerHTML = "Обязательное поле";

        // Change input focus style
        nameInput.style.outline = "1px solid hsl(354, 84%, 57%)";
    }

    // Check for valid email and phone number format using regular expression.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /\+\d{7,14}/;

    if (emailRegex.test(emailInput.value) && phoneRegex.test(phoneInput.value)) {
        // Close Personal Info and show Select Plan
        pInfo.classList.remove("active");
        plan.classList.add("active");
        stepAndCircleDisplayChanges();

        // Change Select Plan circle styles
        plan_cir.style.backgroundColor = "hsl(206, 94%, 87%)";
        plan_cir.style.borderColor = "hsl(206, 94%, 87%)";
        plan_cir.style.color = "hsl(213, 96%, 18%)";

        // Store user name, email, and phone number in session storage
        sessionStorage.setItem("name", nameInput.value);
        sessionStorage.setItem("email", emailInput.value);
        sessionStorage.setItem("phone", phoneInput.value);
    } else {
        // Show error messages and change styles
        if (!emailRegex.test(emailInput.value)) {
            if (emailInput.value === null || emailInput.value.trim() === '') {
                document.getElementById("emailErrM").innerHTML = "Обязательное поле";
            } else {
                document.getElementById("emailErrM").innerHTML = "Ошибка в поле Email";
            }

            emailInput.style.outline = "1px solid hsl(354, 84%, 57%)";
            emailInput.value = "";
        }

        if (!phoneRegex.test(phoneInput.value)) {
            if (phoneInput.value === null || phoneInput.value.trim() === '') {
                document.getElementById("phNoErrM").innerHTML = "Обязательное поле";
            } else {
                document.getElementById("phNoErrM").innerHTML = "Ошибка в поле номер";
            }

            phoneInput.style.outline = "1px solid hsl(354, 84%, 57%)";
            phoneInput.value = "";
        }
    }
}

// Change styles when input fields are focused or blurred
nameInput.addEventListener('focus', function () {
    document.getElementById("name").style.outline = "1px solid hsl(243, 100%, 62%)";
    document.getElementById("nameErrM").innerHTML = "";
});

emailInput.addEventListener('focus', function () {
    document.getElementById("email").style.outline = "1px solid hsl(243, 100%, 62%)";
    document.getElementById("emailErrM").innerHTML = "";
});

phoneInput.addEventListener('focus', function () {
    document.getElementById("phone").style.outline = "1px solid hsl(243, 100%, 62%)";
    document.getElementById("phNoErrM").innerHTML = "";
});

nameInput.addEventListener('blur', function () {
    document.getElementById("name").style.outline = "0.1px solid hsl(227, 27%, 86%)";
});

emailInput.addEventListener('blur', function () {
    document.getElementById("email").style.outline = "0.1px solid hsl(227, 27%, 86%)";
});

phoneInput.addEventListener('blur', function () {
    document.getElementById("phone").style.outline = "0.1px solid hsl(227, 27%, 86%)";
});

// Go Backs
function goBacks() {
    // Go back to personal info from select plan
    if (plan.classList.contains("active")) {
        plan.classList.remove("active");
        pInfo.classList.add("active");
        stepAndCircleDisplayChanges();
    }

    // Go back to select plan from add ons
    if (addOns.classList.contains("active")) {
        addOns.classList.remove("active");
        plan.classList.add("active");
        stepAndCircleDisplayChanges();
    }

    // Go back to add ons from summary
    if (summary.classList.contains("active")) {
        summary.classList.remove("active");
        addOns.classList.add("active");
        stepAndCircleDisplayChanges();
    }
}

// Make ball switch to function
let switches = document.querySelectorAll('.ball-switch');
var MorY = "monthly";

for (var i = 0; i < switches.length; i++) {
    switches[i].addEventListener('click', function (event) {
        // Yearly
        if (this.classList.contains('monthly')) {
            this.classList.add('yearly');
            this.classList.remove('monthly');
            document.getElementById("yearly").style.color = "hsl(213, 59%, 32%)";
            document.getElementById("monthly").style.color = "hsl(231, 11%, 63%)";

            // Price change to yearly
            document.querySelector('.arcadeYPrice').innerHTML = "9 000 руб/год";
            document.querySelector('.advancedYPrice').innerHTML = "12 000 руб/год";
            document.querySelector('.proYPrice').innerHTML = "1500 руб/год";

            // Months free
            document.querySelectorAll('.monthsFree').forEach(function (monthsFree) {
                monthsFree.innerHTML = "2 месяца бесплатно";
            });

            // Set MorY to yearly
            MorY = "yearly";
        }
        // Monthly
        else {
            this.classList.add('monthly');
            this.classList.remove('yearly');
            document.getElementById("monthly").style.color = "hsl(213, 59%, 32%)";
            document.getElementById("yearly").style.color = "hsl(231, 11%, 63%)";

            // Price change to monthly
            document.querySelector('.arcadeMPrice').innerHTML = "$9/mo";
            document.querySelector('.advancedMPrice').innerHTML = "$12/mo";
            document.querySelector('.proMPrice').innerHTML = "$15/mo";

            // Remove months free
            document.querySelectorAll('.monthsFree').forEach(function (monthsFree) {
                monthsFree.innerHTML = "";
            });

            // Set MorY to monthly
            MorY = "monthly";
        }
    });
}

// Select plan constants and togglable booleans
const arcadeDiv = document.querySelector('.arcade');
const advancedDiv = document.querySelector('.advanced');
const proDiv = document.querySelector('.pro');

var arcadeClicked = true;
var advancedClicked = false;
var proClicked = false;

// Style changes when plans are clicked
function arcade() {
    arcadeDiv.classList.add('active');
    if (arcadeDiv.classList.contains('active')) {
        arcadeClicked = true;
        arcadeDiv.style.backgroundColor = "hsl(217, 100%, 97%)";
        arcadeDiv.style.border = "1px solid hsl(243, 100%, 62%)";
        arcadeDiv.classList.remove('active');

        // Mouse leave
        arcadeDiv.onmouseleave = () => {
            arcadeDiv.style.border = "1px solid hsl(243, 100%, 62%)";
        }
    }

    if (!advancedDiv.classList.contains('active')) {
        advancedClicked = false;
        advancedDiv.style.backgroundColor = "hsl(0, 0%, 100%)";
        advancedDiv.style.border = "1px solid hsl(227, 27%, 86%)";
        advancedDiv.classList.add('active');

        // Mouse enter
        advancedDiv.onmouseenter = () => {
            advancedDiv.style.border = "1px solid hsl(243, 100%, 62%)";
        }

        // Mouse leave
        advancedDiv.onmouseleave = () => {
            advancedDiv.style.border = "1px solid hsl(227, 27%, 86%)";
        }
    }

    if (!proDiv.classList.contains('active')) {
        proClicked = false;
        proDiv.style.backgroundColor = "hsl(0, 0%, 100%)";
        proDiv.style.border = "1px solid hsl(227, 27%, 86%)";
        proDiv.classList.add('active');

        // Mouse enter
        proDiv.onmouseenter = () => {
            proDiv.style.border = "1px solid hsl(243, 100%, 62%)";
        }

        // Mouse leave
        proDiv.onmouseleave = () => {
            proDiv.style.border = "1px solid hsl(227, 27%, 86%)";
        }
    }
}

function advanced() {
    advancedDiv.classList.add('active');
    if (advancedDiv.classList.contains('active')) {
        advancedClicked = true;
        advancedDiv.style.backgroundColor = "hsl(217, 100%, 97%)";
        advancedDiv.style.border = "1px solid hsl(243, 100%, 62%)";
        advancedDiv.classList.remove('active');

        // Mouse leave
        advancedDiv.onmouseleave = () => {
            advancedDiv.style.border = "1px solid hsl(243, 100%, 62%)";
        }
    }

    if (!arcadeDiv.classList.contains('active')) {
        arcadeClicked = false;
        arcadeDiv.style.backgroundColor = "hsl(0, 0%, 100%)";
        arcadeDiv.style.border = "1px solid hsl(227, 27%, 86%)";
        arcadeDiv.classList.add('active');

        // Mouse enter
        arcadeDiv.onmouseenter = () => {
            arcadeDiv.style.border = "1px solid hsl(243, 100%, 62%)";
        }

        // Mouse leave
        arcadeDiv.onmouseleave = () => {
            arcadeDiv.style.border = "1px solid hsl(227, 27%, 86%)";
        }
    }

    if (!proDiv.classList.contains('active')) {
        proClicked = false;
        proDiv.style.backgroundColor = "hsl(0, 0%, 100%)";
        proDiv.style.border = "1px solid hsl(227, 27%, 86%)";
        proDiv.classList.add('active');

        // Mouse enter
        proDiv.onmouseenter = () => {
            proDiv.style.border = "1px solid hsl(243, 100%, 62%)";
        }

        // Mouse leave
        proDiv.onmouseleave = () => {
            proDiv.style.border = "1px solid hsl(227, 27%, 86%)";
        }
    }
}

function pro() {
    proDiv.classList.add('active');
    if (proDiv.classList.contains('active')) {
        proClicked = true;
        proDiv.style.backgroundColor = "hsl(217, 100%, 97%)";
        proDiv.style.border = "1px solid hsl(243, 100%, 62%)";
        proDiv.classList.remove('active');

        // Mouse leave
        proDiv.onmouseleave = () => {
            proDiv.style.border = "1px solid hsl(243, 100%, 62%)";
        }
    }

    if (!arcadeDiv.classList.contains('active')) {
        arcadeClicked = false;
        arcadeDiv.style.backgroundColor = "hsl(0, 0%, 100%)";
        arcadeDiv.style.border = "1px solid hsl(227, 27%, 86%)";
        arcadeDiv.classList.add('active');

        // Mouse enter
        arcadeDiv.onmouseenter = () => {
            arcadeDiv.style.border = "1px solid hsl(243, 100%, 62%)";
        }

        // Mouse leave
        arcadeDiv.onmouseleave = () => {
            arcadeDiv.style.border = "1px solid hsl(227, 27%, 86%)";
        }
    }

    if (!advancedDiv.classList.contains('active')) {
        advancedClicked = false;
        advancedDiv.style.backgroundColor = "hsl(0, 0%, 100%)";
        advancedDiv.style.border = "1px solid hsl(227, 27%, 86%)";
        advancedDiv.classList.add('active');

        // Mouse enter
        advancedDiv.onmouseenter = () => {
            advancedDiv.style.border = "1px solid hsl(243, 100%, 62%)";
        }

        // Mouse leave
        advancedDiv.onmouseleave = () => {
            advancedDiv.style.border = "1px solid hsl(227, 27%, 86%)";
        }
    }
}

// Store user selected plan data in dictionary
var chosenPlanDict = { "Plan": "Standard", "Price": 900, "MorY": "Каждый месяц" }; // Default values

// Run selectPlan when next step button is clicked
function selectPlan() {
    if (arcadeClicked) {
        if (MorY === "monthly") {
            chosenPlanDict["Plan"] = "Standard";
            chosenPlanDict["Price"] = 900;
            chosenPlanDict["MorY"] = "Каждый месяц";
        }

        if (MorY === "yearly") {
            chosenPlanDict["Plan"] = "Standard";
            chosenPlanDict["Price"] = 9000;
            chosenPlanDict["MorY"] = "Раз в год";
        }
    }

    if (advancedClicked) {
        if (MorY === "monthly") {
            chosenPlanDict["Plan"] = "Advanced";
            chosenPlanDict["Price"] = 1200;
            chosenPlanDict["MorY"] = "Каждый месяц";
        }

        if (MorY === "yearly") {
            chosenPlanDict["Plan"] = "Advanced";
            chosenPlanDict["Price"] = 12000;
            chosenPlanDict["MorY"] = "Раз в год";
        }
    }

    if (proClicked) {
        if (MorY === "monthly") {
            chosenPlanDict["Plan"] = "Pro";
            chosenPlanDict["Price"] = 1500;
            chosenPlanDict["MorY"] = "Каждый месяц";
        }

        if (MorY === "yearly") {
            chosenPlanDict["Plan"] = "Pro";
            chosenPlanDict["Price"] = 15000;
            chosenPlanDict["MorY"] = "Раз в год";
        }
    }

    if (planChanged) {
        plan.classList.remove('active');
        summary.classList.add('active');
        addOnsFunc();
        stepAndCircleDisplayChanges();
        planChanged = false;
    } else {
        plan.classList.remove('active');
        addOns.classList.add('active');
        MorYPrice();
        stepAndCircleDisplayChanges();
    }

    // To Debug
    // for (const key in chosenPlanDict) {
    //     if (chosenPlanDict.hasOwnProperty(key)) {
    //         alert("Key: " + key + ", " + "Value: " + chosenPlanDict[key]);
    //     }
    // }
}

// Display price based on monthly or yearly
function MorYPrice() {
    if (chosenPlanDict["MorY"] === "Каждый месяц") {
        document.querySelector('.OnlineServicePrice').innerHTML = "+100р/м";
        document.querySelector('.largerStoragePrice').innerHTML = "+200руб/мес";
        document.querySelector('.customizableProfilePrice').innerHTML = "+200р/м";
    }
    if (chosenPlanDict["MorY"] === "Раз в год") {
        document.querySelector('.OnlineServicePrice').innerHTML = "+1000р/г";
        document.querySelector('.largerStoragePrice').innerHTML = "+2000р/г";
        document.querySelector('.customizableProfilePrice').innerHTML = "+2000р/г";
    }
}

// Add on constants and togglable booleans
const onlineServiceDiv = document.querySelector('.online_service');
const largerStorageDiv = document.querySelector('.larger_storage');
const customizableProfileDiv = document.querySelector('.customizable_profile');

const onlineServiceCbo = document.querySelector('.onlineServiceCbo');
const largerStorageCbo = document.querySelector('.largerStorageCbo');
const customizableProfileCbo = document.querySelector('.customizableProfileCbo');

var onlineServiceChecked = true;
var largerStorageChecked = false;
var customizableProfileChecked = false;

// Checkbox click functions
function onlineService() {
    if (onlineServiceCbo.classList.contains('active')) {
        onlineServiceChecked = false;

        // Div
        onlineServiceDiv.style.backgroundColor = "hsl(0, 0%, 100%)";
        onlineServiceDiv.style.border = "1px solid hsl(227, 27%, 86%)";

        // Mouse enter
        onlineServiceDiv.onmouseenter = () => {
            onlineServiceDiv.style.border = "1px solid hsl(243, 100%, 62%)";
        }

        // Mouse leave
        onlineServiceDiv.onmouseleave = () => {
            onlineServiceDiv.style.border = "1px solid hsl(227, 27%, 86%)";
        }

        // Checkbox
        onlineServiceCbo.style.border = "1px solid hsl(227, 27%, 86%)";
        onlineServiceCbo.style.backgroundColor = "hsl(0, 0%, 100%)";

        onlineServiceCbo.classList.remove('active');

        uncheckedErrM();
    } else {
        onlineServiceChecked = true;

        // Div
        onlineServiceDiv.style.backgroundColor = "hsl(217, 100%, 97%)";
        onlineServiceDiv.style.border = "1px solid hsl(243, 100%, 62%)";

        // Mouse leave
        onlineServiceDiv.onmouseleave = () => {
            onlineServiceDiv.style.border = "1px solid hsl(243, 100%, 62%)";
        }

        // Checkbox
        onlineServiceCbo.style.border = "none";
        onlineServiceCbo.style.backgroundColor = "hsl(243, 100%, 62%)";

        onlineServiceCbo.classList.add('active');

        uncheckedErrM();
    }
}

function largerStorage() {
    if (!largerStorageCbo.classList.contains('active')) {
        largerStorageChecked = true;

        // Div
        largerStorageDiv.style.backgroundColor = "hsl(217, 100%, 97%)";
        largerStorageDiv.style.border = "1px solid hsl(243, 100%, 62%)";

        // Mouse leave
        largerStorageDiv.onmouseleave = () => {
            largerStorageDiv.style.border = "1px solid hsl(243, 100%, 62%)";
        }

        // Checkbox
        largerStorageCbo.style.border = "none";
        largerStorageCbo.style.backgroundColor = "hsl(243, 100%, 62%)";

        largerStorageCbo.classList.add('active');

        uncheckedErrM();
    } else {
        largerStorageChecked = false;

        // Div
        largerStorageDiv.style.backgroundColor = "hsl(0, 0%, 100%)";
        largerStorageDiv.style.border = "1px solid hsl(227, 27%, 86%)";

        // Mouse enter
        largerStorageDiv.onmouseenter = () => {
            largerStorageDiv.style.border = "1px solid hsl(243, 100%, 62%)";
        }

        // Mouse leave
        largerStorageDiv.onmouseleave = () => {
            largerStorageDiv.style.border = "1px solid hsl(227, 27%, 86%)";
        }

        // Checkbox
        largerStorageCbo.style.border = "1px solid hsl(227, 27%, 86%)";
        largerStorageCbo.style.backgroundColor = "hsl(0, 0%, 100%)";

        largerStorageCbo.classList.remove('active');

        uncheckedErrM();
    }
}

function customizableProfile() {
    if (!customizableProfileCbo.classList.contains('active')) {
        customizableProfileChecked = true;

        // Div
        customizableProfileDiv.style.backgroundColor = "hsl(217, 100%, 97%)";
        customizableProfileDiv.style.border = "1px solid hsl(243, 100%, 62%)";

        // Mouse leave
        customizableProfileDiv.onmouseleave = () => {
            customizableProfileDiv.style.border = "1px solid hsl(243, 100%, 62%)";
        }

        // Checkbox
        customizableProfileCbo.style.border = "none";
        customizableProfileCbo.style.backgroundColor = "hsl(243, 100%, 62%)";

        customizableProfileCbo.classList.add('active');

        uncheckedErrM();
    } else {
        customizableProfileChecked = false;

        // Div
        customizableProfileDiv.style.backgroundColor = "hsl(0, 0%, 100%)";
        customizableProfileDiv.style.border = "1px solid hsl(227, 27%, 86%)";

        // Mouse enter
        customizableProfileDiv.onmouseenter = () => {
            customizableProfileDiv.style.border = "1px solid hsl(243, 100%, 62%)";
        }

        // Mouse leave
        customizableProfileDiv.onmouseleave = () => {
            customizableProfileDiv.style.border = "1px solid hsl(227, 27%, 86%)";
        }

        // Checkbox
        customizableProfileCbo.style.border = "1px solid hsl(227, 27%, 86%)";
        customizableProfileCbo.style.backgroundColor = "hsl(0, 0%, 100%)";

        customizableProfileCbo.classList.remove('active');

        uncheckedErrM();
    }
}

// Show error message if all add ons were not checked
function uncheckedErrM() {
    var flag = false;

    if (!onlineServiceChecked && !largerStorageChecked && !customizableProfileChecked) {
        document.getElementById("AddOnsErrM").style.display = "block";
        flag = false;
    } else {
        document.getElementById("AddOnsErrM").style.display = "none";
        flag = true;
    }

    return flag;
}

var addOnsDict = { "OnlineService": 0, "LargerStorage": 0, "CustomizableProfile": 0 };

// Run addOns function when next step button is clicked
function addOnsFunc() {
    if (uncheckedErrM()) {
        if (onlineServiceChecked) {
            if (chosenPlanDict["MorY"] === "Каждый месяц") {
                addOnsDict["OnlineService"] = 100;
            }

            if (chosenPlanDict["MorY"] === "Раз в год") {
                addOnsDict["OnlineService"] = 1000;
            }
        } else {
            addOnsDict["OnlineService"] = 0;
        }

        if (largerStorageChecked) {
            if (chosenPlanDict["MorY"] === "Каждый месяц") {
                addOnsDict["LargerStorage"] = 200;
            }

            if (chosenPlanDict["MorY"] === "Раз в год") {
                addOnsDict["LargerStorage"] = 2000;
            }
        } else {
            addOnsDict["LargerStorage"] = 0;
        }

        if (customizableProfileChecked) {
            if (chosenPlanDict["MorY"] === "Каждый месяц") {
                addOnsDict["CustomizableProfile"] = 200;
            }

            if (chosenPlanDict["MorY"] === "Раз в год") {
                addOnsDict["CustomizableProfile"] = 2000;
            }
        } else {
            addOnsDict["CustomizableProfile"] = 0;
        }

        // Display summary and hide addOns
        addOns.classList.remove('active');
        summary.classList.add('active');
        stepAndCircleDisplayChanges();

        // Display user chosen info in summary
        document.getElementById("planTitle").innerHTML = chosenPlanDict["Plan"];
        document.getElementById("MorYTxt").innerHTML = "(" + chosenPlanDict["MorY"] + ")";

        if (chosenPlanDict["MorY"] === "Каждый месяц") {
            document.getElementById("planPrice").innerHTML = "" + chosenPlanDict["Price"] + "р/м";
            document.querySelector('.total_box p').innerHTML = "Всего (за месяц)";
        }

        if (chosenPlanDict["MorY"] === "Раз в год") {
            document.getElementById("planPrice").innerHTML = "$" + chosenPlanDict["Price"] + "р/г";
            document.querySelector('.total_box p').innerHTML = "Всего (за год)";
        }

        // Reset summary add ons and total price
        const one = document.querySelector('.one');
        const two = document.querySelector('.two');
        const three = document.querySelector('.three');
        const below_line = document.querySelector('.below_line');

        if (one !== null) {
            below_line.removeChild(one);
        }

        if (two !== null) {
            below_line.removeChild(two);
        }

        if (three !== null) {
            below_line.removeChild(three);
        }

        // Display summary add ons using js
        if (addOnsDict["OnlineService"] !== 0) {
            const summaryAddon = document.createElement('div');
            summaryAddon.classList.add('summary_addon');
            summaryAddon.classList.add('one');

            var summaryAddonName = document.createElement('p');
            var summaryAddonPrice = document.createElement('p');
            summaryAddonPrice.classList.add('summaryAddonPrice');

            summaryAddonName.textContent = "Играть онлайн";

            if (chosenPlanDict["MorY"] === "Каждый месяц") {
                summaryAddonPrice.textContent = "+" + addOnsDict["OnlineService"] + "р/м";
            }

            if (chosenPlanDict["MorY"] === "Раз в год") {
                summaryAddonPrice.textContent = "+" + addOnsDict["OnlineService"] + "р/г";
            }

            summaryAddon.appendChild(summaryAddonName);
            summaryAddon.appendChild(summaryAddonPrice);

            below_line.appendChild(summaryAddon);
        }

        if (addOnsDict["LargerStorage"] !== 0) {
            const summaryAddon = document.createElement('div');
            summaryAddon.classList.add('summary_addon');
            summaryAddon.classList.add('two');

            var summaryAddonName = document.createElement('p');
            var summaryAddonPrice = document.createElement('p');
            summaryAddonPrice.classList.add('summaryAddonPrice');

            if (largerStorageChecked) {
                summaryAddonName.textContent = "Больше места";

                if (chosenPlanDict["MorY"] === "Каждый месяц") {
                    summaryAddonPrice.textContent = "+" + addOnsDict["LargerStorage"] + "р/м";
                }

                if (chosenPlanDict["MorY"] === "Раз в год") {
                    summaryAddonPrice.textContent = "+" + addOnsDict["LargerStorage"] + "р/г";
                }
            }

            summaryAddon.appendChild(summaryAddonName);
            summaryAddon.appendChild(summaryAddonPrice);

            below_line.appendChild(summaryAddon);
        }

        if (addOnsDict["CustomizableProfile"] !== 0) {
            const summaryAddon = document.createElement('div');
            summaryAddon.classList.add('summary_addon');
            summaryAddon.classList.add('three');

            var summaryAddonName = document.createElement('p');
            var summaryAddonPrice = document.createElement('p');
            summaryAddonPrice.classList.add('summaryAddonPrice');

            if (customizableProfileChecked) {
                summaryAddonName.textContent = "Настраиваемый профиль";

                if (chosenPlanDict["MorY"] === "Каждый месяц") {
                    summaryAddonPrice.textContent = "+" + addOnsDict["CustomizableProfile"] + "р/м";
                }

                if (chosenPlanDict["MorY"] === "Раз в год") {
                    summaryAddonPrice.textContent = "+" + addOnsDict["CustomizableProfile"] + "р/г";
                }
            }

            summaryAddon.appendChild(summaryAddonName);
            summaryAddon.appendChild(summaryAddonPrice);

            below_line.appendChild(summaryAddon);
        }

        var totalPrice = chosenPlanDict["Price"] + addOnsDict["OnlineService"] + addOnsDict["LargerStorage"] + addOnsDict["CustomizableProfile"];

        if (chosenPlanDict["MorY"] === "Каждый месяц") {
            document.querySelector('.summary_total').innerHTML = "" + totalPrice + "р/м"
        }

        if (chosenPlanDict["MorY"] === "Раз в год") {
            document.querySelector('.summary_total').innerHTML = "" + totalPrice + "р/г"
        }

    } else {
        addOnsDict["OnlineService"] = 0;
        addOnsDict["LargerStorage"] = 0;
        addOnsDict["CustomizableProfile"] = 0;
    }

    // To Debug
    // for (const key in addOnsDict) {
    //     if (addOnsDict.hasOwnProperty(key)) {
    //         alert("Key: " + key + ", " + "Value: " + addOnsDict[key]);
    //     }
    // }
}

// Redirect to select plan when change link is clicked
function changePlan() {
    planChanged = true;
    summary.classList.remove('active');
    plan.classList.add('active');
    stepAndCircleDisplayChanges();
}

// Cofirm subscription
function confirmSub() {
    summary.classList.remove('active');
    thankyou.classList.add('active');
    stepAndCircleDisplayChanges();
}