document.addEventListener("DOMContentLoaded", () => {
    const registerButton = document.getElementById("register");
    
    registerButton.addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;

        // Validate name and age
        if (!name || !age || isNaN(age) || age <= 0) {
            alert("Please enter a valid name and age.");
            return; 
        }

        // Get selected gender
        const selectedGender = document.querySelector('input[name="gender"]:checked');
        if (!selectedGender) {
            alert("Please select a gender.");
            return;
        }

        const favoriteColor = document.getElementById("favoriteColor").value;

        // Save inputs into cookies
        setCookie("name", name, 7);          
        setCookie("age", age, 7);            
        setCookie("gender", selectedGender.value, 7); 
        setCookie("favoriteColor", favoriteColor, 7); 
        
        // Redirect to the next page
        window.location.href = "./page2.html";
    });

    // Function to set cookies
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); 
        const expires = "; expires=" + date.toUTCString(); 
        document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
    }
});
