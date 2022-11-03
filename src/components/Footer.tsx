import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../context/GlobalStateContext";

const Footer = () => {
  const navigate = useNavigate();
  const { setUser }: any = useContext(GlobalStateContext);

  const loggedout = () => {
    localStorage.removeItem("token");
    setUser({ loggedIn: false });
    navigate("/login");
  };

  return (
    <>
      <div>Footer</div>
      <a onClick={() => loggedout()}>logout</a>
    </>
  );
};

export default Footer;
