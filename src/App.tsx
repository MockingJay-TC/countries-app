import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { CountryContext } from "./context/Context";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <div>
      <Router>
        <CountryContext.Provider value={{ search, setSearch }}>
          <Routes>
            <Route path="/" element={<Layout childComp={<HomePage />} />} />
            <Route
              path="/details-page/:countryName"
              element={<Layout childComp={<DetailsPage />} />}
            />
          </Routes>
        </CountryContext.Provider>
      </Router>
    </div>
  );
};

export default App;
