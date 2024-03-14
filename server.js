// Require necessary modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Serve static files (HTML, CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL ('/') to serve the index.html file
app.get('/', (req, res) => {
    // Send the index.html file when the root URL is accessed
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Set up the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/************************************************************
 * HTML Part:
 * - Sets up a simple webpage with a math calculator form.
 * - Includes two input fields for numbers, a dropdown for
 *   operations, and a submit button.
 * - Displays the result inside a <div> with id 'result'.
 ************************************************************/

/************************************************************
 * JavaScript Part:
 * - Adds an event listener to the form for submission.
 * - Prevents the default form submission behavior.
 * - Retrieves input values and selected operation.
 * - Performs corresponding calculation based on operation.
 * - Displays the result inside the 'result' <div>.
 ************************************************************/

/************************************************************
 * Node.js (Express) Part:
 * - Sets up an Express server.
 * - Uses 'express.static' middleware to serve static files.
 * - Defines a route for the root URL to serve the HTML file.
 * - Starts the server and listens on the specified port.
 ************************************************************/

/************************************************************
 * Detailed Steps:
 * 1. Create a directory for your project.
 * 2. Inside the project directory, create 'index.html'
 *    and paste the provided HTML code.
 * 3. Create 'server.js' for the Node.js server.
 * 4. Paste the Node.js code provided above into 'server.js'.
 * 5. Install Express and other dependencies by running
 *    'npm install express' in the terminal.
 * 6. Run the server by executing 'node server.js' in
 *    the terminal.
 * 7. Open a web browser and navigate to
 *    'http://localhost:3000' to see the calculator page.
 ************************************************************/
