import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../Redux/contacts/operations';
import ContactItem from '../ContactItem';
import { getVisibleContacts } from '../../Redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';
import s from './ListContacts.module.scss';

const ListContacts = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const fetchContacts = () => dispatch(operations.fetchContacts());
  const onDelete = id => dispatch(operations.deleteContact(id));

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <ul className={s.ul}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  fetchContacts: PropTypes.func,
};

export default ListContacts;
