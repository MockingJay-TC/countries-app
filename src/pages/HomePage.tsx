import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";

import Dropdown from "../components/Dropdown";
import Search from "../components/Search";
import { fetchCountries } from "../feature/country/countrySlice";
import Card from "../components/Card";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { countries, loading } = useAppSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <div className="bg-skin-fill h-screen pt-32 px-32 overflow-hidden">
      <div className="flex flex-col items-stretch justify-between h-full ">
        <div className="flex items-center justify-between">
          <Search />
          <Dropdown />
        </div>
        <div className="mt-6 mb-4  overflow-scroll overflow-x-hidden h-screen scrollbar-hide">
          {countries?.map((country, index: number) => {
            return <Card index={index} country={country} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
