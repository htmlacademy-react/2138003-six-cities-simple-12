import Logo from '../logo/logo';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { checkAuthAction, logoutAction } from '../../store/api-actions';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';

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
                <a className="header__nav-link"
                  onClick={() => {
                    dispatch(logoutAction());
                  }}
                  href={AppRoute.Login}
                >
                  <span className="header__signout">{(authorizationStatus === AuthorizationStatus.Auth) ? 'Sign out' : 'Sign in'}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
