import { Button, Collapse, Typography } from "antd";
import React from "react";
import classNames from "classnames/bind";
import styled from "styled-components";

import { PlusSquareOutlined } from "@ant-design/icons";

import styles from './RoomListStyle.module.scss'
const cx = classNames.bind(styles);

const {Panel} = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header, p {
      color: white !important;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`

export default function RoomList() {
  return (
    <Collapse ghost defaultActiveKey={'1'}>
      <PanelStyled header="Danh sach cac phong" key='1'>
        <LinkStyled >Room 1</LinkStyled>
        <LinkStyled >Room 2</LinkStyled>
        <LinkStyled >Room 3</LinkStyled>
        <Button type="text" icon={<PlusSquareOutlined/>} className="add-room" >Thêm phòng</Button>
      </PanelStyled>
    </Collapse>
  );
}
