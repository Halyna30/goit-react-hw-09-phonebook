import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../Redux/contacts/contacts-selectors';
import { changeFilter } from '../../Redux/contacts/actions';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <div className="container">
      <label className="label">
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="input"
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
