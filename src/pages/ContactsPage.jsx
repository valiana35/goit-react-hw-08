import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/operations";
import DocumentTitle from "../components/DocumentTitle";
import ContactForm from "../components/ContactForm/ContactForm";
import { useEffect } from "react";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { selectIsOpen } from "../redux/modal/selectors";
import ContactModal from "../components/ContactModal/ContactModal";


function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const isOpen = useSelector(selectIsOpen);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Phonebook</DocumentTitle>
      <h2 className="title">Phonebook</h2>
      <ContactForm />
      <SearchBox />
      {isLoading && <p className="text">Loading...</p>}
      {error && <p className="text">Something went wrong...</p>}
      {contacts && <ContactList />}
      {isOpen && <ContactModal />}
    </>
  );
}

export default ContactsPage;
