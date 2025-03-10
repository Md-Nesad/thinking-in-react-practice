import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const debounceSearchTerm = useDebounce(searchTerm, 500);

  //fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchUsers();
  });

  //filter users
  useEffect(() => {
    if (debounceSearchTerm) {
      const filteredUsers = users.filter((user) => {
        return user.name
          .toLowerCase()
          .includes(debounceSearchTerm.toLowerCase());
      });
      setFilteredUsers(filteredUsers);
    } else {
      setFilteredUsers(users);
    }
  }, [debounceSearchTerm, users]);
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
