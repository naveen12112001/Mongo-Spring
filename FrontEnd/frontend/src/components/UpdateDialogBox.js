export default function UpdateDialogBox() {
    return (
      <div className="col-1">
        <button
          type="button"
          className="btn btn-outline-dark"
          data-bs-toggle="modal"
          data-bs-target="#updateDialogModal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
        </button>
        <div
          className="modal fade"
          id="updateDialogModal"
          tabindex="-1"
          aria-labelledby="updateDialogModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="updateDialogModalLabel">
                  Update User
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
  