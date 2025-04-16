document.addEventListener("DOMContentLoaded", () => {
    const name = getCookie("name");
    const favoriteColor = getCookie("favoriteColor");
    const gender = getCookie("gender");

    // Initialize visit counter properly
    let visitCounter = name ? parseInt(getCookie(`refreshCounter_${name}`)) : 0;
    visitCounter++;
    setCookie(`refreshCounter_${name}`, visitCounter, 7);

    // Update gender image
    const genderImgElement = document.getElementById("gender-img");
    if (gender === "male") {
        genderImgElement.src = "../Task/1.jpg";
        genderImgElement.alt = "Male Icon";
    } else if (gender === "female") {
        genderImgElement.src = "../Task/2.jpg";
        genderImgElement.alt = "Female Icon";
    } 

    // Update name and color
    const userNameElement = document.getElementById("user-name");
    const visitCountElement = document.getElementById("visit-count");

    if (name && favoriteColor) {
        userNameElement.textContent = name;
        userNameElement.style.color = favoriteColor;

        visitCountElement.textContent = visitCounter;
        visitCountElement.style.color = favoriteColor;
    }
});

// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Function to get a cookie
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
}
