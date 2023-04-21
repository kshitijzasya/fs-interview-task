import React, { useEffect, useState } from "react";
import httpService from "../lib/httpService";

function List() {
  const [listData, setListData] = useState([]);
  const [error, setError] = useState("");
  async function fetchUserList() {
    await httpService
      .get("users")
      .then((res) => {
        setListData(res.data.data);
        setError("");
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  }

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md p-4 dark:bg-gray-800 dark:border-gray-700 ">
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            {error ?? "UserList:"}
          </h2>
          {listData.length > 0 && (
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              {listData.map((user, index) => (
                <li key={index + "list"}>{user.email}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default List;
