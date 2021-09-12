import { useDispatch, useSelector } from 'react-redux';
import { AddWidgetTemplate } from '@templates';
import { selectPage } from '@selectors/page';
import { useRouter } from '@hooks';
import { ADD_WIDGET } from '@constants/modals';

const classes = {
  titleWrapper: 'flex justify-between',
  pageLink: 'underline',
  content: 'grid pb-3 gap-y-1',
};

const AddWidget = () => {
  const { match } = useRouter();
  const dispatch = useDispatch();
  const page = match.params.page;
  // ACTIONS
  const pageData = useSelector((state) => selectPage(state, page));
  console.log(`pageData`, pageData);

  return <AddWidgetTemplate />;
};

export default AddWidget;
