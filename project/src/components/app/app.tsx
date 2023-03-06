import MainPages from '../../pages/main-page-screen/main-page';

type AppProps = {
  rentsCount: number;
}

function App({rentsCount}: AppProps): JSX.Element {
  return (
    <MainPages
      rentsCount={rentsCount}
    />
  );
}

export default App;
