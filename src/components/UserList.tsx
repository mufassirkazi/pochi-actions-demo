import React, { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  // Bad: hardcoded API URL, no error handling, no loading state
  useEffect(() => {
    fetch("http://localhost:3000/getUser/1")
      .then((res) => res.json())
      .then((data) => setUsers([data]));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
