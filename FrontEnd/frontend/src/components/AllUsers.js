import AddDialogBox from "./AddDialogBox";
import "./AllUsers.css";
import DeleteDialogBox from "./DeleteDialogBox";
import ReadDialogBox from "./ReadDialogBox";
import UpdateDialogBox from "./UpdateDialogBox";
let items = ["User 1", "User 2", "User 3","User 4","User 5"];
const listItems = items.map((item) => (
  <li>
    <div className="listItem row">
      <div className="col">
        <div>{item}</div>
      </div>
      <ReadDialogBox/>
      <UpdateDialogBox/>
      <DeleteDialogBox/>
    </div>
  </li>
));
export default function AllUsers() {
  return (
    <div className="container">
      <h1 className="white">All Users</h1>
      <AddDialogBox/>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}
