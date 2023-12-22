import axios from "axios";
import ActionTypes from "../../actionTypes";

const getCustomers = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_INVOICE_REQUEST });
  try {
    const { data } = await axios.get(
      `https://retoolapi.dev/JVdOW6/data`
    );
    localStorage.setItem(
      "invoices",
      JSON.stringify({ invoices: data })
    );
    dispatch({
      type: ActionTypes.GET_INVOICE_SUCCESS,
      payload: { invoices: data },
    });
  } catch (err) {
    dispatch({ type: ActionTypes.GET_INVOICE_FAIL, payload: err.message });
  }
};

const deleteCustomer = (id) => async (dispatch) => {
  try {
    const data = JSON.parse(localStorage.getItem("invoices"));
    const newData = data?.invoices?.filter((x) => x.id !== id);
    localStorage.setItem(
      "invoices",
      JSON.stringify({ invoices: newData })
    );
    dispatch({
      type: ActionTypes.DELETE_CUSTOMER_SUCCESS,
      payload: { invoices: newData },
    });
  } catch (err) {
    dispatch({ type: ActionTypes.DELETE_CUSTOMER_FAIL, payload: err.message });
  }
};

const addCustomer = (customer) => async (dispatch) => {
  console.log("customer", customer)
  try {
    const data = JSON.parse(localStorage.getItem("invoices"));
    data?.invoices?.push(customer);
    localStorage.setItem(
      "invoices",
      JSON.stringify({ ...data })
    );
    dispatch({
      type: ActionTypes.ADD_CUSTOMER_SUCCESS,
      payload: { ...data },
    });
  } catch (err) {
    dispatch({ type: ActionTypes.ADD_CUSTOMER_FAIL, payload: err.message });
  }
};

const editCustomer = (updatedCustomer) => async (dispatch) => {
  try {
    const data = JSON.parse(localStorage.getItem("invoices"));
    const index = data?.invoices?.findIndex(
      (x) => x.id == updatedCustomer.id
    );
    data.invoices[index] = updatedCustomer;
    localStorage.setItem("invoices", JSON.stringify(data));
    dispatch({
      type: ActionTypes.EDIT_CUSTOMER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: ActionTypes.EDIT_CUSTOMER_FAIL, payload: err.message });
  }
};

export { getCustomers, deleteCustomer, addCustomer, editCustomer };
