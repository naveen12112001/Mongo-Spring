import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { Field } from "formik";
import * as formik from "formik";
import * as yup from "yup";
import styles from "../Buttons/Button.module.css";
export default function AddDialogBox({ setShowToast, updateToastBody }) {
  const [show, setShow] = useState(false);
  const phoneRegExp =
    /^(\+\d{1,4}\s?)?((\(\d{2,3}\)\s?)|(\d{2,4}\s?))?\d{3,4}\s?\d{3,4}$/;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { Formik } = formik;
  const schema = yup.object().shape({
    username: yup.string().required("Required User Name").min(3, "Too Short"),
    userage: yup
      .number()
      .min(18, "You must be at least 18 years old")
      .max(80, "You must be at most 80 years old")
      .required("Required"),
    useremail: yup.string().email("Required email").required("Required Email"),
    userorders: yup
      .number()
      .min(0, "Atleast 1 or 0")
      .required("Required atleast 1 or 0"),
    userphone: yup
      .string()
      .matches(phoneRegExp, "Invalid Phone number!")
      .required("Required Phone Number"),
    userlocation: yup.string().required("Required Location"),
  });

  return (
    <div className="center-div">
      <Button variant="outline-light" onClick={handleShow}>
        Add Users
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className={styles.modalHeader} closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalHeader}>
          <Formik
            validationSchema={schema}
            onSubmit={async (values, { setSubmitting }) => {
              values.userage = parseInt(values.userage);
              values.userorders = parseInt(values.userorders);
              values.userphone = parseInt(values.userphone);
              try {
                const response = await axios.post(
                  `http://localhost:8989/addUser`,
                  values
                );
                console.log("User added successfully:", response.data);
                setShow(false);
                setShowToast(true);
                updateToastBody("User Added successfully!");
                setTimeout(() => {
                  setShowToast(false);
                }, 3000);
              } catch (error) {
                console.error("Error adding user:", error);
              }
              setSubmitting(false);
            }}
            initialValues={{
              username: "",
              useremail: "",
              userorders: "",
              userphone: "",
              userlocation: "",
              userage: "",
            }}
          >
            {({ handleSubmit, values, touched, errors }) => (
              <>
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group controlId="validationFormik01">
                    <Form.Label>User Name</Form.Label>
                    <Field
                      type="text"
                      name="username"
                      placeholder="User Name"
                      as={Form.Control}
                      isValid={touched.username && !errors.username}
                      isInvalid={touched.username && !!errors.username}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    {touched.username && errors.username && (
                      <Form.Control.Feedback type="invalid">
                        {errors.username}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                  <Form.Group controlId="validationFormik02">
                    <Form.Label>User Email</Form.Label>
                    <Field
                      type="email"
                      name="useremail"
                      placeholder="User Email"
                      as={Form.Control}
                      isValid={touched.useremail && !errors.useremail}
                      isInvalid={touched.useremail && !!errors.useremail}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    {touched.useremail && errors.useremail && (
                      <Form.Control.Feedback type="invalid">
                        {errors.useremail}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                  <Form.Group controlId="validationFormik03">
                    <Form.Label>User Phone</Form.Label>
                    <Field
                      type="number"
                      name="userphone"
                      placeholder="User Phone"
                      as={Form.Control}
                      isValid={touched.userphone && !errors.userphone}
                      isInvalid={touched.userphone && !!errors.userphone}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    {touched.userphone && errors.userphone && (
                      <Form.Control.Feedback type="invalid">
                        {errors.userphone}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                  <Form.Group controlId="validationFormik04">
                    <Form.Label>User Age</Form.Label>
                    <Field
                      type="number"
                      name="userage"
                      placeholder="User Age"
                      as={Form.Control}
                      isValid={touched.userage && !errors.userage}
                      isInvalid={touched.userage && !!errors.userage}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    {touched.userage && errors.userage && (
                      <Form.Control.Feedback type="invalid">
                        {errors.userage}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                  <Form.Group controlId="validationFormik05">
                    <Form.Label>User Orders</Form.Label>
                    <Field
                      type="number"
                      name="userorders"
                      placeholder="User Orders"
                      as={Form.Control}
                      isValid={touched.userorders && !errors.userorders}
                      isInvalid={touched.userorders && !!errors.userorders}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    {touched.userorders && errors.userorders && (
                      <Form.Control.Feedback type="invalid">
                        {errors.userorders}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                  <Form.Group controlId="validationFormik06">
                    <Form.Label>User Location</Form.Label>
                    <Field
                      type="text"
                      name="userlocation"
                      placeholder="User Location"
                      as={Form.Control}
                      isValid={touched.userlocation && !errors.userlocation}
                      isInvalid={touched.userlocation && !!errors.userlocation}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    {touched.userlocation && errors.userlocation && (
                      <Form.Control.Feedback type="invalid">
                        {errors.userlocation}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Modal.Footer>
                    <Button variant="outline-dark" type="submit">
                      Add!
                    </Button>
                    <Button variant="outline-dark" onClick={handleClose}>
                      Cancel
                    </Button>
                  </Modal.Footer>
                </Form>
              </>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
}
