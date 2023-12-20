
---

# COVID-19 Tracking Interface

## Description
The COVID-19 Tracking Interface is a web application designed to provide an intuitive interface for users to search and access data regarding the spread of COVID-19. Utilizing data from the [COVID Tracking API](https://covidtracking.com/data/api/version-2), this application aims to present critical statistics such as infection rates and death counts in an easily accessible format, beneficial for health professionals and the general public.

## Target Browsers
- **Computers:** Compatible with modern web browsers like Chrome, Firefox, Safari, and Edge.
- **Mobile Devices:** Optimized for iOS and Android browsers.

## Links
- [User Manual](link-to-user-manual)
- [Developer Manual](link-to-developer-manual)

---

# Developer Manual

## Audience
This document is intended for future developers who will work on the COVID-19 Tracking Interface. It assumes a general knowledge of web applications but no prior understanding of this system's design.

## Installation and Setup
1. **Clone the Repository:**
   ```bash
   git clone [repository-url]
   ```
2. **Install Dependencies:**
   Navigate to the project directory and run:
   ```bash
   npm install
   ```

## Running the Application
- **Start the Server:**
  ```bash
  npm start
  ```
  The application will be available at `http://localhost:[port-number]`.

## Running Tests
- Execute tests using:
  ```bash
  npm test
  ```

## API Endpoints
- **GET `/api/data`**: Fetches COVID-19 data.
- **POST `/api/submit`**: Submits user queries.
- Additional endpoints can be found in the `routes` directory.

## Known Bugs and Future Development
- **Known Bugs:**
  - 
- **Future Development:**
  - We will market this towards IOS platform to be used with Apple Health.
  - Improvements will be made to ensure that the mapping of cases accurately corresponds to specific areas.

---
