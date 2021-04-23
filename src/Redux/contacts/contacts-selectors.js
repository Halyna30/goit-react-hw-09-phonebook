import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.contacts.filter;

export const allContacts = state => state.contacts.items;

export const getVisibleContacts = createSelector(
  [allContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
