import React, { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

export default function DebounceSearchApi() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const debounceTerm = useDebounce(searchTerm, 500);

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
    <div className="p-4">
      <input
        type="text"
        placeholder="Search users..."
        className="border p-2 rounded w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="mt-4 border rounded p-4">
        {filteredUsers.map((user) => (
          <li key={user.id} className="p-2 border-b">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
