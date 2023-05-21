
# Brick City Lego Store
Live Link: https://wondrous-sunburst-c479b5.netlify.app/


This is a Toy Marketplace website focused on the Lego toy category. The website allows users to browse and purchase various Lego sets, as well as add their own Lego sets for sale. The website provides a visually appealing and user-friendly interface to enhance the shopping experience for Lego enthusiasts.

# Features :
Authentication and User Profiles:  Users can register and log in to the website. Upon logging in, users have access to their profile page where they can view and manage their added Lego sets.

Responsive Design: The website is designed to be responsive and accessible across different devices, including desktop, tablet, and mobile.

Navigation: The website includes a navbar that remains consistent across all pages, providing easy access to important sections such as Home, All Toys, My Toys, Add A Toy, Blogs, and User profile.

Home Page: The home page features a banner section with engaging visuals and a slider. A gallery section showcases attractive images of Lego sets. The "Shop by category" section allows users to browse Lego sets based on different sub-categories such as Lego City, Lego Star Wars, Lego Architecture, and Lego Cars.

All Toys Page: This page displays a table of all Lego sets available for sale. Each row in the table includes information such as the seller, toy name, sub-category, price, and available quantity. Users can search for specific Lego sets by name.

Single Toy Details Page: Clicking on the "View Details" button for a specific Lego set redirects users to the single toy details page. This page provides comprehensive information about the Lego set, including the picture, toy name, seller name, seller email, price, rating, available quantity, and a detailed description.

Add A Toy Page: Logged-in users can access the Add A Toy page, where they can add their Lego sets for sale. The page includes a form to enter details such as the picture URL, name, seller name, seller email, sub-category, price, rating, available quantity, and a detailed description.

My Toys Page: Users can view and manage the Lego sets they have added through the My Toys page. The page displays a table of their added Lego sets, and each row includes options to update or delete the set. The update button allows users to modify information such as the price, available quantity, and description.

Blogs Page: The website includes a blog section where users can read and gain insights into Lego-related topics. The blog page includes answers to questions such as the meaning and working of access tokens and refresh tokens, a comparison between SQL and NoSQL databases, an explanation of Express.js and Nest.js, and an overview of MongoDB aggregation.

404 Page: In case a user lands on a non-existent page, a custom 404 page is provided. The page includes an interesting image or animation and a "Back to Home" button to redirect the user to the home page.

Technologies Used
The Lego Toy Marketplace website is built using the following technologies:

Frontend: React.js, HTML, CSS, JavaScript, AOS Package, React Router
Backend: Node.js, Express.js
Database: MongoDB
Authentication: Firebase Authentication
Deployment: Firebase Hosting for the client-side
Setup Instructions
To run the Lego Toy Marketplace website locally, follow these steps:


Navigate to the client-side directory: cd client-side

Install dependencies: npm install

Create a Firebase project and obtain the Firebase configuration keys.

Create a .env file in the client-side directory and add the Firebase configuration keys as environment variables. For example:

makefile
Copy code
REACT_APP_FIREBASE_API_KEY=<your_firebase_api_key>
REACT_APP_FIREBASE_AUTH_DOMAIN=<your_firebase_auth_domain>
REACT_APP_FIREBASE_PROJECT_ID=<your_firebase_project_id>
REACT_APP_FIREBASE_STORAGE_BUCKET=<your_firebase_storage_bucket>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your_firebase_messaging_sender_id>
REACT_APP_FIREBASE_APP_ID=<your_firebase_app_id>
Run the client-side application: npm start



Live Demo
You can access a live demo of the Lego Toy Marketplace website here: https://wondrous-sunburst-c479b5.netlify.app/
