# -Cookie-Based-User-Tracking
Overview
This project is a web-based user tracking system that utilizes browser cookies to store and retrieve user data. It allows users to enter their details (name, age, gender, favorite color) on the registration page (index.html). The system then saves this data in cookies and displays it dynamically on a second page (page2.html), tracking both submission attempts and page visits.
Features
- Stores user input using cookies.
- Displays a welcome message customized with the user’s name and visit count.
- Shows a gender-specific image based on user selection.
- Applies the user's favorite color to personalized text elements.
- Tracks both form submissions and page refreshes separately.

Technologies Used
- HTML for structure
- CSS (optional) for styling
- JavaScript for cookie management and dynamic content rendering

Setup Instructions
- Clone the repository:git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git

- Navigate into the project folder:cd YOUR-REPOSITORY

- Open index.html in a browser to enter user data.
- After submitting, page2.html will display the saved information.
- Refresh page2.html to see the visit count update.

Project Structure
├── index.html      # User registration page
├── index.js        # Handles user data input and cookie creation
├── page2.html      # Displays saved user data
├── script2.js      # Retrieves cookies and updates dynamic content
├── Task/           # Contains gender images (1.jpg, 2.jpg)


Usage Guide
- User Registration (index.html)- Fill in your name, age, gender, and favorite color.
- Click “Register” to save your information in cookies.
- You will be redirected to page2.html.

- User Profile (page2.html)- Shows the gender-specific image and personalized welcome message.
- Refresh the page to see your visit count update.


Future Enhancements
- Implement local storage as an alternative to cookies.
- Add a clear data button to reset stored values.
- Improve CSS styling for better UI/UX experience.

Contributing
Feel free to contribute by opening a Pull Request or submitting Issues on GitHub!
License
This project is open-source under the MIT License.
