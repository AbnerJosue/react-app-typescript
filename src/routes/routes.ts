import { LazyExoticComponent, lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;
interface Route {
    to: string; 
    path: string;
    Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
    name: string;
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/layout/lazyLayout'));

export const routes:Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload',
        Component: Lazy1, 
        name: 'LazyLayout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy, 
        name: 'No Lazy'
    },
  
]