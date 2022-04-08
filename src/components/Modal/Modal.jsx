import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {closeModals} from '../../store/ModalSlice';

function Modalg({ show, title, children }) {
  const dispatch = useDispatch();

  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => dispatch(closeModals())}      
    >
    <Modal.Header closeButton>
      <Modal.Title id="modal">
        {title}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      { children }
    </Modal.Body>
    </Modal>
  )
}

export default Modalg;