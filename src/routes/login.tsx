import { createFileRoute, useNavigate } from "@tanstack/react-router";
import useAuth from "../store/auth";
import { useEffect } from "react";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const token = useAuth((state) => state.token);
  useEffect(() => {
    if (token) {
      navigate({ to: "/about" });
    }
  }, [token]);
  const setToken = useAuth((state) => state.setToken);

  const login = () => {
    setToken("temp token");
    navigate({ to: "/about" });
  };
  return (
    <div className="p-2">
      <h3>Login Page</h3>
      <button onClick={login}>Login</button>
    </div>
  );
}
