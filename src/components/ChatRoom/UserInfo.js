import { Avatar, Button, Typography } from 'antd'
import React from 'react'
import classNames from 'classnames/bind'

import styles from './UserInfo.module.scss'

const cx = classNames.bind(styles)

export default function UserInfo() {
  return (
    <div className={cx('wrapper')}>
        <div>
            <Avatar>A</Avatar>
            <Typography.Text className={cx('username')}>ABC</Typography.Text>
        </div>
        <Button ghost>Đăng xuất</Button>
    </div>
  )
}
