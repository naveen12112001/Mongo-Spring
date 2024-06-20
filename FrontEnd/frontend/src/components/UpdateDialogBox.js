import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Toast, Modal, Button, Form, FloatingLabel } from "react-bootstrap";

export default function UpdateDialogBox({
  updaterd,
  setShowToast,
  updateToastBody,
}) {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState({
    username: "",
    useremail: "",
    userphone: "",
    userage: "",
    userorders: "",
    userlocation: "",
  });
  const baseURL = `http://localhost:8989/findUserById/${updaterd}`;
  const updatedNameRef = useRef();
  const updatedAgeRef = useRef();
  const updatedPhoneRef = useRef();
  const updatedLocationRef = useRef();
  const updatedOrdersRef = useRef();
  const updatedEmailRef = useRef();

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
  }, [updaterd]);
  const handleClose = () => setShow(false);
  const handleOpenModal = () => {
    setShow(true);
  };

  async function handleUpdateSubmit() {
    const updatedObject = {
      username: updatedNameRef.current.value,
      userage: updatedAgeRef.current.value,
      useremail: updatedEmailRef.current.value,
      userorders: updatedOrdersRef.current.value,
      userphone: updatedPhoneRef.current.value,
      userlocation: updatedLocationRef.current.value,
    };
    try {
      const response = await axios.patch(
        `http://localhost:8989/patchUser/${updaterd}`,
        updatedObject
      );
      console.log(updatedObject);
      setShow(false);
      setShowToast(true);
      updateToastBody("User updated successfully!");
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="col-1">
      <Button id={updaterd} variant="outline-dark" onClick={handleOpenModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
        </svg>
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="email"
              defaultValue={users.username}
              ref={updatedNameRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>User Email</Form.Label>
            <Form.Control
              type="email"
              defaultValue={users.useremail}
              ref={updatedEmailRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>User Age</Form.Label>
            <Form.Control
              type="email"
              defaultValue={users.userage}
              ref={updatedAgeRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>User Phone</Form.Label>
            <Form.Control
              type="email"
              defaultValue={users.userphone}
              ref={updatedPhoneRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>User Orders</Form.Label>
            <Form.Control
              type="email"
              defaultValue={users.userorders}
              ref={updatedOrdersRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>User Location</Form.Label>
            <Form.Control
              type="email"
              defaultValue={users.userlocation}
              ref={updatedLocationRef}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateSubmit}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
