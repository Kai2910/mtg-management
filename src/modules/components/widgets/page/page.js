import React from 'react';
import { Spin, Avatar } from 'antd';

import './page.less';

const Page = ({ header, icon, button, buttons = [], children, intializing = false, loading = false }) => (
  <div className="page">
    {header ? <h1 className="page-header">
      {icon ? <Avatar size="large" icon={icon} /> : null}
      {header}
      <div className="page-buttons">{button}{buttons}</div>
    </h1> : null}

    <div>
      <Spin spinning={loading || intializing}>
        {!intializing ? children : ' '}
      </Spin>
    </div>
  </div>
);

export default Page;