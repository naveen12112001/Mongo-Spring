import "./ReadDialogBox.css";
import React, { useEffect, useState } from "react";

export default function ReadDialogBox(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8989/findUserById/${props.rd}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, [props.rd]);
  return (
    <div className="col-1">
      <button
        id="readButton"
        type="button"
        className="btn btn-outline-dark"
        data-bs-toggle="modal"
        data-bs-target="#readDialogModal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
        </svg>
      </button>
      <div
        className="modal fade"
        id="readDialogModal"
        tabindex="-1"
        aria-labelledby="readDialogModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="readDialogModalLabel">
                User Information:-
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
                  id="disabledUserName"
                  placeholder={users.username}
                  disabled
                ></input>
              </div>
              <div class="input-group">
                <span class="input-group-text">User Email</span>
                <input
                  type="text"
                  class="form-control"
                  id="disabledUserEmail"
                  placeholder={users.useremail}
                  disabled
                ></input>
              </div>
              <div class="input-group">
                <span class="input-group-text">User Phone</span>
                <input
                  type="text"
                  class="form-control"
                  id="disabledUserPhone"
                  placeholder={users.userphone}
                  disabled
                ></input>
              </div>
              <div class="input-group">
                <span class="input-group-text">User Age</span>
                <input
                  type="text"
                  class="form-control"
                  id="disabledUserAge"
                  placeholder={users.userage}
                  disabled
                ></input>
              </div>
              <div class="input-group">
                <span class="input-group-text">User Orders</span>
                <input
                  type="text"
                  class="form-control"
                  id="disabledUserOrders"
                  placeholder={users.userorders}
                  disabled
                ></input>
              </div>
              <div class="input-group">
                <span class="input-group-text">User Location</span>
                <input
                  type="text"
                  class="form-control"
                  id="disabledUserLocation"
                  placeholder={users.userlocation}
                  disabled
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
