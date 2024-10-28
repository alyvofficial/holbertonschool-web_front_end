# HTML Forms

## Introduction
This document provides an overview of HTML forms, their elements, and how to use them effectively in web development.

## Table of Contents
1. [What is an HTML Form?](#what-is-an-html-form)
2. [Form Elements](#form-elements)
    - [Input](#input)
    - [Label](#label)
    - [Textarea](#textarea)
    - [Select](#select)
    - [Button](#button)
3. [Form Attributes](#form-attributes)
4. [Form Validation](#form-validation)
5. [Examples](#examples)

## What is an HTML Form?
An HTML form is a section of a document that contains interactive controls to submit information to a web server.

## Form Elements
### Input
The `<input>` element is used to create various types of user inputs, such as text fields, checkboxes, and radio buttons.

```html
<input type="text" name="username" placeholder="Enter your username">
```

### Label
The `<label>` element is used to define labels for `<input>` elements.

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```

### Textarea
The `<textarea>` element is used for multi-line text input.

```html
<textarea name="message" rows="4" cols="50"></textarea>
```

### Select
The `<select>` element is used to create a drop-down list.

```html
<select name="options">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</select>
```

### Button
The `<button>` element is used to create clickable buttons.

```html
<button type="submit">Submit</button>
```

## Form Attributes
- `action`: Specifies the URL to send the form data to.
- `method`: Specifies the HTTP method to use when sending form data (`GET` or `POST`).

```html
<form action="/submit" method="post">
  <!-- form elements -->
</form>
```

## Form Validation
HTML5 provides built-in form validation features, such as `required`, `minlength`, `maxlength`, and `pattern`.

```html
<input type="text" name="username" required minlength="3">
```

## Examples
### Simple Form
```html
<form action="/submit" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>
  <button type="submit">Submit</button>
</form>
```

### Form with Validation
```html
<form action="/submit" method="post">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required minlength="6">
  <button type="submit">Register</button>
</form>
```

## Conclusion
HTML forms are essential for collecting user input and interacting with web servers. Understanding the various form elements and attributes will help you create effective and user-friendly forms.
