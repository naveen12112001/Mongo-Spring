import AddDialogBox from "./Buttons/AddDialogBox";
import React, { useEffect, useState } from "react";
import "./AllUsers.css";
import DeleteDialogBox from "./Buttons/DeleteDialogBox";
import ReadDialogBox from "./Buttons/ReadDialogBox";
import UpdateDialogBox from "./Buttons/UpdateDialogBox";
import axios from "axios";
import { Toast, ToastContainer } from "react-bootstrap";
export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastBody, setToastBody] = useState("");
  const handleCloseToast = () => setShowToast(false);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:8989/findAllUsers");
    setUsers(response.data);
  };
  function updateToastBody(newBody) {
    setToastBody(newBody);
  }
  fetchData();
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <h1 className="white">All Users</h1>
      <AddDialogBox
        setShowToast={setShowToast}
        updateToastBody={updateToastBody}
      />
      <div className="row space">
        {users.map((user) => (
          <div className="listItem col-3 m-2" key={user._id}>
            <div>{user.username}</div>
            <div className="row">
              <div className="col">
                <ReadDialogBox readrd={user._id} />
              </div>
              <div className="col">
                <UpdateDialogBox
                  updaterd={user._id}
                  setShowToast={setShowToast}
                  updateToastBody={updateToastBody}
                />
              </div>
              <div className="col">
                <DeleteDialogBox
                  deleterd={user._id}
                  refreshUsers={fetchData}
                  setShowToast={setShowToast}
                  updateToastBody={updateToastBody}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer position="bottom-end">
        <Toast className="mainToast" show={showToast} onClose={handleCloseToast}>
          <Toast.Header>
            <strong className="me-auto">Users</strong>
          </Toast.Header>
          <Toast.Body>{toastBody}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
