import axios from "axios";
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import styles from "../Buttons/Button.module.css";

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
  }, [updaterd, users]);
  const handleClose = () => setShow(false);
  const handleOpenModal = () => {
    setShow(true);
  };
  const phoneRegExp =
    /^(\+\d{1,4}\s?)?((\(\d{2,3}\)\s?)|(\d{2,4}\s?))?\d{3,4}\s?\d{3,4}$/;

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required User Name").min(3, "Too Short"),
    userage: Yup.number()
      .min(18, "You must be at least 18 years old")
      .max(80, "You must be at most 80 years old")
      .required("Required"),
    useremail: Yup.string().email("Required email").required("Required Email"),
    userorders: Yup.number()
      .min(0, "Atleast 1 or 0")
      .required("Required atleast 1 or 0"),
    userphone: Yup.string()
      .matches(phoneRegExp, "Invalid Phone number!")
      .required("Required Phone Number"),
    userlocation: Yup.string().required("Required Location"),
  });

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
        <Modal.Header className={styles.modalHeader} closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <Formik
            initialValues={users}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const response = await axios.patch(
                  `http://localhost:8989/patchUser/${updaterd}`,
                  values
                );
                console.log(values);
                setShow(false);
                setShowToast(true);
                updateToastBody("User updated successfully!");
                setTimeout(() => {
                  setShowToast(false);
                }, 3000);
              } catch (error) {
                console.error(error);
              }
              setSubmitting(false);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="mb-3">
                  <label>User Name</label>
                  <Field
                    name="username"
                    type="text"
                    style={{backgroundColor:'black',color:'white'}}
                    className={
                      "form-control" +
                      (errors.username && touched.username ? " is-invalid" : "")
                    }
                    
                  />
                  <div className="invalid-feedback">{errors.username}</div>
                </div>

                <div className="mb-3">
                  <label>User Email</label>
                  <Field
                    name="useremail"
                    type="text"
                    className={
                      "form-control" +
                      (errors.useremail && touched.useremail
                        ? " is-invalid"
                        : "")
                    }
                    style={{backgroundColor:'black',color:'white'}}
                  />
                  <div className="invalid-feedback">{errors.useremail}</div>
                </div>

                <div className="mb-3">
                  <label>User Age</label>
                  <Field
                    name="userage"
                    type="number"
                    className={
                      "form-control" +
                      (errors.userage && touched.userage ? " is-invalid" : "")
                    }
                    style={{backgroundColor:'black',color:'white'}}
                  />
                  <div className="invalid-feedback">{errors.userage}</div>
                </div>

                <div className="mb-3">
                  <label>User Phone</label>
                  <Field
                    name="userphone"
                    type="number"
                    className={
                      "form-control" +
                      (errors.userphone && touched.userphone
                        ? " is-invalid"
                        : "")
                    }
                    style={{backgroundColor:'black',color:'white'}}
                  />
                  <div className="invalid-feedback">{errors.userphone}</div>
                </div>

                <div className="mb-3">
                  <label>User Orders</label>
                  <Field
                    name="userorders"
                    type="number"
                    className={
                      "form-control" +
                      (errors.userorders && touched.userorders
                        ? " is-invalid"
                        : "")
                    }
                    style={{backgroundColor:'black',color:'white'}}
                  />
                  <div className="invalid-feedback">{errors.userorders}</div>
                </div>

                <div className="mb-3">
                  <label>User Location</label>
                  <Field
                    name="userlocation"
                    type="text"
                    className={
                      "form-control" +
                      (errors.userlocation && touched.userlocation
                        ? " is-invalid"
                        : "")
                    }
                    style={{backgroundColor:'black',color:'white'}}
                  />
                  <div className="invalid-feedback">{errors.userlocation}</div>
                </div>

                <Modal.Footer>
                  <Button variant="outline-dark" type="submit">
                    Save changes
                  </Button>
                  <Button variant="outline-dark" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
}
