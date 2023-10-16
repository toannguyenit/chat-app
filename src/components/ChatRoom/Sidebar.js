import { Col, Row } from "antd";
import React from "react";
import classNames from "classnames/bind";

import UserInfo from "./UserInfo";
import RoomList from "./RoomList";
import styles from "./SidebarStyle.module.scss";

const cx = classNames.bind(styles);

export default function Sidebar() {
  return (
    <div className={cx("wrapper")}>
      <Row>
        <Col span={24}>
          <UserInfo />
        </Col>
        <Col span={24}>
          <RoomList />
        </Col>
      </Row>
    </div>
  );
}
