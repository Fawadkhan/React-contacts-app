import React, { Component } from "react";
RemoveContact = () => {
  console.log("pressed");
};

class ListContacts extends Component {
  render() {
    return (
      <ol className="contact-list">
        {this.props.contacts.map(contact => (
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
              onClick={this.props.RemoveContact}
            />
          </li>
        ))}
      </ol>
    );
  }
}

export default ListContacts;
