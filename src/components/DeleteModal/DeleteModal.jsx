import { Stack, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse } from '../../services/coursesService';
import { closeModals } from '../../store/ModalSlice';
import Modal from '../Modal';

function DeleteModal(){
  const dispatch = useDispatch();
  const { modalReducer: modalState, authReducer } = useSelector(state => state);
  const { token } = authReducer;

  function handleDelete() {
    dispatch(deleteCourse(modalState.delId, token));
    dispatch(closeModals());
  }

  return (
    <Modal show={modalState.showDelModal} title="Deletar Curso ?">
      <Stack direction='horizontal' gap={3}>
        <Button variant="danger" onClick={() => handleDelete()}>Deletar</Button>
        <Button variant="secondary" onClick={() => dispatch(closeModals())}>Cancelar</Button>
      </Stack>
    </Modal>
  )
}

export default DeleteModal;