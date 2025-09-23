---
sidebar_position: 1
---

# SearchBox Pro

## Overview

SearchBox Pro is the ultimate search solution for Bubble applications, delivering a premium search experience with instant results across multiple data fields.

Unlike basic search inputs, SearchBox Pro offers a complete search solution with multi-field searching, real-time filtering, highlighted matches, and an elegant dropdown interface that modern apps demand.

![SearchBox Pro Preview](https://example.com/searchbox-pro-preview.png)

## Key Features

- **Lightning-Fast Search Experience**: Real-time results appear as users type
- **Professional Multi-Field Search**: Search across multiple fields simultaneously
- **Selectable Dropdown Results**: Display results in an elegant, selectable dropdown
- **Full RTL Support**: Perfect for Arabic, Hebrew, and other right-to-left languages
- **Smart Result Highlighting**: Keywords are automatically highlighted in search results
- **Rich Results Display**: Show multiple fields per result in a structured format
- **Complete Customization**: Control colors, placeholder text, "no results" messages, and more
- **Mobile-Optimized**: Responsive design works beautifully on all devices
- **Bubble Workflow Integration**: Trigger workflows when items are selected or reset

## Getting Started

### Adding the Plugin to Your App

1. Go to **Plugins** tab in your Bubble editor
2. Click **Add plugins**
3. Search for "SearchBox Pro"
4. Click **Install**

### Basic Setup

1. Drag a SearchBox Pro element onto your page
2. In the Property Panel, configure the data source under **Data Source**
3. Set up search fields by configuring **Search Field 1**, **Search Field 2**, and **Search Field 3**
4. Customize the appearance to match your app's design

## Properties

### Data Configuration

| Property | Description |
|----------|-------------|
| **Data Source** | The data type to search through (e.g., Users, Things, etc.) |
| **Data Search Field 1** | Primary field to search (required) |
| **Data Search Field 2** | Secondary field to search (optional) |
| **Data Search Field 3** | Tertiary field to search (optional) |
| **Dropdown List Field 1** | Primary field to display in results (defaults to Data Search Field 1 if not set) |
| **Dropdown List Field 2** | Secondary field to display in results (defaults to Data Search Field 2 if not set) |
| **Dropdown List Field 3** | Tertiary field to display in results (defaults to Data Search Field 3 if not set) |
| **Selected Item Caption** | Field to use as the value when an item is selected |
| **Selected Item Placeholder Caption** | Field to display in the input when an item is selected |
| **Max Items** | Maximum number of results to show in the dropdown |

### Appearance

| Property | Description |
|----------|-------------|
| **Primary Color** | Main color used for focus state, hover background, and highlight text |
| **Input Background** | Background color of the search input box |
| **Dropdown Background** | Background color of the dropdown results list |
| **Placeholder** | Text to display when nothing is entered |
| **Placeholder Color** | Color of placeholder text and search icon |
| **No Results Text** | Message to display when no results match the search |
| **Direction** | Text direction (LTR or RTL) |
| **Show Search Icon** | Whether to display the search icon (binocular) |

### State Control

| Property | Description |
|----------|-------------|
| **Disabled** | When set to true, the search component will be disabled |
| **Clear Trigger** | When triggered, clears the current selection |
| **Reset Trigger** | When triggered, completely resets the search field and states |

## States

| State | Type | Description |
|-------|------|-------------|
| **is_loading** | Boolean | True while the search component is loading data |
| **selected_value** | Text | Value of the currently selected item from the dropdown |

## Events

| Event | Description |
|-------|-------------|
| **Item Selected** | Triggered when a user selects an item from the dropdown |
| **Clear Selection** | Triggered when the search input is cleared |
| **Search Reset** | Triggered when the search is reset |
| **Initialized** | Triggered when the search component is fully initialized |

## Advanced Usage

### Handling RTL Languages

SearchBox Pro provides full support for right-to-left languages like Arabic and Hebrew. To enable RTL mode:

1. Set the **Direction** property to **RTL**
2. All text alignment and icon positioning will automatically adjust

### Customizing Result Display

You can control which fields are displayed in the search results independently from the fields being searched:

1. Use **Data Search Field 1**, **2**, and **3** to determine which fields are included in the search
2. Use **Dropdown List Field 1**, **2**, and **3** to control which fields appear in the results and in what order

### Styling with Custom Colors

SearchBox Pro offers comprehensive color customization:

1. **Primary Color** controls focus border, hover background, and highlight text
2. **Input Background** sets the search box background
3. **Dropdown Background** sets the results dropdown background
4. **Placeholder Color** changes both the placeholder text and search icon color

## Use Cases

- **E-commerce product search**: Allow users to quickly find products
- **Content libraries and knowledge bases**: Search through articles and documentation
- **User directories and member listings**: Find users by multiple criteria
- **Data-heavy applications**: Provide efficient access to large datasets
- **Multilingual applications**: Support for both LTR and RTL languages
- **Any app where quick search functionality enhances user experience**

## Troubleshooting

### Search Results Not Appearing

- Ensure your **Data Source** is properly configured
- Check that at least one **Data Search Field** is set to a valid field
- Verify the search fields contain text data that can be searched

### Styling Issues

- If text appears cut off in results, adjust your app's global CSS to ensure it doesn't interfere
- For RTL languages, make sure the **Direction** property is set to **RTL**

### Performance Considerations

- For very large datasets, consider using filtered data sources to improve performance
- Limit the **Max Items** property to a reasonable number (10-20) for better performance

## FAQ

**Q: Can I search across different data types?**  
A: No, each SearchBox Pro instance can only search one data type, but you can have multiple instances on a page.

**Q: How do I make the search case-sensitive?**  
A: SearchBox Pro searches are case-insensitive by default and cannot be changed.

**Q: Can I customize the appearance of the dropdown items?**  
A: Yes, through the various color properties and by choosing which fields display in the results.

**Q: How do I trigger a workflow when a user selects a result?**  
A: Use the "Item Selected" event in your workflow. 