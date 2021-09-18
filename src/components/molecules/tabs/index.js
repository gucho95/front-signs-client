import { useState, useEffect } from 'react';
import RcTabs, { TabPane as RcTabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import './index.scss';

const a = [
  { title: 'aaaaaaaaa', body: <div>a1</div> },
  { title: 'bbbbbbbbbbbbbbb', body: <div>a2</div> },
  { title: 'ccccccccccccc', body: <div>a3</div> },
];

const Tabs = ({ data, tabKey, tabProps }) => {
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    setActiveKey(tabKey.toString());
  }, [tabKey]);

  return (
    <RcTabs {...tabProps} activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
      {data
        ? data.map(({ title, body: Body }, index) => <RcTabPane key={index} tab={title} children={<Body />} />)
        : null}
    </RcTabs>
  );
};

export default Tabs;
