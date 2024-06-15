import AddDialogBox from "./AddDialogBox";
import React, { useEffect, useState } from "react";
import "./AllUsers.css";
import DeleteDialogBox from "./DeleteDialogBox";
import ReadDialogBox from "./ReadDialogBox";
import UpdateDialogBox from "./UpdateDialogBox";
// const listItems = items.map((item) => (
//   <li>
//     <div className="listItem row">
//       <div className="col">
//         <div>{item}</div>
//         <div className="row">
//           <div className="col">{item}</div>
//           <div className="col">{item}</div>
//           <div className="col">{item}</div>
//         </div>
//       </div>
//       <ReadDialogBox />
//       <UpdateDialogBox />
//       <DeleteDialogBox />
//     </div>
//   </li>
// ));
export default function AllUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8989/findAllUsers")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
  return (
    <div className="container">
      <h1 className="white">All Users</h1>
      <AddDialogBox />
      <div className="row space">
        {users.map((user) => (
          <div className="listItem col-3 m-2" id={user._id}>
            <div>{user.username}</div>
            <div className="row">
              <div className="col">
                <ReadDialogBox rd={user._id}/>
              </div>
              <div className="col">
                <UpdateDialogBox />
              </div>
              <div className="col">
                <DeleteDialogBox />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
