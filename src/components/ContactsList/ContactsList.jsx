import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import {
  Button,
  Contact,
  ContactList,
  ContactNumber,
} from './ContactList.styled.js';
import { deleteContact } from '../../redux/contacts/operations';
import {
  selectAllContacts,
  selectFilter,
} from '../../redux/contacts/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
  
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ContactList>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id}>
          {name}:
          <div>
          <ContactNumber type="number">{number}</ContactNumber>
          <Button
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </Button>
        </div>
        </Contact>
      ))}
    </ContactList>
  );
};


ContactsList.propTypes = {
  filter: PropTypes.string.isRequired,
   contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool,
    })
  ),
};
