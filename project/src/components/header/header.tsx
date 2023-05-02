import Logo from '../logo/logo';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { checkAuthAction, logoutAction } from '../../store/api-actions';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

export default function Header() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const email = useAppSelector((state) => state.email);

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <div className="header__nav-profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">{(authorizationStatus === AuthorizationStatus.Auth) ? email : ''}</span>
                </div>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link"
                  onClick={() => {
                    dispatch(logoutAction());
                  }}
                  to={AppRoute.Login}
                >
                  <span className="header__signout">{(authorizationStatus === AuthorizationStatus.Auth) ? 'Sign out' : 'Sign in'}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
