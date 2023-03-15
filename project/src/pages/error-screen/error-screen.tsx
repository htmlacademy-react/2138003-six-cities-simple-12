import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './error-screen.css';

function ErrorPage () {
  return (
    <div className='error-page'>
      <Helmet>
        <title>six cities simple: error404</title>
      </Helmet>
      <Header />
      <h1>
        <span className='error-page-link'>404</span>
        <br/>
        Страница не существует
      </h1>
      <Link to="/">Вернуться на главную страницу</Link>
    </div>
  );
}

export default ErrorPage;
