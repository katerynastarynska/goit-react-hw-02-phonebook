import { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    // name: '',
    // number: '',
  };

  addContact = data => {
    console.log('....>>>> data >>>>', data);

    const contact = {
      name: data.name,
      number: data.number,
      id: data.id,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
     return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        {this.state.contacts.length >= 1 && (
          <ContactList contacts={this.state.contacts} />
        )}
      </div>
    );
  }
}

export default App;
