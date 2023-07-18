import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";
function Users() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <main>
      <h2 className="text-center">Users</h2>

      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length
        ? user.users.map((user) => (
            <div className="d-flex border pt-3" key={user.id}>
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
          ))
        : null}
    </main>
  );
}

export default Users;
