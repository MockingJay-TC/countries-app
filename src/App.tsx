import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { CountryContext, RegionContext } from "./context/Context";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState<string>("");
  const [regionFilter, setFilter] = useState<string>("");
  return (
    <div>
      <Router>
        <CountryContext.Provider value={{ search, setSearch }}>
          <RegionContext.Provider value={{ regionFilter, setFilter }}>
            <Routes>
              <Route path="/" element={<Layout childComp={<HomePage />} />} />
              <Route
                path="/details-page/:countryName"
                element={<Layout childComp={<DetailsPage />} />}
              />
            </Routes>
          </RegionContext.Provider>
        </CountryContext.Provider>
      </Router>
    </div>
  );
};

export default App;
