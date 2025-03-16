import React, { use, useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { li } from "framer-motion/client";

export default function DebounceList() {
  const [serachValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const debounceTerm = useDebounce(serachValue, 500);
  //get users data from api
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  //for dobounce search

  useEffect(() => {
    if (debounceTerm) {
      const filteredUsers = users.filter((user) => {
        return user.name.toLowerCase().includes(debounceTerm.toLowerCase());
      });
      setFilteredUsers(filteredUsers);
    } else {
      setFilteredUsers(users);
    }
  }, [debounceTerm, users]);
  return (
    <div>
      <input
        type="text"
        value={serachValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {filteredUsers.length > 0 ? (
        <>
          <ul>
            {filteredUsers.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <>
          {" "}
          <p>not found</p>
        </>
      )}
    </div>
  );
}
