import Dialog from 'rc-dialog';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalData } from '@selectors/ui';
import { EXAMPLE } from '@constants/modals';
import ui from '@actions/ui';
import { data } from 'autoprefixer';
import Example from './types/Example';
import './index.scss';

const BodyRenderer = { [EXAMPLE]: Example };

const ModalRenderer = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector(selectModalData);
  const visible = !!modal?.type;
  const type = modal?.type;
  const params = modal?.data;
  const closeModal = () => dispatch(ui.closeModal());
  const Body = BodyRenderer[type];

  return visible ? (
    <Dialog
      visible={true}
      onClose={closeModal}
      children={<Body data={data} closeModal={closeModal} />}
      {...params?.modal}
    />
  ) : null;
};

export default ModalRenderer;
