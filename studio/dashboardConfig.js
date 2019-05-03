export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '5ccc2c5431dcd4dddc48f065',
                  name: 'Content Studio',
                  siteId: '15e6f2c1-6c8c-43fb-92ec-a0f2e74af66c'
                },
                {
                  buildHookId: '5ccc2bda31dcd4ea2248f064',
                  name: 'Portfolio Website',
                  siteId: '4b1cdc7d-0575-471d-b71f-66031828ec8b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/flaaten/sanity-gatsby-portfolio',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-i88bm8p7.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent projects', order: '_createdAt desc', types: ['project'] },
      layout: { width: 'medium' }
    }
  ]
};
