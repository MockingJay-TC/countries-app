import { useContext, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";

import Card from "../components/Card";
import Dropdown from "../components/Dropdown";
import Search from "../components/Search";
import { fetchCountries, fetchCountry } from "../feature/country/countrySlice";
import { CountryContext, RegionContext } from "../context/Context";

const HomePage = () => {
  const { regionFilter } = useContext(RegionContext);
  const { countrySearch } = useContext(CountryContext);
  const dispatch = useAppDispatch();
  const { countries } = useAppSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="bg-skin-fill h-screen pt-32 px-32 ">
      <div className="flex flex-col items-stretch justify-between h-full">
        <div className="flex items-center justify-between">
          <Search />
          <Dropdown />
        </div>
        <div className="mt-6 mb-4 flex gap-y-8 gap-x-7 flex-wrap justify-between overflow-scroll overflow-x-hidden scrollbar-hide h-full">
          {regionFilter === "Filter by region" && countrySearch === ""
            ? countries?.map((country, index: number) => {
                return <Card key={index} country={country} />;
              })
            : countries
                ?.filter((country) =>
                  country.name.common
                    .toLowerCase()
                    .includes(countrySearch.toLowerCase())
                )
                .filter((country) =>
                  country.region.includes(
                    regionFilter === "Filter by region" ? "" : regionFilter
                  )
                )
                ?.map((country, index: number) => {
                  return <Card key={index} country={country} />;
                })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
