import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../context/GlobalStateContext";

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser }: any = useContext(GlobalStateContext);

  const loggedIn = () => {
    localStorage.setItem("token", "token_1234_blabla");
    setUser({ loggedIn: true });
    navigate("/");
  };

  useEffect(() => {
    if (user.loggedIn) {
      navigate(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.loggedIn]);

  return (
    <>
      <div>Login</div>
      <button onClick={() => loggedIn()}>Click to login</button>
    </>
  );
};

export default Login;
