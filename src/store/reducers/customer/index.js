import ActionTypes from "../../actionTypes";

const INITIAL_STATE = {
  getInvoices: {
    loading: false,
    data: JSON.parse(localStorage.getItem("invoices")),
    error: null,
  },
};

const CustomerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_INVOICE_REQUEST:
      return {
        ...state,
        getInvoice: {
          ...state.getInvoices,
          loading: true,
        },
      };

    case ActionTypes.GET_INVOICE_SUCCESS:
      return {
        ...state,
        getInvoice: {
          ...state.getInvoices,
          loading: false,
          data: action.payload,
        },
      };

    case ActionTypes.GET_INVOICE_FAIL:
      return {
        ...state,
        getInvoice: {
          ...state.getInvoices,
          loading: false,
          error: action.payload,
        },
      };

    case ActionTypes.DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        getInvoice: {
          ...state.getInvoices,
          data: action.payload,
        },
      };

    case ActionTypes.DELETE_CUSTOMER_FAIL:
      return {
        ...state,
        getInvoice: {
          ...state.getInvoices,
          error: action.payload,
        },
      };

    case ActionTypes.ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        getInvoice: {
          ...state.getInvoices,
          data: action.payload,
        },
      };

    case ActionTypes.ADD_CUSTOMER_FAIL:
      return {
        ...state,
        getInvoice: {
          ...state.getInvoices,
          error: action.payload,
        },
      };

    case ActionTypes.EDIT_CUSTOMER_SUCCESS:
      return {
        ...state,
        getInvoice: {
          ...state.getInvoices,
          data: action.payload,
        },
      };

    case ActionTypes.EDIT_CUSTOMER_FAIL:
      return {
        ...state,
        getInvoice: {
          ...state.getInvoices,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};

export default CustomerReducer;
