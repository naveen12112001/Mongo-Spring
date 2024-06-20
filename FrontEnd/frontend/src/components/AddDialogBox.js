import { useRef } from "react";
import axios from "axios";
import { Button, Modal, Form, Toast } from "react-bootstrap";
import { useState } from "react";
export default function AddDialogBox({setShowToast,updateToastBody}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const updatedNameRef = useRef();
  const updatedAgeRef = useRef();
  const updatedPhoneRef = useRef();
  const updatedLocationRef = useRef();
  const updatedOrdersRef = useRef();
  const updatedEmailRef = useRef();

  async function handleAddSubmit() {
    const updatedObject = {
      username: updatedNameRef.current.value,
      userage: updatedAgeRef.current.value,
      useremail: updatedEmailRef.current.value,
      userorders: updatedOrdersRef.current.value,
      userphone: updatedPhoneRef.current.value,
      userlocation: updatedLocationRef.current.value,
    };

    try {
      const response = await axios.post(
        `http://localhost:8989/addUser`,
        updatedObject
      );
      updatedNameRef.current.value = "";
      updatedEmailRef.current.value = "";
      updatedAgeRef.current.value = "";
      updatedLocationRef.current.value = "";
      updatedOrdersRef.current.value = "";
      updatedPhoneRef.current.value = "";
    } catch (error) {
      console.error(error);
    }
    setShow(false);
    setShowToast(true);
    updateToastBody("User Added successfully!");
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  return (
    <div className="center-div">
      <Button variant="outline-light" onClick={handleShow}>
        Add Users
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Add User</Modal.Title>
          <Button
            variant="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></Button>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="User Name"
              ref={updatedNameRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>User Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="User Email"
              ref={updatedEmailRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>User Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="User Phone"
              ref={updatedPhoneRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>User Age</Form.Label>
            <Form.Control
              type="text"
              placeholder="User Age"
              ref={updatedAgeRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>User Orders</Form.Label>
            <Form.Control
              type="text"
              placeholder="User Orders"
              ref={updatedOrdersRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>User Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="User Location"
              ref={updatedLocationRef}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAddSubmit}>
            Add!
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
