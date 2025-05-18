---
sidebar_position: 2
---

# Translating Documentation and Creating Multilingual Apps

In today's global market, supporting multiple languages is essential for reaching a wider audience. This guide covers both translating your Bubble application documentation and creating multilingual Bubble applications.

## Part 1: Translating Your Documentation

### Why Translate Documentation?

Translating your documentation offers several benefits:

- **Expanded reach** to non-English speaking users
- **Improved user experience** for international audiences
- **Increased adoption** in global markets
- **Reduced support requests** from users struggling with language barriers

### Setting Up i18n in Docusaurus

If you're using Docusaurus for your documentation (like this site), you can leverage its built-in internationalization features:

1. **Configure supported locales** in `docusaurus.config.js`:

```js
module.exports = {
  // ...
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'ja'],
  },
  // ...
};
```

2. **Generate translation files**:

```bash
npm run write-translations -- --locale fr
```

This creates translation files in the `i18n/fr` directory.

3. **Translate the content** by editing the generated JSON files.

4. **Create localized documentation** by copying your docs into language-specific folders:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/fr/docusaurus-plugin-content-docs/current
```

Then translate the Markdown files in the new directory.

### Language Switcher

Once configured, Docusaurus displays a language dropdown in the navbar:

![Language Dropdown](img/localeDropdown.png)

### Translation Management Tips

- **Use translation management software** like Crowdin or Lokalise
- **Maintain glossaries** for consistent translation of technical terms
- **Provide context** for translators about technical concepts
- **Keep original screenshots** with translated captions when possible

## Part 2: Creating Multilingual Bubble Applications

### Approaches to Multilingual Bubble Apps

There are several strategies for creating multilingual Bubble applications:

#### 1. Text Resource Database

Create a database of text resources with translations:

1. Create a **Translations** data type with fields:
   - Key (unique identifier)
   - English (default text)
   - Spanish (translated text)
   - French (translated text)
   - etc.

2. Create a **Current Language** user attribute to store the user's language preference

3. Use dynamic expressions to display the appropriate text:
   ```
   Translations[Key="welcome_message"][Current User's Language]
   ```

#### 2. Language-Specific Pages

For more complex applications:

1. Create separate pages for each language (e.g., `home`, `home-es`, `home-fr`)
2. Add a language selector that navigates to the corresponding page
3. Maintain parallel workflows for each language

#### 3. Plugin Solutions

Several Bubble plugins can help with translations:

- **Bubble Translator** - Automatically translates text elements
- **Multi-language** - Manages translations in a structured way
- **Translation Manager** - Helps organize and deploy translations

### Best Practices for Multilingual Bubble Apps

#### Text Considerations

- **Allow for text expansion** - Some languages require more space than English
- **Use icons and visuals** where possible to reduce translation needs
- **Avoid idioms and colloquialisms** that may not translate well
- **Format dates and numbers** according to locale conventions

#### Design Considerations

- **Test with right-to-left languages** (Arabic, Hebrew) if supporting them
- **Use flexible layouts** that can accommodate different text lengths
- **Consider cultural appropriateness** of images and colors

#### Implementation Tips

1. **Start with one additional language** before expanding further
2. **Create a translation workflow** for keeping content in sync
3. **Test with native speakers** to ensure natural-sounding translations
4. **Consider auto-detection** of the user's browser language
5. **Provide a clear language switcher** in a consistent location

## Advanced: Automated Translation Workflows

For large applications with frequent updates:

1. **Extract text** from your Bubble application
2. **Send to translation API** (Google Translate, DeepL)
3. **Review machine translations** for accuracy
4. **Import back to Bubble** using the API

This can be automated using Bubble's API Connector and Scheduled Workflows.

## Conclusion

Whether you're translating documentation or creating a multilingual application, proper planning is essential. Start with a structured approach to translations, and expand to more languages as your user base grows. With the right processes in place, maintaining multiple languages becomes much more manageable.

