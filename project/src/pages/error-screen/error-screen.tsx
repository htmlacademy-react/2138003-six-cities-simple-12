import Header from '../../components/header/header';
import { Link } from 'react-router-dom';

function ErrorPage () {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <h1>
        <span style={{ fontSize: '5em' }}>404</span>
        <br/>
        Страница не существует
      </h1>
      <Link to="/">Вернуться на главную страницу</Link>
    </div>
  );
}

export default ErrorPage;
