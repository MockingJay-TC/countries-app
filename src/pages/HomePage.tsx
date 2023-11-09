import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";

import Card from "../components/Card";
import Dropdown from "../components/Dropdown";
import Search from "../components/Search";
import { fetchCountries } from "../feature/country/countrySlice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { countries } = useAppSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <div className="bg-skin-fill h-screen pt-32 px-32 ">
      <div className="flex flex-col items-stretch justify-between h-full">
        <div className="flex items-center justify-between">
          <Search />
          <Dropdown />
        </div>
        <div className="mt-6 mb-4 flex gap-y-8 gap-x-7 flex-wrap justify-between overflow-scroll overflow-x-hidden scrollbar-hide h-full">
          {countries?.map((country, index: number) => {
            return <Card key={index} country={country} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
