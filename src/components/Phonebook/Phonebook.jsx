import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './../Form/Form';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';
import { Wrapper, Title, Subtitle } from './Phonebook.styled.js';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/contacts/operations';
import { selectAllContacts } from '../../redux/contacts/selectors';

export default function Phonebook() {
  const contacts = useSelector(selectAllContacts);
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const onChangeFilter = e => {
    setFilter(e.target.value);
  };

  const onAddContact = ({ name }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContact());
  };

  const onDeleteContact = contId => {
    dispatch(deleteContact(contId));
  };

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <Form onSubmit={onAddContact} />
      <Subtitle>Contacts</Subtitle>
      <Filter
        title="Find contacts by name"
        value={filter}
        onChange={onChangeFilter}
      />
      <ContactsList
        contacts={contacts}
        filter={filter}
        onDeleteContact={onDeleteContact}
      />
    </Wrapper>
  );
}
