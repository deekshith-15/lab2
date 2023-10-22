# Weather App - Lab 2

This repository contains the code for a simple Weather App built using Node.js and APIs.

## Questions

### 1. Assume that in your API call you received a 401 status code. Which part of your code most probably is not correct?

If you receive a 401 status code in your API call, the most probable issue is with the API key or authentication. You should double-check the API key (`X-RapidAPI-Key`) in your code, ensure the URL and endpoint are correct, verify the API host (`X-RapidAPI-Host`) matches the actual host, and confirm that you have the necessary permissions to access the API.

### 2. Explain your design choices and how you used CSS to realize those changes.

In designing the Weather App, we made several design choices to create a clean and user-friendly interface. The primary design choices and the use of CSS are as follows:

- **Color Scheme:** We used a combination of colors to create a visually appealing design. The header section has a blue background (#007BFF) to make it stand out, while the main content area has a light gray background (#f4f4f4) for readability.

- **Typography:** We chose the "Arial" font for the content to ensure readability across various devices and browsers.

- **Container Styling:** The main content area is enclosed in a container with a maximum width of 600px, which provides a structured and centered layout. It has a subtle box shadow and rounded corners to give it a card-like appearance.

- **Label and Input Styling:** For the form input field, we added padding, borders, and a border radius to create a consistent and user-friendly input box. We centered the input field horizontally by setting it as a block-level element and using `margin: 0 auto`. The label is styled with a bold font weight and displayed on a new line for clarity.

- **Button Styling:** The "Get Weather" button has a distinctive blue background color and white text to make it visually prominent. It's centered within the container using `margin: 30px auto` for both top and bottom margins. On hover, the button's color changes to a slightly darker shade to provide feedback to the user.

These design choices were implemented using CSS in the `style.css` file, which is linked to the HTML. The result is an attractive and functional Weather App with a clear and intuitive user interface.
