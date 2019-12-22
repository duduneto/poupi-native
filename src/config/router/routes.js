import * as Sc from '../../screens';

export default {
  path: '/',
  childRoutes: [
    { path: '/sign-in', component: Sc.Sc01a, isIndex: true },
    { path: '/terms', component: Sc.Sc01b },
    { path: '/onboarding', component: Sc.Sc01c },
    { path: '/profile', component: Sc.Sc02a }
  ]
};
