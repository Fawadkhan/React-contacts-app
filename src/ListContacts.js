import React, { Component } from "react";

const ListContacts = props => {
  return (
    <ol className="contact-list">
      {props.contacts.map(contact => (
        <li key={contact.id} className="contact-list-item">
          <div
            className="contact-avatar"
            style={{ background: `url(${contact.avatarURL})` }}
          />
          <div className="contact-details">
            <p>{contact.name}</p>
            <p>{contact.handle}</p>
          </div>
          <button
            className="contact-remove"
            onClick={() => props.onDelete(contact)}
          />
        </li>
      ))}
    </ol>
  );
};

export default ListContacts;
