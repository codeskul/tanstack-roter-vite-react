import "./App.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import useAuth from "./store/auth";

// Create a new router instance
const router = createRouter({
  routeTree,
  context: { token: null },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const token = useAuth((state) => state.token);

  return <RouterProvider router={router} context={{ token }} />;
}

export default App;
