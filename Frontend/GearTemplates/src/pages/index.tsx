import { Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { Main } from './main';
import { NFTForm } from './nftForm';
import { NFTCollection } from './nftCollection';
import { Comparte } from './comparte';
import { CompraNFTs } from './compraNFTs';
import { TuNFT } from './tuNFT';

const routes = [
  { path: '/', Page: Home },
  { path: '/main', Page: Main },
  { path: '/nftform', Page: NFTForm },
  { path: '/nftCollection', Page: NFTCollection },
  { path: '/comparte', Page: Comparte },
  { path: '/compraNFTs', Page: CompraNFTs },
  { path: '/tuNFT', Page: TuNFT },
];

function Routing() {
  const getRoutes = () =>
    routes.map(({ path, Page }) => (
      <Route key={path} path={path} element={<Page />} />
    ));

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
