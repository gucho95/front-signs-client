const key = 'blockColumns';
const ref = (state) => state[key];

export const selectBlockColumns = (state, parentId) =>
  ref(state)?.data.filter((column) => column.parentId === parentId);

export const selectBlockLastColumn = (state, parentId) => {
  const blocks = ref(state)?.data.filter((column) => column.parentId === parentId);
  return blocks[blocks.length - 1];
};
