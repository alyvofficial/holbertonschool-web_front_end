# SASS (Syntactically Awesome Style Sheets)

SASS is a preprocessor scripting language that is interpreted or compiled into CSS. It allows you to use features that don't exist in CSS yet, such as variables, nested rules, mixins, and functions, making your CSS more maintainable and easier to write.

## Key Features

- **Variables**: Store values that you use repeatedly in your CSS.
- **Nesting**: Nest your CSS selectors in a way that follows the same visual hierarchy of your HTML.
- **Partials and Import**: Split your CSS into smaller, more manageable files.
- **Mixins**: Create reusable chunks of code.
- **Inheritance**: Share a set of CSS properties from one selector to another.
- **Operators**: Perform calculations to determine CSS property values.

## Example

```scss
$primary-color: #333;

body {
    font: 100% Helvetica, sans-serif;
    color: $primary-color;
}

nav {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li { 
        display: inline-block; 
    }

    a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
    }
}
```

## Getting Started

To start using SASS, you need to install it on your system. You can install SASS using npm:

```bash
npm install -g sass
```

Once installed, you can compile your SASS files to CSS using the following command:

```bash
sass input.scss output.css
```

For more information, visit the [official SASS documentation](https://sass-lang.com/documentation).
