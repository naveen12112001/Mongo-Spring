import "./ReadDialogBox.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import styles from "../Buttons/Button.module.css";

export default function ReadDialogBox({ readrd }) {
  const [users, setUsers] = useState();
  const [show, setShow] = useState(false);
  const baseURL = `http://localhost:8989/findUserById/${readrd}`;

  const fetchData = async () => {
    try {
      const response = await axios.get(baseURL);
      setUsers(response.data);
    } catch {
      console.log("errorrr!");
    }
  };

  useEffect(() => {
    fetchData();
  }, [readrd]);

  return (
    <div className="col-1">
      <Button variant="outline-dark" onClick={() => setShow(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
        </svg>
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header className={styles.modalHeader} closeButton>
          <Modal.Title>User Information:-</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              value={users && users.username}
              style={{ backgroundColor: "black", color: "white" }}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Email</Form.Label>
            <Form.Control
              type="email"
              value={users && users.useremail}
              style={{ backgroundColor: "black", color: "white" }}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>User Age</Form.Label>
            <Form.Control
              type="number"
              value={users && users.userage}
              style={{ backgroundColor: "black", color: "white" }}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>User Phone</Form.Label>
            <Form.Control
              type="number"
              value={users && users.userphone}
              style={{ backgroundColor: "black", color: "white" }}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicOrders">
            <Form.Label>User Orders</Form.Label>
            <Form.Control
              type="number"
              value={users && users.userorders}
              style={{ backgroundColor: "black", color: "white" }}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLocation">
            <Form.Label>User Location</Form.Label>
            <Form.Control
              type="text"
              value={users && users.userlocation}
              style={{ backgroundColor: "black", color: "white" }}
              disabled
            />
          </Form.Group>
        </Modal.Body>
      </Modal>
    </div>
  );
}

// import "./ReadDialogBox.css";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ReadModal from "./ReadModal";

// export default function ReadDialogBox({ readrd }) {
//   const [users, setUsers] = useState();
//   const baseURL = `http://localhost:8989/findUserById/${readrd}`;
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(baseURL);
//       setUsers(response.data);
//     } catch {
//       console.log("errorrr!");
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, [readrd]);

//   return (
//     <div className="col-1">
//       <button
//         id={readrd}
//         type="button"
//         className="btn btn-outline-dark"
//         data-bs-toggle="modal"
//         data-bs-target={`#readDialogModal${readrd}`}
//         onClick={fetchData}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           height="24px"
//           viewBox="0 -960 960 960"
//           width="24px"
//           fill="#000000"
//         >
//           <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
//         </svg>
//       </button>
//      <ReadModal users={users} readbuttonId={readrd}/>
//     </div>
//   );
// }
