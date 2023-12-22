import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Customer } from "../../store/actions";
import { Spinner } from "./../../components";
import {
  TiArrowUnsorted,
  TiArrowSortedUp,
  TiArrowSortedDown,
} from "react-icons/ti";
import DeleteModal from "../../modals/deletemodal";
import { MdOutlineEditNote } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import AddModal from "../../modals/addmodal";
import Plus from "../../images/plus-icon.svg";

const Portal = () => {
  const [deleteModal, setDeleteModal] = useState({ open: false, id: null });
  const [addModal, setAddModal] = useState({ open: false, customer: {} });
  const [sortDir, setSortDir] = useState({ dir: null, tab: null });
  const [visibleItems, setVisibleItems] = useState(5);

  const dispatch = useDispatch();

  const { getInvoice } = useSelector((state) => state.customer);

  useEffect(() => {
    setnewData(getInvoice);
  }, [getInvoice]);

  const [newData, setnewData] = useState(
    Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`)
  );

  const handleViewMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  const handleViewLess = () => {
    setVisibleItems((prevVisibleItems) => Math.max(prevVisibleItems - 5, 0));
  };

  const sort = (dir, tab) => {
    if (dir === "asc") {
      getInvoice?.data?.invoices?.sort((a, b) =>
        a[tab].toString().toLowerCase() < b[tab].toString().toLowerCase()
          ? -1
          : 1
      );
    } else {
      getInvoice?.data?.invoices?.sort((a, b) =>
        a[tab].toString().toLowerCase() > b[tab].toString().toLowerCase()
          ? -1
          : 1
      );
    }
    setSortDir({ dir, tab });
  };

  useEffect(() => {
    dispatch(Customer.getCustomers());
  }, []);

  return (
    <div className="h-screen xs:px-5 large:px-12 py-12">
      <button
        className="text-white flex sm:mx-2 items-center xs:px-5 tablet:px-7 py-5 rounded-lg bg-gradient-to-r from-silverTree to-sherphaBlue"
        onClick={() => setAddModal({ open: true })}
      >
        <img src={Plus} width={14} loading="lazy" alt="Add" />
        <span className="font-base tablet:text-lg font-medium xs:pl-4 tablet:pl-6">
          Add New Customer
        </span>
      </button>
      {getInvoice?.loading ? (
        <div className="flex items-center justify-center h-full">
          <Spinner />
        </div>
      ) : (
        <>
          <table className="xs:hidden desktop:table table-auto w-full mt-6 border-separate border-spacing-y-4">
            <thead className="bg-[#c5e3d5]">
              <tr>
                <th className="p-4 rounded-s-lg">
                  <div
                    className="flex items-center text-primaryGreen text-base cursor-pointer"
                    onClick={() =>
                      sort(
                        sortDir.dir === "asc"
                          ? "desc"
                          : sortDir.dir === "desc"
                          ? "asc"
                          : "asc",
                        "id"
                      )
                    }
                  >
                    <p className="pr-2">Invoice Id</p>
                    {sortDir.tab === "id" ? (
                      sortDir.dir === "asc" ? (
                        <TiArrowSortedUp size={16} />
                      ) : sortDir.dir === "desc" ? (
                        <TiArrowSortedDown size={16} />
                      ) : (
                        <TiArrowUnsorted size={16} />
                      )
                    ) : (
                      <TiArrowUnsorted size={16} />
                    )}
                  </div>
                </th>
                <th className="p-4">
                  <div
                    className="flex items-center text-primaryGreen text-base cursor-pointer"
                    onClick={() =>
                      sort(
                        sortDir.dir === "asc"
                          ? "desc"
                          : sortDir.dir === "desc"
                          ? "asc"
                          : "asc",
                        "customerName"
                      )
                    }
                  >
                    <p className="pr-2">Customer Name </p>
                    {sortDir.tab === "id" ? (
                      sortDir.dir === "asc" ? (
                        <TiArrowSortedUp size={16} />
                      ) : sortDir.dir === "desc" ? (
                        <TiArrowSortedDown size={16} />
                      ) : (
                        <TiArrowUnsorted size={16} />
                      )
                    ) : (
                      <TiArrowUnsorted size={16} />
                    )}
                  </div>
                </th>
                <th className="p-4">
                  <div
                    className="flex items-center text-primaryGreen text-base cursor-pointer"
                    onClick={() =>
                      sort(
                        sortDir.dir === "asc"
                          ? "desc"
                          : sortDir.dir === "desc"
                          ? "asc"
                          : "asc",
                        "dueDate"
                      )
                    }
                  >
                    <p className="pr-2">Date</p>
                    {sortDir.tab === "first_name" ? (
                      sortDir.dir === "asc" ? (
                        <TiArrowSortedUp size={16} />
                      ) : sortDir.dir === "desc" ? (
                        <TiArrowSortedDown size={16} />
                      ) : (
                        <TiArrowUnsorted size={16} />
                      )
                    ) : (
                      <TiArrowUnsorted size={16} />
                    )}
                  </div>
                </th>
                <th className="p-4">
                  <div
                    className="flex items-center text-primaryGreen text-base cursor-pointer"
                    onClick={() =>
                      sort(
                        sortDir.dir === "asc"
                          ? "desc"
                          : sortDir.dir === "desc"
                          ? "asc"
                          : "asc",
                        "amount"
                      )
                    }
                  >
                    <p className="pr-2">Amount</p>
                    {sortDir.tab === "email" ? (
                      sortDir.dir === "asc" ? (
                        <TiArrowSortedUp size={16} />
                      ) : sortDir.dir === "desc" ? (
                        <TiArrowSortedDown size={16} />
                      ) : (
                        <TiArrowUnsorted size={16} />
                      )
                    ) : (
                      <TiArrowUnsorted size={16} />
                    )}
                  </div>
                </th>
                <th className="py-4 rounded-e-lg"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {newData?.data?.invoices
                ?.slice(0, visibleItems)
                .map((item, index) => (
                  <tr
                    key={`customers-${index}`}
                    className="shadow-5xl rounded-s-lg rounded-e-lg"
                  >
                    <td className="text-left p-4 text-sm text-gray-500">
                      {item?.id}
                    </td>
                    <td className="text-left p-4 text-sm text-gray-500">
                      {item?.customerName}
                    </td>
                    <td className="text-left p-4 text-sm text-gray-500">
                      {item?.dueDate}
                    </td>
                    <td className="text-left p-4 text-sm text-gray-500">
                      PKR: {item?.amount}
                    </td>
                    <td className="text-center flex justify-center align-center p-4">
                      <MdOutlineEditNote
                        className="mx-3 cursor-pointer hover:text-green-700"
                        size={24}
                        onClick={() =>
                          setAddModal({ open: true, customer: item })
                        }
                      />
                      <MdOutlineDeleteOutline
                        className="mx-3 cursor-pointer hover:text-red-700"
                        size={24}
                        onClick={() => {
                          setDeleteModal({ open: true, id: item?.id });
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="justify-end hidden font-medium pb-8 lg:flex">
            <button onClick={handleViewMore} className="cursor-pointer mr-3">
              Show More
            </button>
            {visibleItems > 5 && (
              <button onClick={handleViewLess} className="cursor-pointer mr-3">View Less</button>
            )}
          </div>
          <div className="w-full flex flex-row flex-wrap justify-evenly">
            {newData?.data?.invoices?.map((customer) => (
            <div className="w-full sm:w-1/2 sm:px-2 md:w-1/2">
                <div key={customer?.id} className="my-6 desktop:hidden shadow-5xl rounded-lg">
                  <div className="flex rounded-ss-lg">
                    <div className="flex justify-end pr-4 h-auto py-2 xs:w-20 phone:w-36 rounded-ss-lg">
                      <span className="self-center text-center text-sm">Invoice Id:</span>
                    </div>
                    <div className="p-2 flex-1">
                      <span className="text-sm align-middle text-gray-500">{customer?.ID}</span>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex justify-end pr-4 h-auto py-2 xs:w-20 phone:w-36">
                      <span className="self-center text-center text-sm">Customer Name:</span>
                    </div>
                    <div className="p-2 flex-1">
                      <span className="text-sm align-middle text-gray-500">
                        {customer?.customerName}
                      </span>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex justify-end pr-4 h-auto py-2 xs:w-20 phone:w-36">
                      <span className="self-center text-center text-sm">Date:</span>
                    </div>
                    <div className="p-2 flex-1">
                      <span className="text-sm align-middle text-gray-500">{customer?.dueDate}</span>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex justify-end pr-4 h-auto py-2 xs:w-20 phone:w-36">
                      <span className="self-center text-center text-sm">Amount:</span>
                    </div>
                    <div className="p-2 flex-1">
                      <span className="text-sm align-middle text-gray-500">{customer?.amount}</span>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex justify-end pr-4 h-auto py-2 xs:w-20 phone:w-36 rounded-es-lg">
                      <span className="self-center text-center"></span>
                    </div>
                    <div className="p-2 flex-1 flex justify-end">
                      <MdOutlineEditNote
                        className="mx-3 cursor-pointer text-green-700"
                        size={24}
                        onClick={() =>
                          setAddModal({ open: true, customer: customer })
                        }
                      />
                      <MdOutlineDeleteOutline
                        className="mx-3 cursor-pointer text-red-700"
                        size={24}
                        onClick={() => {
                          setDeleteModal({ open: true, id: customer?.id });
                        }}
                      />
                    </div>
                  </div>
                </div>
            </div>
              ))}
          </div>
        </>
      )}
      <DeleteModal
        isOpen={deleteModal.open}
        customerId={deleteModal.id}
        setIsOpen={setDeleteModal}
      />
      <AddModal
        isOpen={addModal.open}
        setIsOpen={setAddModal}
        data={addModal.customer}
      />
    </div>
  );
};

export default Portal;

