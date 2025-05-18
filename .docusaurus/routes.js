import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/bubble-documentation/blog',
    component: ComponentCreator('/bubble-documentation/blog', '95a'),
    exact: true
  },
  {
    path: '/bubble-documentation/blog/archive',
    component: ComponentCreator('/bubble-documentation/blog/archive', '108'),
    exact: true
  },
  {
    path: '/bubble-documentation/blog/authors',
    component: ComponentCreator('/bubble-documentation/blog/authors', 'bdc'),
    exact: true
  },
  {
    path: '/bubble-documentation/blog/bubble-productivity-tips',
    component: ComponentCreator('/bubble-documentation/blog/bubble-productivity-tips', '2a6'),
    exact: true
  },
  {
    path: '/bubble-documentation/blog/getting-started-with-bubble-plugin-development',
    component: ComponentCreator('/bubble-documentation/blog/getting-started-with-bubble-plugin-development', 'da3'),
    exact: true
  },
  {
    path: '/bubble-documentation/blog/tags',
    component: ComponentCreator('/bubble-documentation/blog/tags', 'f8c'),
    exact: true
  },
  {
    path: '/bubble-documentation/blog/tags/bubble',
    component: ComponentCreator('/bubble-documentation/blog/tags/bubble', 'e09'),
    exact: true
  },
  {
    path: '/bubble-documentation/blog/tags/development',
    component: ComponentCreator('/bubble-documentation/blog/tags/development', '514'),
    exact: true
  },
  {
    path: '/bubble-documentation/blog/tags/plugins',
    component: ComponentCreator('/bubble-documentation/blog/tags/plugins', '1b1'),
    exact: true
  },
  {
    path: '/bubble-documentation/blog/tags/productivity',
    component: ComponentCreator('/bubble-documentation/blog/tags/productivity', '9e4'),
    exact: true
  },
  {
    path: '/bubble-documentation/blog/tags/tips',
    component: ComponentCreator('/bubble-documentation/blog/tags/tips', '16c'),
    exact: true
  },
  {
    path: '/bubble-documentation/blog/tags/tutorial',
    component: ComponentCreator('/bubble-documentation/blog/tags/tutorial', '34e'),
    exact: true
  },
  {
    path: '/bubble-documentation/docs',
    component: ComponentCreator('/bubble-documentation/docs', '743'),
    routes: [
      {
        path: '/bubble-documentation/docs',
        component: ComponentCreator('/bubble-documentation/docs', '9d8'),
        routes: [
          {
            path: '/bubble-documentation/docs',
            component: ComponentCreator('/bubble-documentation/docs', '5b9'),
            routes: [
              {
                path: '/bubble-documentation/docs/intro',
                component: ComponentCreator('/bubble-documentation/docs/intro', '88b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bubble-documentation/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/bubble-documentation/docs/tutorial-basics/congratulations', 'd3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bubble-documentation/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/bubble-documentation/docs/tutorial-basics/create-a-blog-post', '1aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bubble-documentation/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/bubble-documentation/docs/tutorial-basics/create-a-document', '618'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bubble-documentation/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/bubble-documentation/docs/tutorial-basics/create-a-page', 'b69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bubble-documentation/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/bubble-documentation/docs/tutorial-basics/markdown-features', 'b1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bubble-documentation/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/bubble-documentation/docs/tutorial-extras/manage-docs-versions', 'ec7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bubble-documentation/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/bubble-documentation/docs/tutorial-extras/translate-your-site', '9b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/bubble-documentation/',
    component: ComponentCreator('/bubble-documentation/', 'a6c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
