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
| **Data Search Field 1-5** | Up to five fields to search within the data source |
| **Max Items** | Maximum number of results to return in the `search_results` state |

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
