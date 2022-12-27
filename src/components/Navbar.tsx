import { Menu } from "antd";
import { Row } from "antd/es/grid";
import { Header } from "antd/es/layout/layout";
import { MenuProps } from "antd/es/menu";
import { useTypedDispatch, useTypedSelector } from "../hooks/useTypedSelector";
import { AuthActionCreators } from "../store/redusers/auth/action-creators";

const Navbar = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const { user } = useTypedSelector((state) => state.auth);
  const dispatch = useTypedDispatch();
  const authItems: MenuProps["items"] = [
    {
      label: "exit",
      key: "exit",
      onClick: (e) => {
        dispatch(AuthActionCreators.logout());
      },
    },
  ];
  const guestItems: MenuProps["items"] = [
    {
      label: "login",
      key: "login",
      onClick: (e) => {
        console.log("login");
      },
    },
  ];

  return (
    <Header style={{ color: "white", background: "#434343" }}>
      <Row justify={"end"}>
        {isAuth ? (
          <>
            <div>{user.username}</div>
            <Menu
              style={{ background: "#434343" }}
              theme="dark"
              mode="horizontal"
              selectable={false}
              items={authItems}
            ></Menu>
          </>
        ) : (
          <Menu
            style={{ background: "#434343" }}
            theme="dark"
            mode="horizontal"
            selectable={false}
            items={guestItems}
          ></Menu>
        )}
      </Row>
    </Header>
  );
};

export default Navbar;
