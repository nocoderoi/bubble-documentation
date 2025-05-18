---
sidebar_position: 1
---

# Managing Documentation Versions

As your Bubble application evolves, you'll need to keep your documentation in sync with different versions of your app. This guide explains how to manage documentation versions effectively.

## Why Version Your Documentation?

When you make significant changes to your Bubble application, users on different versions need access to the appropriate documentation:

- **Supporting legacy users** who haven't upgraded yet
- **Showcasing new features** in upcoming releases
- **Maintaining historical records** of feature evolution
- **Helping users migrate** between versions

## Setting Up Documentation Versioning

### Version Planning

Before implementing versioning, establish a clear versioning strategy:

1. **Decide on a versioning scheme** (e.g., semantic versioning: major.minor.patch)
2. **Determine when to create new versions** (major releases, significant UI changes)
3. **Plan for deprecation** of old versions

### Implementing Versioning with Docusaurus

If you're using Docusaurus (like this documentation site), you can enable versioning:

```bash
# Create a versioned snapshot of your current docs
npm run docusaurus docs:version 1.0.0
```

This command:
- Copies your current docs into a versioned directory
- Creates version-specific sidebars
- Updates the version dropdown in the UI

### Bubble-Specific Version Considerations

When versioning Bubble app documentation, pay special attention to:

1. **Plugin compatibility** - Document which plugins work with each app version
2. **API changes** - Highlight differences in API behavior between versions
3. **UI differences** - Include version-specific screenshots showing interface changes
4. **Workflow modifications** - Note changes to workflow behavior and available actions

## Managing Multiple Versions

### Version Switcher

Add a clear version switcher to help users navigate between documentation versions:

![Version Dropdown](img/docsVersionDropdown.png)

### Version Badges

Include version badges in your documentation to indicate compatibility:

```md
:::info Version Compatibility
This feature is available in Bubble app versions 1.8.0 and higher.
:::
```

### Version-Specific Examples

Provide examples tailored to specific versions:

```md
**In Bubble 2.x:**
1. Navigate to the Workflows tab
2. Click "Add new workflow"

**In Bubble 1.x:**
1. Open the Element tree
2. Right-click on the element
3. Select "Add workflow"
```

## Migrating Between Versions

Create migration guides to help users transition between major versions:

1. **Highlight breaking changes** that require attention
2. Provide **step-by-step migration instructions**
3. Include **before/after comparisons** of key features
4. Offer **troubleshooting tips** for common migration issues

## Best Practices

1. **Don't version too frequently** - Only create new versions for significant changes
2. **Maintain consistency across versions** - Use the same terminology and structure
3. **Clearly mark deprecated features** in older versions
4. **Link between versions** when referencing related content
5. **Use feature flags** to document features that are gradually rolled out

Well-managed documentation versions ensure a smooth experience for all users, regardless of which version of your Bubble application they're using.

