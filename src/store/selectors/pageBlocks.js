const key = 'pageBlocks';
const ref = (state) => state[key];

export const selectPageBlocks = (state, parentId) => ref(state)?.data.filter((block) => block.parentId === parentId);

export const selectPageLastBlock = (state, parentId) => {
  const blocks = ref(state)?.data.filter((block) => block.parentId === parentId);
  return blocks[blocks.length - 1];
};
