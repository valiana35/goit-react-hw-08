import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modal/slice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <h2 className={css.name}>
        <FaUser />
        {name}
      </h2>
      <p className={css.number}>
        <FaPhone />
        {number}
      </p>
      <button
        type="button"
        className={css.deleteBtn}
        onClick={() => dispatch(openModal(id))}
      >
        <RiDeleteBinLine size={28} />
      </button>
    </div>
  );
};

export default Contact;