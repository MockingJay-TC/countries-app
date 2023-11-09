import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "../components/Dropdown";
import Search from "../components/Search";

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const baseUrl = process.env.REACT_APP_REST_API;
    const url = `${baseUrl}/v3.1/all`;
    axios.get(url).then((res) => {
      setCountries(res.data.results);
      console.log(countries);
    });
  };
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="bg-skin-fill h-screen pt-32 px-32">
      <div>
        <div className="flex items-center justify-between">
          <Search />
          <Dropdown />
        </div>
        <div className="mt-6">
          {countries?.map(() => {
            return <p>me</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
