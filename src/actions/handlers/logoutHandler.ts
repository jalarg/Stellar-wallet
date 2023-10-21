import { logout } from "../../GlobalRedux/store";
import { message } from "antd";

async function logoutHandler(dispatch: any) {
  try {
    dispatch(logout());
    message.success("Logout Successful");
  } catch (error) {
    console.log("Error:", error);
  }
}

export default logoutHandler;
