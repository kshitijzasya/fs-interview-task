import React, { useEffect, useState } from "react";
import httpService from "../lib/httpService";

import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

function List() {
  const { user, logout } = useAuthContext();
  const [listData, setListData] = useState([]);

  async function fetchUserList() {
    await httpService
      .get("users")
      .then((res) => {
        setListData(res.data.data);
      })
      .catch((error) => {
        console.error(error.response.data.error);
      });
  }

  useEffect(() => {
    fetchUserList();
  }, []);

  async function deleteUser(userId) {
    await httpService
      .delete(`user/${userId}`)
      .then(() => {
        toast.success("Deleted succesfull !");
        fetchUserList();
      })
      .catch(() => {
        toast.error("Something went Wrong");
      });
  }

  const DeleteIcon = () => (
    <svg
      fill="#FA5252"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="15px"
      height="15px"
    >
      <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z" />
    </svg>
  );

  return (
    <section className="bg-gray-50 dark:bg-gray-900 relative">
      {user && (
        <button
          type="button"
          className="w-36 top-3 right-3 absolute  text-white bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 rounded"
          onClick={() => logout()}
        >
          Logout
        </button>
      )}

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md p-4 dark:bg-gray-800 dark:border-gray-700 ">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            UserList:
          </h2>
          {listData.length > 0 && (
            <ul className="max-w-md space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400 ">
              {listData
                .filter((i) => i.role !== "admin")
                .map((list, index) => (
                  <li
                    key={index + "list"}
                    className="flex justify-between items-center"
                  >
                    <span>{list.email}</span>
                    {user && user.role === "admin" && (
                      <span
                        className="cursor-pointer"
                        onClick={() => deleteUser(list._id)}
                      >
                        <DeleteIcon />
                      </span>
                    )}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default List;
