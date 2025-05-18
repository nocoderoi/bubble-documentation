---
sidebar_position: 4
---

# Documentation Features in Bubble

When documenting your Bubble applications, you can use a variety of formatting features to make your documentation clear, readable, and professional. This guide covers the key formatting options available for your Bubble documentation.

## Text Formatting

Basic text formatting helps emphasize important information:

- **Bold text** is useful for highlighting key concepts
- *Italic text* can indicate emphasis or new terminology
- ~~Strikethrough~~ can show deprecated features
- **_Combined formatting_** is also possible

## Headers

Use headers to organize your content hierarchically:

# Main Section (H1)
## Subsection (H2)
### Detailed Topic (H3)
#### Specific Point (H4)

## Lists

Lists help organize sequential steps or related items:

### Unordered Lists

- Database elements
- Workflows
- UI components
  - Inputs
  - Buttons
  - Groups

### Ordered Lists

1. Create a new page
2. Add elements to the page
3. Configure element properties
4. Set up workflows
   1. Define trigger
   2. Add actions
   3. Test functionality

## Code Blocks

When explaining technical aspects of Bubble, code blocks are invaluable:

```javascript
// Example of custom JavaScript in Bubble
function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
}
```

For inline code references, use `backticks` around text.

## Tables

Tables are excellent for comparing features or displaying structured data:

| Feature | Basic Plan | Pro Plan | Enterprise Plan |
|---------|------------|----------|-----------------|
| Users   | 5          | 20       | Unlimited       |
| Storage | 2 GB       | 10 GB    | 100 GB          |
| Support | Email      | Priority | Dedicated       |

## Links

Link to other documentation pages or external resources:

- [Internal link to Getting Started Guide](../intro.md)
- [Link to Bubble's official site](https://bubble.io)

## Images

Screenshots are essential for Bubble documentation:

![Example Bubble Editor Interface](https://example.com/bubble-editor.png)

## Callouts

:::note
This is a note providing additional information about a feature.
:::

:::tip
Here's a helpful tip for optimizing your Bubble app.
:::

:::warning
Be careful with this feature—it could affect your app's performance.
:::

:::danger
This action cannot be undone! Use with extreme caution.
:::

## Videos

Embed tutorial videos to demonstrate complex features:

<iframe width="560" height="315" src="https://www.youtube.com/embed/example" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Interactive Examples

For advanced documentation, consider embedding interactive examples:

```html
<div class="bubble-embed">
  <iframe src="https://myapp.bubbleapps.io/example-embed" width="100%" height="500px"></iframe>
</div>
```

## Version Information

Indicate when features are version-specific:

:::info Version compatibility
This feature is available in Bubble versions 1.8.0 and higher.
:::

Well-formatted documentation significantly improves the user experience and reduces support requests. Take time to structure your documentation thoughtfully and update it regularly as your Bubble application evolves.

