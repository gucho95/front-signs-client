import React from 'react';
import loadable from '@loadable/component';
const Loader = () => <div>Loader</div>;

const withLazyLoad = (componentImport) => loadable(componentImport);

export default withLazyLoad;
