export default function AddDialogBox() {
  return (
    <div className="center-div">
      <button
        type="button"
        className="btn btn-outline-light"
        data-bs-toggle="modal"
        data-bs-target="#addDialogModal"
      >
        Add Users
      </button>
      <div
        className="modal fade"
        id="addDialogModal"
        tabindex="-1"
        aria-labelledby="addDialogModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addDialogModalLabel">
                Add User
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div class="input-group">
                <span class="input-group-text">User Name</span>
                <input
                  type="text"
                  class="form-control"
                  id="UserName"
                  placeholder="User Name"
                ></input>
              </div>
              <div class="input-group">
                <span class="input-group-text">User Email</span>
                <input
                  type="text"
                  class="form-control"
                  id="UserEmail"
                  placeholder="User Email"
                ></input>
              </div>
              <div class="input-group">
                <span class="input-group-text">User Phone</span>
                <input
                  type="text"
                  class="form-control"
                  id="UserPhone"
                  placeholder="User Phone"
                ></input>
              </div>
              <div class="input-group">
                <span class="input-group-text">User Age</span>
                <input
                  type="text"
                  class="form-control"
                  id="UserAge"
                  placeholder="User Age"
                ></input>
              </div>
              <div class="input-group">
                <span class="input-group-text">User Orders</span>
                <input
                  type="text"
                  class="form-control"
                  id="UserOrders"
                  placeholder="User Orders"
                ></input>
              </div>
              <div class="input-group">
                <span class="input-group-text">User Location</span>
                <input
                  type="text"
                  class="form-control"
                  id="UserLocation"
                  placeholder="User Location"
                ></input>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
