import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { CountryContext, RegionContext, ThemeContext } from "./context/Context";
import { useState } from "react";

const App = () => {
  const [countrySearch, setCountrySearch] = useState<string>("");
  const [theme, setTheme] = useState(false);
  const [regionFilter, setFilter] = useState<string>("");
  return (
    <div>
      <Router>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <CountryContext.Provider value={{ countrySearch, setCountrySearch }}>
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
        </ThemeContext.Provider>
      </Router>
    </div>
  );
};

export default App;
