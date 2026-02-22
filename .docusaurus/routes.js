import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '870'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/elinor-ostrom',
    component: ComponentCreator('/blog/elinor-ostrom', '8c1'),
    exact: true
  },
  {
    path: '/blog/scalability-trilemma',
    component: ComponentCreator('/blog/scalability-trilemma', '0dd'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/blockchain',
    component: ComponentCreator('/blog/tags/blockchain', '70d'),
    exact: true
  },
  {
    path: '/blog/tags/cryptocurrency',
    component: ComponentCreator('/blog/tags/cryptocurrency', '8c4'),
    exact: true
  },
  {
    path: '/blog/tags/economics',
    component: ComponentCreator('/blog/tags/economics', 'e2f'),
    exact: true
  },
  {
    path: '/blog/tags/innovation',
    component: ComponentCreator('/blog/tags/innovation', '1fd'),
    exact: true
  },
  {
    path: '/blog/tags/scalability',
    component: ComponentCreator('/blog/tags/scalability', 'f82'),
    exact: true
  },
  {
    path: '/blog/tags/self-governance',
    component: ComponentCreator('/blog/tags/self-governance', 'c03'),
    exact: true
  },
  {
    path: '/blog/tags/trust',
    component: ComponentCreator('/blog/tags/trust', '968'),
    exact: true
  },
  {
    path: '/blog/what-do-we-mean-by-trust',
    component: ComponentCreator('/blog/what-do-we-mean-by-trust', '87a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f46'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e6a'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fce'),
            exact: true
          },
          {
            path: '/docs/tags/api',
            component: ComponentCreator('/docs/tags/api', '0eb'),
            exact: true
          },
          {
            path: '/docs/tags/content-strategy',
            component: ComponentCreator('/docs/tags/content-strategy', '1f1'),
            exact: true
          },
          {
            path: '/docs/tags/crypto',
            component: ComponentCreator('/docs/tags/crypto', 'ce0'),
            exact: true
          },
          {
            path: '/docs/tags/defi',
            component: ComponentCreator('/docs/tags/defi', '4b4'),
            exact: true
          },
          {
            path: '/docs/tags/developer-experience',
            component: ComponentCreator('/docs/tags/developer-experience', '55a'),
            exact: true
          },
          {
            path: '/docs/tags/documentation-engineer',
            component: ComponentCreator('/docs/tags/documentation-engineer', '010'),
            exact: true
          },
          {
            path: '/docs/tags/information-architecture',
            component: ComponentCreator('/docs/tags/information-architecture', 'b39'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'ebd'),
            routes: [
              {
                path: '/docs/how-i-work/intro',
                component: ComponentCreator('/docs/how-i-work/intro', 'bdc'),
                exact: true,
                sidebar: "howIworkSidebar"
              },
              {
                path: '/docs/portfolio/API-docs',
                component: ComponentCreator('/docs/portfolio/API-docs', '45d'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/docs/portfolio/build-dev-portal',
                component: ComponentCreator('/docs/portfolio/build-dev-portal', '60e'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/docs/portfolio/content-strategy-IA',
                component: ComponentCreator('/docs/portfolio/content-strategy-IA', '66c'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/docs/portfolio/developer-experience',
                component: ComponentCreator('/docs/portfolio/developer-experience', '28e'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/docs/portfolio/media',
                component: ComponentCreator('/docs/portfolio/media', 'e61'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/docs/portfolio/train-technical-writers',
                component: ComponentCreator('/docs/portfolio/train-technical-writers', 'f23'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/docs/research/game-theory/ostrom-games-cpr',
                component: ComponentCreator('/docs/research/game-theory/ostrom-games-cpr', '346'),
                exact: true,
                sidebar: "researchSidebar"
              },
              {
                path: '/docs/research/game-theory/prisoners-dilemma',
                component: ComponentCreator('/docs/research/game-theory/prisoners-dilemma', '199'),
                exact: true,
                sidebar: "researchSidebar"
              },
              {
                path: '/docs/research/usable-security/',
                component: ComponentCreator('/docs/research/usable-security/', 'f9a'),
                exact: true,
                sidebar: "researchSidebar"
              },
              {
                path: '/docs/research/usable-security/bank-employees',
                component: ComponentCreator('/docs/research/usable-security/bank-employees', 'fe2'),
                exact: true,
                sidebar: "researchSidebar"
              },
              {
                path: '/docs/research/usable-security/cognitive-framework',
                component: ComponentCreator('/docs/research/usable-security/cognitive-framework', '04d'),
                exact: true,
                sidebar: "researchSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
