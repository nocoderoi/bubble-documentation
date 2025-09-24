---
sidebar_position: 2
---

# SearchBox Pro - Inline

## Overview

SearchBox Pro (Inline) is a streamlined version of the search plugin, designed for seamless integration directly into your app's UI without a dropdown. It provides real-time search results as a state, which you can then display in any repeating group or custom layout you choose.

This version is perfect for creating custom search experiences, live filtering of on-page content, and integrating with other Bubble elements.

## Key Features

- **Real-Time Search State**: Exposes search results as a list state that can be used anywhere in Bubble
- **Multi-Field Search**: Search across up to five data fields simultaneously
- **Full RTL Support**: Works perfectly with right-to-left languages
- **Lightweight and Performant**: Optimized for speed with no dropdown UI
- **Complete Customization**: Control colors, placeholder text, and more
- **Dark Mode Support**: Easily switch to a dark theme

## Properties

### Data Configuration

| Property | Description |
|----------|-------------|
| **Data Source** | The data type to search through (e.g., Users, Things, etc.) |
| **Data Search Field 1** | Primary field to search (required) |
| **Data Search Field 2** | Secondary field to search (optional) |
| **Data Search Field 3** | Tertiary field to search (optional) |
| **Data Search Field 4** | Fourth field to search (optional) |
| **Data Search Field 5** | Fifth field to search (optional) |
| **Max Items** | Maximum number of results to return in the `search_results` state |
| **On Focus** | Legacy property - use **Primary Color** instead |

### Appearance

| Property | Description |
|----------|-------------|
| **Primary Color** | Main color used for the focus state border |
| **Input Background** | Background color of the search input box |
| **Placeholder** | Text to display when nothing is entered |
| **Placeholder Color** | Color of the placeholder text and search icon |
| **Direction** | Text direction (LTR or RTL) |
| **Show Search Icon** | Whether to display the search icon |
| **Dark Mode** | When set to true, applies a pre-defined dark theme to the component |

### State Control

| Property | Description |
|----------|-------------|
| **Disabled** | When set to true, the search component will be disabled |
| **Clear Trigger** | When triggered, clears the current search query |
| **Reset Trigger** | When triggered, completely resets the search field and states |

## States

| State | Type | Description |
|-------|------|-------------|
| **is_loading** | Boolean | True while the search component is loading data |
| **search_results** | List | A list of items from the data source that match the current search query |

## Events

| Event | Description |
|-------|-------------|
| **Search Reset** | Triggered when the search is reset |
| **Initialized** | Triggered when the search component is fully initialized |

## Advanced Usage

### Working with Search Results

The inline version exposes search results through the `search_results` state, which you can use with any Bubble element:

1. **Repeating Groups**: Display results in a repeating group by setting its data source to `SearchBox Pro's search_results`
2. **Custom Layouts**: Create custom result displays using text elements, images, and other Bubble elements
3. **Conditional Visibility**: Show/hide result containers based on the `search_results` list length

### Performance Optimization

For optimal performance with large datasets:

1. **Filter Data Sources**: Use filtered data sources in your SearchBox Pro to limit the initial dataset
2. **Limit Max Items**: Set an appropriate `Max Items` value (10-20) for better performance
3. **Debouncing**: The search automatically debounces input to avoid excessive API calls

### Integration with Other Elements

The inline search can work seamlessly with other Bubble elements:

1. **Buttons**: Trigger search resets or clear selections programmatically
2. **Input Elements**: Use other inputs to pre-populate search queries
3. **Custom States**: Combine with your app's custom states for complex filtering logic

## Use Cases

- **Live filtering**: Allow users to filter content on the same page in real-time
- **Custom search interfaces**: Build unique search experiences that match your app's design
- **Dashboard filtering**: Create interactive dashboards with live search functionality
- **Content management**: Enable users to quickly find and manage content within your app
- **Data exploration**: Provide powerful search capabilities for large datasets
- **E-commerce filtering**: Implement faceted search with custom result layouts
- **User directories**: Create searchable user lists with custom display formats
- **Knowledge bases**: Build searchable documentation or help systems

## Troubleshooting

### Search Results Not Updating

- Ensure your **Data Source** contains the data you expect to search
- Verify that your **Data Search Fields** are correctly configured and contain searchable text
- Check that the data source has the expected fields and data types

### Performance Issues

- Consider using a filtered data source to reduce the initial dataset size
- Set an appropriate **Max Items** value (start with 10-20)
- The search automatically handles debouncing, but very fast typing may cause multiple simultaneous searches

### Styling Problems

- Use the **Primary Color** property to control the focus border color
- Adjust your app's global CSS if elements appear to conflict with the search styling
- For RTL languages, ensure the **Direction** property is set correctly

### State Management Issues

- The `search_results` state updates automatically as users type
- Use the **Clear Trigger** and **Reset Trigger** properties to programmatically control the search
- Monitor the `is_loading` state to show loading indicators during searches

## FAQ

**Q: How do I display search results with a custom layout?**  
A: Use the `search_results` state with a repeating group or create custom elements that reference this state. You have full control over how results are displayed.

**Q: Can I combine multiple search criteria?**  
A: Yes, you can use up to 5 different search fields simultaneously. The search will find items that match any of the specified fields.

**Q: How do I clear the search programmatically?**  
A: Use the **Clear Trigger** property to reset the search query and clear the results.

**Q: Can I limit the number of results?**  
A: Yes, use the **Max Items** property to control how many results are returned in the `search_results` state.

**Q: How does this differ from the dropdown version?**  
A: The inline version provides results as a state for custom display, while the dropdown version shows results in a built-in dropdown interface.

**Q: Can I use this for filtering existing page content?**  
A: Absolutely! This is perfect for creating live filters for content that's already displayed on your page.

**Q: How do I handle empty search results?**  
A: The `search_results` state will be an empty list when no matches are found. You can use this to show custom "no results" messages.
