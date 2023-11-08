import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";

const App = () => {
  return (
    <div className="font-nunito">
      <Router>
        <Routes>
          <Route path="/" element={<Layout childComp={<HomePage />} />} />
          <Route
            path="/details-page/:countryName"
            element={<Layout childComp={<DetailsPage />} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
