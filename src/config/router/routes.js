import * as Sc from "../../screens";
import AppAuth from "../../screens/layouts/AppAuth";

export default {
  path: "/",
  childRoutes: [
    // { path: '/temp', component: Sc.Sc00a, isIndex: true },
    { path: "/sign-in", component: Sc.Sc01a, isIndex: true },
    { path: "/temp-users", component: Sc.Sc00b },
    { path: "/terms", component: Sc.Sc01b },
    {
      path: "/",
      component: AppAuth,
      childRoutes: [
        { path: "/onboarding", component: Sc.Sc01c },
        { path: "/all-deliveries", component: Sc.Sc02a },
        { path: "/my-delivery", component: Sc.Sc02b },
        { path: "/profile", component: Sc.Sc03a },
        { path: "/delivery-profile", component: Sc.Sc03b },
        { path: "/delivery-add", component: Sc.Sc04a }
      ]
    }
  ]
};
