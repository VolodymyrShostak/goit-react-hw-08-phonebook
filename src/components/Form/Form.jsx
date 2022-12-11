import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operation';
import { Title, Button, Input } from './Form.styled.js';

export default function Form() {
  const dispatch = useDispatch();
    const contacts = useSelector(
      ({ phonebook: { contacts } }) => contacts.items
    );

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const nameForm = e.target.elements.name.value;
    const numberForm = e.target.elements.number.value;
    if (
      contacts.find(cont => cont.name.toLowerCase() === nameForm.toLowerCase())
    ) {
      return alert(`${nameForm} is already in contacts`);
    }
    dispatch(addContact({ id: nanoid(), name: nameForm, number: numberForm }));
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Title>Name</Title>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Title>Number</Title>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </form>
    </>
  );
}
