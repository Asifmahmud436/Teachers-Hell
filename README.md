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
  - Tailwind CSS 
  - Custom CSS 
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

Ensure the backend API is running at http://127.0.0.1:8000 and the frontend at http://localhost:3000 in your default browser.


GET /api/faculty:

Fetches a paginated list of teachers.
Supports query parameter: ?search=&lt;value&gt; for filtering by name.
Response: { results: [], next: string|null, previous: string|null }


GET /api/faculty/reviews/list/?faculty_id=&lt;id&gt;&amp;limit=20:

Retrieves up to 20 reviews for a specific teacher by faculty_id.


GET /api/faculty/reviews/average-rating/?faculty_id=&lt;id&gt;:

Fetches the average rating for a teacher by faculty_id.


POST /api/faculty/reviews/:
Submits a new review.

# Contributing:
We welcome contributions to improve BracademicReview! To contribute:

Fork the Repository:
bashCopygit clone https://github.com/your-username/bracademic-review.git

Create a Feature Branch:
bashCopygit checkout -b feature/your-feature-name

# Make Changes:

Follow the coding style (e.g., consistent JSX formatting, Tailwind classes).
Add tests if applicable (e.g., using Jest for React components).
Update documentation for new features.


# Commit Changes:
bashCopygit commit -m "Add your feature description"

# Push to Your Fork:
bashCopygit push origin feature/your-feature-name

# Open a Pull Request:

Go to the original repository on GitHub and create a pull request.
Describe your changes and reference any related issues.

# License
This project is licensed under the MIT License. See the  file for details.

Built with ❤️ by Asif Mahmud and Abdullah Al Fahad
