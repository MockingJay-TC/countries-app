import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";

import Dropdown from "../components/Dropdown";
import Search from "../components/Search";
import { fetchCountries } from "../feature/country/countrySlice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { countries, loading } = useAppSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <div className="bg-skin-fill h-screen pt-32 px-32 overflow-hidden">
      <div>
        <div className="flex items-center justify-between">
          <Search />
          <Dropdown />
        </div>
        <div className="mt-6 overflow-scroll h-screen">
          {countries?.map((country, index: number) => {
            return <p key={index}>{country?.name?.common}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
