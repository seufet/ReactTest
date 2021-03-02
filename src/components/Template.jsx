import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AlbumsPage from './albums/AlbumsPageContainer';
import ArtistsPage from './artists/ArtistsPageContainer';
import ChangePasswordPage from './account/ChangePasswordPageContainer';
import HeaderContainer from './shared/HeaderContainer';
import ErrorBox from './shared/ErrorBoxContainer';
import HomePage from './home/HomePageContainer';
import ProfilePage from './account/ProfilePage';
import ListPage from './list/ListPageContainer';
import LoginPage from './account/LoginPageContainer';
import RegisterPage from './account/RegisterPageContainer';
import RegistrationSuccessPage from './account/RegistrationSuccessPageContainer';
import ResetPasswordPage from './account/ResetPasswordPageContainer';

export default function Template(props) {
  const { authentication, progress } = props;
  return (
    <Router>
      <div className="wrapper">
        <HeaderContainer authentication={authentication} />
        <ErrorBox />
        <section className="page-content container-fluid">
          <Route exact path="/" component={HomePage} />          
          <Route exact path="/account/login" component={LoginPage} />
          <Route path="/account/change-password/:hash" component={ChangePasswordPage} />
          <Route path="/account/profile/:id" component={ProfilePage} />
          <Route exact path="/account/register" component={RegisterPage} />
          <Route exact path="/account/registration-success" component={RegistrationSuccessPage} />
          <Route exact path="/account/reset-password" component={ResetPasswordPage} />
          <Route exact path="/albums" component={AlbumsPage} />
          <Route exact path="/artists" component={ArtistsPage} />
          <Route path="/list/:username" component={ListPage} />
        </section>

        <div className="loader-wrapper" style={progress > 0 ? { display: 'block' } : { display: 'none' }}>
          <div className="loader-box">
            <div className="loader">Loading...</div>
          </div>
        </div>
      </div>
    </Router>
  );
}