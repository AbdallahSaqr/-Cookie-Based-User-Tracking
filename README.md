🍪 Cookie-Based User Tracking
📖 Overview
This project is a simple web-based user tracking system that leverages browser cookies to store and retrieve user information. Users can enter their details (name, age, gender, favorite color) on a registration page (index.html). The data is saved via cookies and dynamically displayed on a second page (page2.html). The system also tracks the number of times a user submits the form and visits the display page.

✨ Features
🔐 Stores user input using browser cookies

🙋 Personalized welcome message including user's name and visit count

🧍‍♂️ Displays a gender-specific image based on user selection

🎨 Applies the user's favorite color to custom text elements

🔄 Separately tracks form submissions and page refreshes

🛠 Technologies Used
HTML – Page structure

CSS (optional) – Styling

JavaScript – Cookie handling and dynamic content updates

🚀 Setup Instructions
- Clone the repository: git clone (https://github.com/AbdallahSaqr/-Cookie-Based-User-Tracking/)

- Navigate into the project folder : cd YOUR-REPOSITORY

- Open index.html in a browser to enter user data.
- After submitting, page2.html will display the saved information.
- Refresh page2.html to see the visit count update.




📁 Project Structure
bash
Copy
Edit
├── index.html      # User registration form
├── index.js        # Handles form input and cookie creation
├── page2.html      # Displays user data and visit stats
├── script2.js      # Reads cookies and updates content dynamically
├── Task/           # Contains gender-specific images (e.g., 1.jpg, 2.jpg)
👣 Usage Guide
1. User Registration (index.html)
Enter your name, age, gender, and favorite color

Click the "Register" button

Your details will be stored in cookies, and you’ll be redirected

2. User Profile (page2.html)
Displays a gender-specific image and a customized welcome message

Refresh the page to see the visit counter update

📌 Future Enhancements
Use localStorage as an alternative to cookies

Add a Clear Data button to reset all saved information

Enhance UI/UX with improved CSS styling

🤝 Contributing
Contributions are welcome! Feel free to open a pull request or submit an issue.

📄 License
This project is licensed under the MIT License.
