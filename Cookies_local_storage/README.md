# Cookies and Local Storage

This project demonstrates how to use cookies and local storage in a web application. It includes several tasks that progressively build on each other to showcase different functionalities.

## Project Structure

- `0-index.html`: Basic implementation of setting and showing cookies.
- `1-index.html`: Improved version with additional functionalities.
- `2-index.html`: Further enhancements and error handling.
- `3-index.html`: Advanced features including form display logic.
- `4-index.html`: Final version using the `js-cookie` library for cookie management.

## Dependencies

- `webpack-cli`: "^5.1.4"
- `webpack-dev-server`: "^5.1.0"

## Usage

1. Clone the repository.
2. Navigate to the project directory.
3. Open any of the HTML files in a web browser to see the implementation in action.

## Scripts

- `setCookies()`: Sets cookies with user input values.
- `showCookies()`: Displays the stored cookies.
- `getCookie(name)`: Retrieves a specific cookie by name.
- `deleteCookiesAndShowForm()`: Deletes cookies and shows the login form.
- `showWelcomeMessageOrForm()`: Displays a welcome message if cookies are set, otherwise shows the login form.

## Notes

- Ensure you have the `node_modules` directory ignored in your `.gitignore` file.
- The final version (`4-index.html`) uses the `js-cookie` library for easier cookie management.

## License

This project is licensed under the MIT License.