import axios from "axios";
import { Modal, Toast } from "react-bootstrap";
import { useRef, useState } from "react";

export default function DeleteDialogBox({ deleterd, refreshUsers,setShowToast,updateToastBody }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOpenModal = () => {
    setShow(true);
  };

  async function handledeleteButton() {
    try {
      const response = await axios.delete(
        `http://localhost:8989/deleteUser/${deleterd}`,
        deleterd
      );
      handleClose();
      setShowToast(true);
      updateToastBody("User deleted successfully!");
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      refreshUsers();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={handleShow}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
        </svg>
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Do you want to delete?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handledeleteButton}
          >
            Yes, Proceed
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClose}
          >
            No, Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


// import axios from "axios";
// import { Modal } from "bootstrap";
// import { useRef } from "react";
// import { Toast } from "bootstrap";
// import { useState, useEffect } from "react";
// export default function DeleteDialogBox({ deleterd, refreshUsers }) {
//   const deleteModalRef = useRef();
//   async function handledeleteButton() {
//     try {
//       const response = await axios.delete(
//         `http://localhost:8989/deleteUser/${deleterd}`,
//         deleterd
//       );
//       // let myModal = new Modal(deleteModalRef.current);
//       // myModal.hide();
//       let button = document.getElementById('deleteButton');
//       button.setAttribute('data-bs-dismiss', 'modal');
//       var toastEl = document.getElementById("liveToast");
//       var toast = new Toast(toastEl);
//       toast.show();
//       var toastBody = document.querySelector(".toast-body");
//       toastBody.textContent = response.data;
//       setTimeout(() => {
//         toast.hide();
//       }, 3000);
//       refreshUsers();
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <div className="col-1">
//       <button
//         type="button"
//         className="btn btn-outline-dark"
//         data-bs-toggle="modal"
//         data-bs-target={`#userDeleteModal${deleterd}`}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           height="24px"
//           viewBox="0 -960 960 960"
//           width="24px"
//           fill="#000000"
//         >
//           <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
//         </svg>
//       </button>
//       <div
//         className="modal fade delete"
//         id={`userDeleteModal${deleterd}`}
//         tabIndex="-1"
//         aria-labelledby="userDeleteModalLabel"
//         aria-hidden="true"
//         ref={deleteModalRef}
//       >
//         <div className="modal-dialog  modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h1 className="modal-title fs-5" id="userDeleteModalLabel">
//                 Do you want to delete?
//               </h1>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             {/* <div className="modal-body">Do you want to delete?</div> */}
//             <div className="modal-footer">
//               <button
//                 id="deleteButton"
//                 type="button"
//                 className="btn btn-primary"
//                 onClick={handledeleteButton}
//               >
//                 Yes, Proceed
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 No,Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }