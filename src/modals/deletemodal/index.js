import React from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Customer } from "../../store/actions";
import Bin from "../../images/bin.svg"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: "20px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};

const DeleteModal = ({ isOpen, setIsOpen, customerId }) => {
  const dispatch = useDispatch();

  const deleteCustomer = () => {
    dispatch(Customer.deleteCustomer(customerId));
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div className="flex flex-col justify-center items-center mb-4 desktopMini:mb-10">
        <AiOutlineClose
          size={16}
          className="self-end cursor-pointer mb-11"
          onClick={() => setIsOpen(false)}
        />
        <img src={Bin} alt="Bin" loading="lazy" width={60} />
        <p className="text-center text-2xl font-bold my-6">Are you sure?</p>
        <p className="text-center text-sm text-black">
          Do you really want to delete this customer?
        </p>
        <p className="text-center text-sm">This process can not be undone.</p>
        <div className="mt-6 desktopMini:mt-10 flex justify-evenly w-full">
          <button
            className="text-sm text-white bg-[#A5A5AF] font-medium py-3 px-8 desktopMini:px-10 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            className="text-sm text-white bg-red-700 font-medium py-3 px-8 desktopMini:px-10 rounded-lg"
            onClick={deleteCustomer}
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
