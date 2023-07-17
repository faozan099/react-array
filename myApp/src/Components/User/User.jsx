import { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main>
      <h2 className="text-center">Users</h2>
      {users.map(user => (
        <div key={user.id} className="d-flex border pt-3">
          <div className="mb-3">
            <img className="mx-3" src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Users-Guest-icon.png" alt="" width={36} />
          </div>
          <div className="flex-coloumn mb-3">
            <div>
              <p className="px-3 fw-bolder">Name: {user.name}</p>
            </div>
            <div>
              <p className="px-3">Username: {user.username}</p>
            </div>
            <div>
              <p className="px-3">Email: {user.email}</p>
            </div>
            <div>
              <p className="px-3">Phone: {user.phone}</p>
            </div>
            <div>
              <p className="px-3">Website: {user.website}</p>
            </div>
            <div>
              <p className="px-3">Company: {user.company.name}</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Users;
