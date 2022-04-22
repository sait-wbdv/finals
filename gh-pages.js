import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'git@github.com:sait-wbdv/finals.git', // Update to point to your repository
  user: {
   name: 'Tony Grimes', // update to use your name
   email: 'acidtone@tonygrimes.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);