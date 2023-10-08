import React from "react";
import { Row, Col, Button, Typography } from "antd";

import { useNavigate } from 'react-router-dom'

import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { authentication } from "../../firebase/config";

const { Title } = Typography;

export default function Login() {
  const navigate = useNavigate();


  const handleFbLogin = () => {
    const fbProvider = new FacebookAuthProvider();
    signInWithPopup(authentication, fbProvider)
      .then((re) => {
        // console.log(re);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleGgLogin = () => {
    const ggProviderr = new GoogleAuthProvider();
    signInWithPopup(authentication, ggProviderr)
      .then((re) => {
        // console.log(re);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  authentication.onAuthStateChanged((user) => {
    console.log({user});
    if (user) {

      // navigate("/login");

    }
  })
  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Fun Chat
          </Title>
          <Button
            style={{ width: "100%", marginBottom: 5 }}
            onClick={handleGgLogin}
          >
            Đăng nhập bằng Google
          </Button>
          <Button style={{ width: "100%" }} onClick={handleFbLogin}>
            Đăng nhập bằng FaceBook
          </Button>
        </Col>
      </Row>
    </div>
  );
}
