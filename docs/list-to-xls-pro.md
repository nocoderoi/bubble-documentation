---
sidebar_position: 3
---

# List to XLS Pro

## Overview

List to XLS Pro is the ultimate Excel export solution for Bubble applications, enabling you to export any data to professionally formatted Excel spreadsheets with advanced styling, calculations, and formatting options.

Transform your Bubble data into beautiful, structured Excel files with features like automatic calculations, custom formatting, RTL language support, and seamless integration with Bubble's file system - all without requiring external services or complex integrations.

## Key Features

- **Professional Excel Export**: Generate fully formatted .xlsx files with custom headers, styling, and layouts
- **Automatic Calculations**: Built-in SUM functionality for numeric columns with automatic formatting
- **Advanced Styling**: Custom header colors, fonts, borders, and text alignment
- **RTL Language Support**: Perfect support for Arabic, Hebrew, and other right-to-left languages
- **Flexible Data Handling**: Support for multiple data formats including dates, currencies, percentages, and text
- **Column Customization**: Custom column ordering, widths, and types for perfect data presentation
- **Date Formatting**: Intelligent date detection and formatting with custom format support
- **Seamless Integration**: Automatic file upload to Bubble's file system with generated URLs
- **Dual Execution**: Works both client-side (browser) and server-side for maximum flexibility

## Getting Started

### Adding the Plugin to Your App

1. Go to **Plugins** tab in your Bubble editor
2. Click **Add plugins**
3. Search for "List to XLS Pro"
4. Click **Install**

### Basic Setup

1. Add the "List to XLS Pro" action to your workflow
2. Configure the data source with your headers and data
3. Set basic properties like file name and styling options
4. Execute the action to generate and download your Excel file

## Properties

### Data Configuration

| Property | Description |
|----------|-------------|
| **Headers** | Define your column headers as key-value pairs (e.g., "Name", "Email", "Date") |
| **Data Source** | The data to export - can be from repeating groups, custom states, or any Bubble data source |
| **Columns Order** | Specify custom column ordering using semicolon-separated column keys |
| **Column Type** | Define data types for each column (general, number, date, currency, percentage) |
| **Columns Width** | Set custom column widths in characters (single value applies to all, or specify per column) |

### Export Configuration

| Property | Description |
|----------|-------------|
| **File Name** | Name of the exported Excel file (defaults to "exported_data.xlsx") |
| **Website Home URL** | Your Bubble app's home URL for automatic file upload (server-side only) |

### Calculation Features

| Property | Description |
|----------|-------------|
| **Sum Columns** | Specify which columns to calculate totals for (semicolon-separated column keys) |
| **Sum Row Label** | Custom label for the totals row (defaults to "Total") |

### Formatting & Styling

| Property | Description |
|----------|-------------|
| **Text Alignment** | Set text direction - LTR (Left-to-Right) or RTL (Right-to-Left) |
| **Date Format** | Custom date format pattern (e.g., "dd-mm-yyyy", "yyyy/mm/dd", "mm/dd/yy") |
| **Header Background Color** | Custom background color for column headers (supports hex, RGB, and RGBA) |
| **Header Bold** | Make header text bold |
| **Header Italic** | Make header text italic |

## States

| State | Type | Description |
|-------|------|-------------|
| **success** | Boolean | True if the export completed successfully |
| **file_url** | Text | URL of the generated Excel file (when uploaded to Bubble's file system) |
| **filename** | Text | Name of the generated Excel file |
| **file_size** | Number | Size of the generated file in bytes |
| **error** | Text | Error message if the export failed |

## Advanced Usage

### Custom Column Ordering

You can control the exact order of columns in your Excel file:

1. Set the **Columns Order** property with semicolon-separated column keys
2. Example: "Name;Email;Phone;Department;Salary"
3. Columns not specified will be added at the end in their original order

### Column Width Customization

1. **Single width for all columns**: Set one value (e.g., "20")
2. **Individual column widths**: Use semicolon-separated values (e.g., "15;25;30;20;35")
3. **Auto-fit**: Leave blank for automatic width calculation based on content

### Date Formatting

The plugin intelligently handles various date formats:

1. **Automatic detection**: Recognizes ISO 8601 dates automatically
2. **Custom formats**: Use the **Date Format** property for specific patterns
3. **Common formats supported**:
   - `dd-mm-yyyy` (European format)
   - `mm/dd/yyyy` (US format)
   - `yyyy-mm-dd` (ISO format)
   - `dd/mm/yy` (Short format)

### Currency and Percentage Handling

The plugin automatically recognizes and formats:
- **Currency symbols**: $, €, and other currency indicators
- **Percentages**: Values ending with % symbol
- **Numeric calculations**: Automatically handles these formats in SUM calculations

### RTL Language Support

For Arabic, Hebrew, and other RTL languages:

1. Set **Text Alignment** to **RTL**
2. All text, numbers, and dates will automatically align right-to-left
3. Headers and data will display correctly in RTL reading order

### Server vs Client Execution

**Client-side execution** (Browser):
- Generates and downloads files directly to user's browser
- Faster for smaller datasets
- No server costs or dependencies

**Server-side execution**:
- Processes data on Bubble's servers
- Automatically uploads files to Bubble's file system
- Better for large datasets or complex calculations
- Returns file URLs for use in your application

## Use Cases

- **Data Analysis**: Export filtered datasets for analysis in Excel
- **Reporting**: Generate custom reports with calculations and formatting
- **Data Migration**: Export data for backup or migration purposes
- **User Data Export**: Allow users to download their data as Excel files
- **Business Intelligence**: Create formatted reports for stakeholders
- **Financial Reports**: Export financial data with automatic SUM calculations
- **Inventory Management**: Export product lists with custom formatting
- **Customer Data**: Generate customer lists with proper formatting
- **Sales Reports**: Create sales reports with totals and custom styling
- **Multi-language Applications**: Export data with proper RTL formatting

## Integration Examples

### Basic Export Workflow

1. Create a button with workflow action "List to XLS Pro"
2. Set headers: "Product Name;Price;Quantity;Total"
3. Connect your data source (repeating group or custom state)
4. Add filename: "product_export.xlsx"
5. Execute to download the file

### Advanced Export with Calculations

1. Configure SUM columns: "Price;Total"
2. Set sum row label: "Grand Total"
3. Apply custom styling with header colors
4. Enable RTL if needed for international users
5. Execute to generate formatted report with totals

### Automated Export System

1. Use the server-side action for automated exports
2. Set up scheduled workflows to export data regularly
3. Store file URLs in your database for user access
4. Send email notifications with download links

## Best Practices

### Performance Optimization

- **Large datasets**: Use server-side execution for better performance
- **Column widths**: Set explicit widths for consistent formatting
- **Data preparation**: Clean and format your data before export
- **Memory management**: For very large exports, consider pagination

### Data Quality

- **Consistent data types**: Ensure consistent data types in your source data
- **Handle empty values**: The plugin gracefully handles null/empty values
- **Date standardization**: Use consistent date formats in your source data
- **Text cleaning**: Clean special characters if needed

### Styling Consistency

- **Brand colors**: Use your brand colors for header backgrounds
- **Consistent fonts**: Apply bold/italic consistently across headers
- **Column alignment**: Use RTL for international applications
- **Professional appearance**: Use appropriate column widths and styling

## Troubleshooting

### Export Fails or Downloads Don't Work

- **Check data source**: Ensure your data source contains valid data
- **Verify headers**: Make sure headers are properly configured
- **Browser permissions**: Check if browser blocks downloads
- **File size limits**: Large files may require server-side execution

### Formatting Issues

- **Column widths**: Adjust column width settings for better fit
- **Date formats**: Specify custom date format if automatic detection fails
- **RTL languages**: Ensure **Text Alignment** is set to **RTL**
- **Header styling**: Check color format (supports hex, RGB, RGBA)

### SUM Calculations Not Working

- **Numeric data**: Ensure columns contain valid numbers
- **Currency/percentage**: Plugin automatically handles $ and % symbols
- **Column selection**: Verify **Sum Columns** property contains correct column keys
- **Data types**: Check that source data contains parseable numbers

### Server-Side Upload Issues

- **Home URL**: Ensure **Website Home URL** is correctly set
- **File permissions**: Check Bubble's file upload permissions
- **Network issues**: Verify server connectivity
- **File size**: Large files may timeout - consider client-side execution

## FAQ

**Q: Can I export data from repeating groups?**  
A: Yes, you can export data from any Bubble data source including repeating groups, custom states, database queries, and API responses.

**Q: How do I handle different data types in export?**  
A: The plugin automatically detects and formats dates, currencies, percentages, and text. You can also specify column types for more control.

**Q: Can I customize the Excel file structure?**  
A: Yes, you can customize column ordering, widths, headers, styling, calculations, and file naming.

**Q: What's the difference between client-side and server-side execution?**  
A: Client-side runs in the user's browser and downloads files directly. Server-side runs on Bubble's servers, uploads to Bubble's file system, and returns file URLs.

**Q: Can I export very large datasets?**  
A: Yes, but for very large datasets, server-side execution is recommended to avoid browser memory limitations.

**Q: Does it support international languages and RTL text?**  
A: Yes, full RTL support for Arabic, Hebrew, and other right-to-left languages with proper text alignment and formatting.

**Q: How do I add totals and calculations to my export?**  
A: Use the **Sum Columns** property to specify which columns should have automatic totals calculated and displayed.

**Q: Can I style the headers with colors and fonts?**  
A: Yes, you can set header background colors, make text bold or italic, and apply custom formatting.

**Q: What happens if my data contains special characters?**  
A: The plugin handles UTF-8 encoding and special characters properly, including international characters and symbols.

**Q: Can I automate exports on a schedule?**  
A: Yes, you can set up scheduled workflows in Bubble to automatically export data at regular intervals using the server-side action.
