---
sidebar_position: 3
---

# Creating Pages in Your Bubble Application

Pages are the foundation of your Bubble application's user interface. This guide will walk you through creating and configuring pages effectively.

## Understanding Pages in Bubble

In Bubble, pages are individual screens that users interact with. Each page can have:

- A unique URL
- Its own set of UI elements
- Specific workflows and business logic
- Different access permissions

## Creating a New Page

### Basic Page Creation

1. In the Bubble editor, navigate to the top of the screen
2. Click on "Pages" to open the page manager
3. Click "Add a page"
4. Enter a name for your page (e.g., "User Profile")
5. Choose a URL slug (e.g., "profile")
6. Click "Create"

### Page Types

Bubble supports different types of pages:

- **Standard Pages** - Regular pages with static URLs
- **Dynamic Pages** - Pages that accept parameters in the URL (e.g., `/product/:id`)
- **Reusable Elements** - Components that can be used across multiple pages
- **Popup Elements** - Overlay components that appear on top of pages

## Designing Your Page

### Adding Elements

Use the element panel to add components to your page:

1. Click on the "+" icon in the left sidebar
2. Select an element type (e.g., Text, Button, Input, Group)
3. Click and drag to place it on the page
4. Use the property panel on the right to configure the element

### Layout Techniques

Employ these strategies for effective page layouts:

- **Groups** - Use group elements to organize related components
- **Columns** - Create multi-column layouts for responsive designs
- **Floating Groups** - Position elements that need to stay in a fixed position
- **Responsive Settings** - Configure how elements behave on different screen sizes

## Page Properties and Settings

### Page Settings

Access page settings by clicking on the page name in the top bar:

- **Title** - The browser tab title (important for SEO)
- **Meta Description** - Description for search engines
- **Page Authentication** - Control who can access the page
- **SEO Settings** - Configure search engine optimization
- **Custom Header/Footer** - Add page-specific headers or footers

### Header and Footer

Set up consistent navigation across your app:

1. Go to the page list
2. Click on "Header/Footer" section
3. Design your navigation elements
4. Configure which pages should display the header/footer

## Creating Dynamic Pages

Dynamic pages are essential for content that follows the same template but displays different data.

### Setting Up a Dynamic Page

1. Create a new page (e.g., "Product Details")
2. In page settings, set "This page is a setup to display a dynamic data type"
3. Select the data type (e.g., "Product")
4. Configure the URL pattern (e.g., "product/:product_id")

### Displaying Dynamic Content

On your dynamic page:

1. Add elements to display your data
2. In the element properties, set dynamic data sources
3. Reference "Current page's Product" to access the specific item's data

## Page Navigation

### Setting Up Navigation Between Pages

Create navigation using:

- **Buttons with Navigation Actions** - Configure a workflow to navigate to a specific page
- **Links** - Text or image elements with navigation properties
- **Menus** - Dropdown navigation components

### Navigation to Dynamic Pages

When navigating to dynamic pages, you must provide the necessary parameters:

1. Create a workflow action to "Navigate to page"
2. Select your dynamic page
3. For the parameter, choose the specific data item to display

Effective page design and navigation are crucial for creating intuitive, user-friendly Bubble applications. Take time to plan your page structure before building to ensure a seamless user experience.

