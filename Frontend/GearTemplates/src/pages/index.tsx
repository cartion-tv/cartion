import { Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { Main } from './main';
import { NFTForm } from './nftForm';
import { NFTCollection } from './nftCollection';
import { Comparte } from './comparte';

const routes = [
  { path: '/', Page: Home },
  { path: '/main', Page: Main },
  { path: '/nftform', Page: NFTForm },
  { path: '/nftCollection', Page: NFTCollection },
  { path: '/comparte', Page: Comparte },
];

function Routing() {
  const getRoutes = () =>
    routes.map(({ path, Page }) => (
      <Route key={path} path={path} element={<Page />} />
    ));

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
