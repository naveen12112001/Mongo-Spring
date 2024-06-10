export default function DeleteDialogBox() {
    return(<div className="col-1">
    <button
      type="button"
      class="btn btn-outline-dark"
      data-bs-toggle="modal"
      data-bs-target="#userDeleteModal"
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
    <div
      class="modal fade"
      id="userDeleteModal"
      tabindex="-1"
      aria-labelledby="userDeleteModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog  modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="userDeleteModalLabel">
            Do you want to delete?
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          {/* <div class="modal-body">Do you want to delete?</div> */}
          <div class="modal-footer">
            
            <button type="button" class="btn btn-primary">
              Yes, Proceed
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              No,Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>)
  
}
