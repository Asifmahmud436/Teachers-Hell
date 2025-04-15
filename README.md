# BracademicReview

BracademicReview is a web application designed to allow users to explore and review teachers and universities. Built with **React**, **React Router**, and **react-awesome-reveal** for animations, it provides a user-friendly interface to browse faculty details, submit reviews, and navigate seamlessly. The backend is powered by a REST API (assumed to be running locally at `http://127.0.0.1:8000`), and the frontend uses modern CSS with a gradient-themed design.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Dynamic Navigation**: A responsive navbar with animated transitions using `react-awesome-reveal` for a smooth dropdown effect.
- **Teacher Listings**: Displays a paginated list of teachers with real-time search functionality to filter by name.
- **Faculty Details**: View comprehensive information about a teacher, including their profile picture, designation, department, and average rating.
- **Review System**: Users can submit reviews with star ratings (1–5) and text comments for teachers, with immediate feedback on submission.
- **Interactive UI**: Features hover effects on teacher cards, smooth scrolling for pagination, and a carousel for recent reviews powered by `swiffy-slider`.
- **Pagination**: Navigate through teacher listings with "Next" and "Previous" buttons for seamless browsing.
- **Search**: Real-time search functionality to find teachers by name, updating results dynamically.
- **Responsive Design**: Optimized for various screen sizes with a flexible grid layout for teacher cards, ensuring usability on desktops, tablets, and mobiles.
- **Bless/Burn Buttons**: Unique interactive buttons on teacher cards to access detailed profiles, adding a playful element to navigation.
- **Review Carousel**: Displays recent reviews in a sliding carousel, enhancing engagement with dynamic content presentation.

## Technologies
- **Frontend**:
  - React
  - React Router DOM (for client-side routing)
  - react-awesome-reveal (for slide, fade, and zoom animations)
  - swiffy-slider (for review carousel)
  - Tailwind CSS (inferred from class names like `max-w-7xl`, `m-auto`, `lg:grid-cols-3`, etc.)
  - Custom CSS (`index.css` for global styling)
- **Backend**:
  - REST API (assumed to be Django-based, running at `http://127.0.0.1:8000`)
- **Other**:
  - Fetch API (for HTTP requests to the backend)
  - JavaScript (ES6+ for modern syntax and functionality)

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Backend API running at `http://127.0.0.1:8000` (configure your backend accordingly, e.g., a Django server)

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/bracademic-review.git
   cd bracademic-review

Install Dependencies:
bashCopynpm install
or
bashCopyyarn install

Set Up the Backend:

Ensure the backend API is running at http://127.0.0.1:8000. This could be a Django server or any REST API compatible with the endpoints used.
Verify that the API supports the required endpoints (see  below).
If using Django, ensure the database is migrated and the server is running:
bashCopypython manage.py migrate
python manage.py runserver



Run the Application:
bashCopynpm start
or
bashCopyyarn start
The app will launch at http://localhost:3000 in your default browser.

Usage

Home Page: Access the landing page via the navbar to get an overview of the application.
Teachers Page: Browse a list of teachers with search and pagination. Use the search bar to filter teachers by name, and click "Next" or "Previous" to navigate through results. Each teacher card includes "Bless" and "Burn" buttons to view their details.
Faculty Details: View a teacher’s profile, including their photo, designation, department, and average rating. Submit a review using the form with a star rating and text comment. Recent reviews are displayed in a carousel below.
Write Review: Navigate to the "Write Review" link in the navbar to submit a review (assumed to be a separate page, though not fully implemented in the provided code).
University Page: Explore university-related content (placeholder; functionality not shown in the provided code).
Navigation: Use the animated navbar to switch between pages, with active links highlighted in a distinct pink shade (#FF416C).

Project Structure
textCopybracademic-review/
├── public/
│   ├── logo2.png           # Logo image used in the navbar
│   ├── index.html          # Main HTML template
│   └── favicon.ico         # (Assumed; add if applicable)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Responsive navigation bar component
│   │   ├── Teachers.jsx    # Teacher listing with search and pagination
│   │   └── FacultyDetails.jsx # Teacher profile with review form and carousel
│   ├── index.css           # Global CSS styles (gradient backgrounds, etc.)
│   ├── App.jsx             # Main app component with routes (assumed)
│   └── index.js            # Entry point for React
├── package.json            # Project dependencies and scripts
├── README.md               # This file
└── .gitignore              # Git ignore file (assumed)
Notes

The App.jsx file is assumed to contain the main routing logic using react-router-dom.
Ensure logo2.png is placed in the public folder, as referenced in Navbar.jsx.
Additional components (e.g., for the "Home" or "University" pages) may exist but are not included in the provided code.

API Endpoints
The frontend communicates with the following backend API endpoints (based on the fetch calls in the code):

GET /api/faculty:

Fetches a paginated list of teachers.
Supports query parameter: ?search=&lt;value&gt; for filtering by name.
Response: { results: [], next: string|null, previous: string|null }


GET /api/faculty/reviews/list/?faculty_id=&lt;id&gt;&amp;limit=20:

Retrieves up to 20 reviews for a specific teacher by faculty_id.
Response: Array of review objects ({ review_text, rating, ... }).


GET /api/faculty/reviews/average-rating/?faculty_id=&lt;id&gt;:

Fetches the average rating for a teacher by faculty_id.
Response: { average_rating: number|null }


POST /api/faculty/reviews/:

Submits a new review.
Request body: { faculty: number, rating: number, review_text: string }
Response: Review object or error message.



Ensure the backend API is configured to handle these endpoints. If authentication is required, update the fetch calls with appropriate headers (e.g., Authorization).
Screenshots
(Screenshots are placeholders; replace with actual images if available)

Navbar:

A gradient-themed navbar with animated dropdown and active link highlighting.



Teachers Page:

Grid layout of teacher cards with search bar and pagination buttons.



Faculty Details Page:

Teacher profile with review form and sliding review carousel.




Adding Screenshots

Create a screenshots/ folder in the project root.
Capture images of the app (e.g., using browser developer tools or a screenshot tool).
Update the paths above (e.g., screenshots/navbar.png) with actual filenames.

Contributing
We welcome contributions to improve BracademicReview! To contribute:

Fork the Repository:
bashCopygit clone https://github.com/your-username/bracademic-review.git

Create a Feature Branch:
bashCopygit checkout -b feature/your-feature-name

Make Changes:

Follow the coding style (e.g., consistent JSX formatting, Tailwind classes).
Add tests if applicable (e.g., using Jest for React components).
Update documentation for new features.


Commit Changes:
bashCopygit commit -m "Add your feature description"

Push to Your Fork:
bashCopygit push origin feature/your-feature-name

Open a Pull Request:

Go to the original repository on GitHub and create a pull request.
Describe your changes and reference any related issues.



Please ensure your code is well-documented and passes any existing tests.
License
This project is licensed under the MIT License. See the  file for details.

Built with ❤️ by [Your Name]
For questions or feedback, contact [[your-email@example.com](mailto:your-email@example.com" target="_blank" rel="noopener noreferrer)].
Follow the project on GitHub: [https://github.com/your-username/bracademic-review](https://github.com/your-username/bracademic-review" target="_blank" rel="noopener noreferrer)