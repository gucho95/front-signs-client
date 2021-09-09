import { generateSinglePagePath } from '@constants/paths';

const key = 'pages';
const ref = (state) => state[key];

export const selectPages = (state) => ref(state)?.data;

export const selectPagesMenu = (state) => {
  const data = selectPages(state);
  const menu = data.map((item) => ({ ...item, path: generateSinglePagePath(item.path) }));
  return menu;
};

export const selectPage = (state, page) => {
  const pages = selectPages(state);
  return pages.find((p) => p.path === page);
};
