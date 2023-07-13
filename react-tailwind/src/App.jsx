import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Register from "./components/ComingSoon/Register";
import SignIn from "./components/ComingSoon/SignIn";
import Featurees from "./components/ComingSoon/Featurees";
import Team from "./components/ComingSoon/Team";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="team" element={<Team />} />
        <Route path="features" element={<Featurees />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;