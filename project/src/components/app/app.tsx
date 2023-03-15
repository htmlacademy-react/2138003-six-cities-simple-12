import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page-screen/main-page-screen';
import Login from '../../pages/login-screen/login-screen';
import Property from '../../pages/property-screen/property-screen';
import ErrorPage from '../../pages/error-screen/error-screen';

type AppProps = {
  offersAmount: number;
}

function App({offersAmount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offersAmount={offersAmount}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Room}
          element={<Property />}
        />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
