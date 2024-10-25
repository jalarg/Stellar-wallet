import { logout } from "../../GlobalRedux/store";
import { message } from "antd";

function handleLogout(dispatch: any) {
  try {
    dispatch(logout());
    message.success("Logout Successful");
  } catch (error) {
    console.log("Error:", error);
  }
}

export default handleLogout;
