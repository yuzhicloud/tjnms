import './home.scss';

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert } from 'reactstrap';

import { getLoginUrl, REDIRECT_URL } from 'app/shared/util/url-utils';
import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);
  useEffect(() => {
    const redirectURL = localStorage.getItem(REDIRECT_URL);
    if (redirectURL) {
      localStorage.removeItem(REDIRECT_URL);
      location.href = `${location.origin}${redirectURL}`;
    }
  });

  return (
    <Row>
      <Col md="9">
        <h5 className="display-4">
          <Translate contentKey="home.title">Welcome, Java Hipster!</Translate>
        </h5>
        {account?.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="home.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          </div>
        ) : (
          <div></div>
        )}
      </Col>
    </Row>
  );
};

export default Home;
