import React, { useEffect } from "react";
import { useUserStore } from "../store/userStore.js";

export function Users() {
  const { users, loading, error, fetchUsers } = useUserStore();
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
