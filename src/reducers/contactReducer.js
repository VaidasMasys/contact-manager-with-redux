import {
  GET_CONTACTS,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  ADD_CONTACT
} from "../actions/types";

const initState = {
  contacts: [],
  contact: {}
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id == action.payload.id ? (contact = action.payload) : contact
        )
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => {
          return contact.id !== action.payload;
        })
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
}
