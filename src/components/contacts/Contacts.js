import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import { getContacts } from "../../actions/contactActions";
import PropTypes from "prop-types";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    const { contacts } = this.props;

    return (
      <div className="all-contacts-container">
        <h1>
          <span>Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
