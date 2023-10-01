import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Categories from "./Categories";
import Category from "./Category";
import Service from "./Service";
import Register from "./Register";
import Confirmation from "./Confirmation";
import Toilet from "./Toilet";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home title="Welcome to Swannies Laundromat Services" />}
        />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />}>
            <Route path=":serviceId" element={<Service />} />
          </Route>
          <Route index element={<h3>Select a category from above</h3>} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="toilet" element={<Toilet />} />
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>

      <footer className="container">Swannies Copyright &copy; 2023</footer>
    </div>
  );
}

export default App;
