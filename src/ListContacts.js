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

  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }));
  };
  render() {
    return (
      <div className="list-contacts">
        <div className="top-contacts-top">
          {JSON.stringify(this.state)}
          <input
            className="Search-contacts"
            type="text"
            placeholder="your text here"
            value={this.state.query}
            onChange={event => this.updateQuery(event.target.value)}
          />
        </div>
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
                onClick={() => this.props.onDelete(contact)}
              />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListContacts;
