import * as ghPages from 'gh-pages';

ghPages.clean();

ghPages.publish('storybook-static', {
  branch: 'gh-pages',
  repo: 'https://github.com/cocco3/angular-components.git',
});
