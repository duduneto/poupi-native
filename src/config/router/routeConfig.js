// import Packages
import React from "react";
import _ from "lodash";
import { Switch } from "react-router";

// import Internals
import AllApp from "../../screens/layouts/AllApp";
import Page404 from "../Page404";
// import * as Sc from "../../screens";
import allRoutes from "./routes";
import { Route } from "./packs";

const routesArr = [
  {
    path: "/",
    component: AllApp,
    childRoutes: [allRoutes, { path: "*", component: Page404 }].filter(
      r => r.component || (r.childRoutes && r.childRoutes.length > 0)
    )
  }
];

function handleIndexRoute(route) {
  if (!route.childRoutes || !route.childRoutes.length) {
    return;
  }

  const indexRoute = _.find(route.childRoutes, child => child.isIndex);
  if (indexRoute) {
    const first = { ...indexRoute };
    first.path = "";
    first.exact = true;
    first.autoIndexRoute = true; // mark it so that the simple nav won't show it.
    route.childRoutes.unshift(first);
  }
  route.childRoutes.forEach(handleIndexRoute);
}

routesArr.forEach(handleIndexRoute);

function renderRouteConfig(routes, contextPath) {
  // Resolve route config object in React Router.
  const children = []; // children component list

  const renderRoute = (item, routeContextPath) => {
    let newContextPath;
    if (/^\//.test(item.path)) {
      newContextPath = item.path;
    } else {
      newContextPath = `${routeContextPath}/${item.path}`;
    }
    newContextPath = newContextPath.replace(/\/+/g, "/");
    if (item.component && item.childRoutes) {
      const childRoutes = renderRouteConfig(item.childRoutes, newContextPath);
      children.push(
        <Route
          key={newContextPath}
          render={props => (
            <item.component {...props}>{childRoutes}</item.component>
          )}
          path={newContextPath}
        />
      );
    } else if (item.component) {
      children.push(
        <Route
          key={newContextPath}
          component={item.component}
          path={newContextPath}
          exact
        />
      );
    } else if (item.childRoutes) {
      item.childRoutes.forEach(r => renderRoute(r, newContextPath));
    }
  };

  routes.forEach(item => renderRoute(item, contextPath));

  // Use Switch so that only the first matched route is rendered.
  return <Switch>{children}</Switch>;
}

const children = renderRouteConfig(routesArr, "/");

export default children;
