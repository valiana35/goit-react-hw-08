import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modal/slice";
import Modal from 'react-modal';
import { selectIsOpen } from "../../redux/modal/selectors";

const ContactModal = ({ id }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
      <div>
        <Modal isOpen={isOpen} style={customStyles}>
        <p>Do you really want to delete this contact?</p>
        <button
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
            dispatch(closeModal());
          }}
        >
          Delete
        </button>
        <button type="button" onClick={() => dispatch(closeModal())}>
          Cancel
        </button>
        </Modal>
      </div>
  );
};

export default ContactModal;
