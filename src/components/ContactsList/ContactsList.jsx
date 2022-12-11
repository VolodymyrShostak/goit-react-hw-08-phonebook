import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Contact, ContactList } from './ContactList.styled.js';
import { deleteContact } from '../../redux/operation';

const ContactsList = () => {
  const dispatch = useDispatch();
 
  const contacts = useSelector(({ phonebook: { contacts } }) => contacts.items);
  const filter = useSelector(({ phonebook: { filter } }) => filter);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ContactList>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id}>
          {name}: {number}
          <Button
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </Button>
        </Contact>
      ))}
    </ContactList>
  );
};
export default ContactsList;

ContactsList.propTypes = {
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool,
    })
  ),
};
