import MainPage from '../../pages/main-page-screen/main-page-screen';

type AppProps = {
  offersAmount: number;
}

function App({offersAmount}: AppProps): JSX.Element {
  return (
    <MainPage
      offersAmount={offersAmount}
    />
  );
}

export default App;
