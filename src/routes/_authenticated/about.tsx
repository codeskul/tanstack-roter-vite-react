import { createFileRoute, useNavigate } from "@tanstack/react-router";
import useAuth from "../../store/auth";

export const Route = createFileRoute("/_authenticated/about")({
  component: About,
});

function About() {
  const navigate = useNavigate();
  const setToken = useAuth((state) => state.setToken);
  const logout = () => {
    setToken(null);
    navigate({ to: "/login" });
  };
  return (
    <div className="p-2">
      Hello from About!
      <button onClick={logout}>Logout</button>
    </div>
  );
}
