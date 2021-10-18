const key = 'blockColumns';
const ref = (state) => state[key];

export const selectBlockColumns = (state, parentId) =>
  ref(state)
    ?.data.filter((column) => column.parentId === parentId)
    .sort((a, b) => a.index - b.index);

export const selectColumnsMaxIndex = (state, parentId) => {
  const blockColumns = selectBlockColumns(state, parentId);

  if (!blockColumns.length) {
    return 0;
  }

  const maxIndex = Math.max.apply(
    Math,
    blockColumns.map((i) => i.index)
  );
  return maxIndex;
};
