import React, { Component } from "react";
import PropTypes from "prop-types";

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  state = {
    query: ""
  };

  clearQuery = () => {
    this.updateQuery("");
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }));
  };
  render() {
    const { query } = this.state;
    const { contacts, onDelete, onNavigate } = this.props;

    const showingContacts =
      query === ""
        ? contacts
        : contacts.filter(c =>
            c.name.toLowerCase().includes(query.toLowerCase())
          );

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="Search-contacts"
            type="text"
            placeholder="your text here"
            value={query}
            onChange={event => this.updateQuery(event.target.value)}
          />
          <a href="#create" onClick={onNavigate} className="add-contact">
            Add Contact
          </a>
        </div>
        {showingContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>
              Showing {showingContacts.length} of {contacts.length}{" "}
            </span>
            <button onClick={this.clearQuery}>SHOW ALL</button>
          </div>
        )}

        <ol className="contact-list">
          {showingContacts.map(contact => (
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
                onClick={() => onDelete(contact)}
              />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListContacts;
