import RcTabs, { TabPane as RcTabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import './index.scss';

const Tabs = ({ data, activeKey, setActiveKey, tabProps }) => {
  return (
    <RcTabs {...tabProps} activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
      {data
        ? data.map(({ title, body: Body }, index) => (
            <RcTabPane forceRender={true} key={index.toString()} tab={title} children={Body} />
          ))
        : null}
    </RcTabs>
  );
};

export default Tabs;
