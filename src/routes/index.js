//Layout

import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

import routesConfig from '~/config/routes';

//public Route
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.search, component: Search, layout: null },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
