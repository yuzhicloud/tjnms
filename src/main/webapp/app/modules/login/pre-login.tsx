import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { useAppSelector } from 'app/config/store';

const PreLogin = () => {
  // 这里可以添加登录逻辑，例如重定向到 SSO 提供商
  const handleLogin = () => {
    //window.location.href = 'oauth2/authorization/oidc';
  };

  return (
    <Container className="d-flex vh-100">
      <Row className="m-auto align-self-center">
        <Col className="text-center">
          <div>
            <i className="fa fa-key fa-3x"></i>
          </div>
          <Button color="primary" onClick={handleLogin}>
            SSO 登录
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PreLogin;
