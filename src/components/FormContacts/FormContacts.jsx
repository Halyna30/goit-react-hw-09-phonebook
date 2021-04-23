import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import operations from '../../Redux/contacts/operations';
import { allContacts } from '../../Redux/contacts/contacts-selectors';

import s from './FormContacts.module.scss';

const FormContacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(allContacts);

  const dispatch = useDispatch();
  const onSubmit = user => dispatch(operations.addContact(user));

  const handleChangeName = ({ target }) => setName(target.value);
  const handleChangeNumber = ({ target }) => setNumber(target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (name === '') {
      return;
    }

    const isInContacts = items.find(
      item => item.name.toLowerCase() === name.toLowerCase(),
    );

    if (isInContacts) {
      alert(`${name} is already in contacts`);
    } else {
      onSubmit({ name, number });
    }

    reset();
  };

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          className={s.input}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.label}>
        Phone Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          className={s.input}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
      </label>
      <Button
        type="submit"
        disabled={name === '' || number === '' ? true : false}
        className={s.btn}
        variant="contained"
        color="primary"
      >
        Add contact
      </Button>
    </form>
  );
};

FormContacts.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormContacts;
