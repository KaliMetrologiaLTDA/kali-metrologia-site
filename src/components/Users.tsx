// src/components/Users.tsx
import { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('http://localhost:3001/api/users');
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="my-8 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Usuários do backend:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} className="py-1 border-b">{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
