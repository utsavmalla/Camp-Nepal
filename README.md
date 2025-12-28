# CampNepal

A full-stack web application for discovering, reviewing, and managing campgrounds in Nepal. Users can browse campgrounds, leave detailed reviews with ratings, and contribute to a community-driven database of camping destinations.

## Features

- **Browse Campgrounds**: View a list of all available campgrounds with detailed information
- **Create New Campgrounds**: Add new campground listings with descriptions and locations
- **Edit & Delete Campgrounds**: Manage your campground submissions
- **Review System**: Leave detailed reviews and ratings for campgrounds
- **Delete Reviews**: Remove inappropriate or unwanted reviews
- **Input Validation**: Server-side validation using Joi schema to ensure data integrity
- **Error Handling**: Comprehensive error handling with custom error pages
- **Responsive Design**: User-friendly interface with EJS templating

## Technologies Used

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework for building the REST API and server
- **MongoDB**: NoSQL database for storing campground and review data
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB
- **Joi**: Data validation library for schema validation

### Frontend
- **EJS**: Embedded JavaScript templating engine
- **ejs-mate**: Layout and partials helper for EJS
- **HTML5 & CSS3**: Markup and styling
- **method-override**: Middleware to support PUT and DELETE HTTP methods via HTML forms

### Development Tools
- **npm**: Package manager for Node.js dependencies

## Project Structure

```
CampNepal/
├── app.js                    # Main application entry point
├── package.json              # Project metadata and dependencies
├── schemas.js                # Joi validation schemas
├── models/
│   ├── campground.js         # Campground data model
│   └── review.js             # Review data model
├── seeds/
│   ├── index.js              # Seed script entry point
│   ├── seedHelpers.js        # Helper functions for seeding
│   └── cities.js             # Sample city data
├── utils/
│   ├── catchAsync.js         # Async error handling wrapper
│   └── ExpressError.js       # Custom error class
└── views/
    ├── home.ejs              # Home page template
    ├── error.ejs             # Error page template
    ├── campground/
    │   ├── index.ejs         # Campgrounds list page
    │   ├── new.ejs           # Create new campground page
    │   ├── edit.ejs          # Edit campground page
    │   └── show.ejs          # Campground detail page
    ├── layouts/
    │   └── boilerplate.ejs   # Main layout template
    └── partials/
        ├── navbar.ejs        # Navigation bar component
        └── footer.ejs        # Footer component
```

## Prerequisites

- **Node.js** v12.0 or higher
- **npm** (comes with Node.js)
- **MongoDB** running locally (default: `localhost:27017`)

## Installation

1. Clone or download this project:
   ```bash
   cd "c:\Users\user\Utsav Folder\My Projects\webdevpactice\CampNepal"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Ensure MongoDB is running:
   ```bash
   mongod
   ```
   (or start MongoDB using your system's service manager)

4. (Optional) Seed the database with sample data:
   ```bash
   node seeds/index.js
   ```

## Running the Project

### Basic start:
```bash
node app.js
```

### With auto-reload during development (install nodemon first):
```bash
npm install -D nodemon
npx nodemon app.js
```

The application will start on **http://localhost:3000**

### Add convenience scripts (optional)

Update `package.json` scripts section:
```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

Then run with:
```bash
npm start      # production
npm run dev    # development with auto-reload
```

## How to Use

1. **Home Page**: Visit the homepage to see the welcome message
2. **View Campgrounds**: Navigate to `/campgrounds` to see all listed campgrounds
3. **Add Campground**: Click "New Campground" to create a new listing
4. **View Details**: Click on any campground to see full details and reviews
5. **Edit Campground**: Click "Edit" on a campground detail page to modify it
6. **Delete Campground**: Click "Delete" to remove a campground listing
7. **Leave Review**: On any campground detail page, scroll down to add a review
8. **Delete Review**: Remove reviews by clicking the delete button next to each review

## Database

- **Database Name**: `camp-nepal`
- **Connection String**: `mongodb://localhost:27017/camp-nepal`
- **Collections**: 
  - `campgrounds`: Stores all campground information
  - `reviews`: Stores all user reviews

## Error Handling

The application includes comprehensive error handling:
- **Validation Errors**: Input validation using Joi schemas prevents invalid data
- **404 Errors**: Custom page for routes that don't exist
- **Server Errors**: Detailed error messages logged to the console
- **Async Error Wrapping**: `catchAsync` utility wraps async route handlers for proper error propagation

## Future Enhancements

- User authentication and authorization
- Image uploads for campgrounds
- Search and filter functionality
- Star ratings display
- User profiles
- Comments on reviews
- Geolocation mapping

## License

ISC

## Author

CampNepal Project

---

For detailed setup and running instructions, see [RUNNING_LOCAL.txt](RUNNING_LOCAL.txt)
