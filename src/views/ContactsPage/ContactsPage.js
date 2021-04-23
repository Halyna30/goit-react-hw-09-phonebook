import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import operations from '../../Redux/contacts/operations';
import { getFilter } from '../../Redux/contacts/contacts-selectors';
import { changeFilter } from '../../Redux/contacts/actions';
import FormContacts from '../../components/FormContacts';
import Filter from '../../components/Filter';
import ListContacts from '../../components/ListContacts';

const Contacts = () => {
  const dispatch = useDispatch();
  const onAddContact = contact => dispatch(operations.addContact(contact));
  const onChangeFilter = value => dispatch(changeFilter(value));
  const filter = useSelector(getFilter);

  return (
    <>
      <h2 className="title">Add contact</h2>
      <FormContacts onSubmit={onAddContact} />

      <h2 className="title">Contacts list</h2>
      <Filter value={filter} onChange={onChangeFilter} />

      <ListContacts />
    </>
  );
};

Contacts.propTypes = {
  filter: PropTypes.string.isRequired,
  onAddContact: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Contacts;
