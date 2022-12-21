import { Menu } from "antd";
import { Row } from "antd/es/grid";
import { Header } from "antd/es/layout/layout";
import { MenuProps } from "antd/es/menu";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Navbar = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const authItems: MenuProps["items"] = [
    {
      label: "name",
      key: "name",
      onClick: (e) => {
        console.log("name");
      },
    },
    {
      label: "logout",
      key: "logout",
      onClick: (e) => {
        console.log("logout");
      },
    },
  ];
  const guestItems: MenuProps["items"] = [
    {
      label: "name",
      key: "name",
      onClick: (e) => {
        console.log("name");
      },
    },
    {
      label: "login",
      key: "login",
      onClick: (e) => {
        console.log("login");
      },
    },
  ];

  return isAuth ? (
    <Header style={{ color: "white", background: "#434343" }}>
      <Row justify={"end"}>
        <Menu
          style={{ background: "#434343" }}
          theme="dark"
          mode="horizontal"
          selectable={false}
          items={authItems}
        ></Menu>
      </Row>
    </Header>
  ) : (
    <Header style={{ color: "white", background: "#434343" }}>
      <Row justify={"end"}>
        <Menu
          style={{ background: "#434343" }}
          theme="dark"
          mode="horizontal"
          selectable={false}
          items={guestItems}
        ></Menu>
      </Row>
    </Header>
  );
};

export default Navbar;
