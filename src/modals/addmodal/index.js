import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Customer } from "../../store/actions";
import { isEmpty } from "./../../helpers";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    padding: "0px",
    borderRadius: "20px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};

const AddModal = ({ isOpen, setIsOpen, data }) => {
  const [form, setForm] = useState({
    data: {
      name: "",
      amount: "",
      date: "",
    },
  });

  const dispatch = useDispatch();

  const addCustomer = () => {
      dispatch(
        Customer.addCustomer({
          ID: Math.floor(Math.random() * 900) + 100,
          id: Math.floor(Math.random() * 900) + 100,
          amount: Number(form?.data?.amount),
          status: false,
          dueDate: "Apr 13, 2024 2:09 AM",
          customerName: form?.data?.name,
        })
      );
      setForm({
        ...form,
        data: { name: "", amount: "", date: "" },
        errors: {},
      });
      setIsOpen(false);
  };

  const editCustomer = () => {
      dispatch(
        Customer.editCustomer({
          ID: data?.ID,
          id: data?.id,
          amount: Number(form?.data?.amount),
          status: false,
          dueDate: "Apr 13, 2024 2:09 AM",
          customerName: form?.data?.name,
        })
      );
      setForm({
        ...form,
        data: { name: "", amount: "", date: "" },
        errors: {},
      });
      setIsOpen(false);
  };

  const changeValue = (key, value) => {
    setForm({ ...form, data: { ...form.data, [key]: value } });
  };

  useEffect(() => {
    if (!isEmpty(data)) {
      setForm({
        data: {
          name: `${data.customerName}`,
          amount: data.amount,
          date: data.date,
        },
      });
    }

    return () => {
      setForm({
        data: {
          name: "",
          amount: "",
          date: "",
        },
      });
    };
  }, [data]);

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div className="bg-[#FBFCFC] h-full">
        <div className="flex flex-col justify-center items-center pt-7 px-5 modal-bg">
          <AiOutlineClose
            size={20}
            className="ml-auto cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
          <span className="text-xl font-bold">
            {!isEmpty(data) ? "Edit Customer" : "Add New Customer"}
          </span>
        </div>
        <div className="flex flex-col pt-8 pb-12 px-7">
          <div className="mb-5">
            <input
              type="text"
              className={`text-sm w-full p-3 rounded-lg border ${
                form?.errors?.name ? "border-red-600" : "border-gray-300"
              }`}
              placeholder="Customer Name"
              value={form.data.name}
              onChange={(e) => changeValue("name", e.target.value)}
            />
            <p className="text-red-600 text-xs">{form?.errors?.name}</p>
          </div>
          <div>
            <input
              type="number"
              className={`text-sm p-3 w-full rounded-lg border ${
                form?.errors?.amount ? "border-red-600" : "border-gray-300"
              }`}
              placeholder="Amount"
              value={form?.data?.amount}
              onChange={(e) => changeValue("amount", e.target.value)}
            />
          </div>
          {isEmpty(data) ? (
            <button
              className="text-white py-4 font-medium rounded-lg bg-gradient-to-r from-silverTree to-sherphaBlue mt-8 text-base text-center"
              onClick={addCustomer}
            >
              ADD CUSTOMER
            </button>
          ) : (
            <button
              className="text-white py-4 font-medium rounded-lg bg-gradient-to-r from-silverTree to-sherphaBlue mt-8 text-base text-center"
              onClick={editCustomer}
            >
              EDIT CUSTOMER
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default AddModal;
