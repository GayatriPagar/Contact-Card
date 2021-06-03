
import React from "react";
import "./styles.css";
import ContactCard from "./ContactCard";
import { useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);

fetch("https://randomuser.me/api/?results=3")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setContacts(data.results);
  });

  return (
    <div>
    <div className="ContactCard"/>
      {contacts.map(contact => (
        <ContactCard
          avatar={contact.picture.large}
          name={contact.name.first + " " + contact.name.last}
          email={contact.email}
          age={contact.dob.age}
        />
      ))}
    </div>
  );
};

export default App;
