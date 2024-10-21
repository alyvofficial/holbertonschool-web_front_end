# Flexbox in CSS

Flexbox is a powerful layout module in CSS that allows you to design complex layouts with ease. It provides a more efficient way to lay out, align, and distribute space among items in a container.

## Key Concepts

### Flex Container
To start using Flexbox, you need to define a flex container by setting the `display` property to `flex` or `inline-flex`.

```css
.container {
    display: flex;
}
```

### Flex Items
The direct children of a flex container automatically become flex items.

## Properties for the Flex Container

- `flex-direction`: Defines the direction of the flex items.
    - `row` (default)
    - `row-reverse`
    - `column`
    - `column-reverse`

- `justify-content`: Aligns flex items along the main axis.
    - `flex-start` (default)
    - `flex-end`
    - `center`
    - `space-between`
    - `space-around`
    - `space-evenly`

- `align-items`: Aligns flex items along the cross axis.
    - `stretch` (default)
    - `flex-start`
    - `flex-end`
    - `center`
    - `baseline`

- `flex-wrap`: Controls whether flex items should wrap or not.
    - `nowrap` (default)
    - `wrap`
    - `wrap-reverse`

## Properties for the Flex Items

- `order`: Controls the order of the flex items.
- `flex-grow`: Defines the ability for a flex item to grow if necessary.
- `flex-shrink`: Defines the ability for a flex item to shrink if necessary.
- `flex-basis`: Defines the default size of an element before the remaining space is distributed.
- `align-self`: Allows the default alignment to be overridden for individual flex items.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Example</title>
    <style>
        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100vh;
        }
        .item {
            background-color: lightblue;
            padding: 20px;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
    </div>
</body>
</html>
```

## Resources

- [MDN Web Docs: Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [CSS Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
