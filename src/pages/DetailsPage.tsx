import { useNavigate } from "react-router-dom";
import Pill from "../components/Pill";
import { useAppSelector } from "../store/hook";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { CountryContext, RegionContext } from "../context/Context";

const DetailsPage = () => {
  const navigate = useNavigate();
  const { selectedCountry } = useAppSelector((state) => state.countries);
  const { setFilter } = useContext(RegionContext);
  const { setCountrySearch } = useContext(CountryContext);

  const handleBack = () => {
    if (setCountrySearch) {
      setCountrySearch(" ");
    }
    if (setFilter) {
      setFilter("Filter by region");
    }

    navigate(-1);
  };
  return (
    <div className="desktop:p-32 px-7 pt-28 pb-12 xxl:px-96 h-auto desktop:h-full border-4">
      <div
        onClick={() => handleBack()}
        className="w-[136px] h-[40px] justify-center px-6 items-center gap-2 inline-flex shadow-search rounded-md cursor-pointer mb-10"
      >
        <ArrowLeftIcon className="w-4" />
        <span className="text-sm font-light">Back</span>
      </div>
      <div className="xxl:flex desktop:grid grid-cols-2 gap-20 space-y-7 desktop:space-y-0 items-center justify-between h-full">
        <div className="desktop:w-[600px] desktop:h-[400px] ">
          <img
            src={selectedCountry?.flags?.svg}
            alt={selectedCountry?.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="text-left">
          <h1 className="desktop:text-4xl text-2xl font-extrabold">
            {selectedCountry?.name}
          </h1>
          <div className="desktop:grid grid-cols-2 my-6 space-y-4">
            <div className="text-skin-base space-y-2 desktop:space-y-0">
              <p>
                <span className="font-semibold text-base">Native Name:</span>{" "}
                <span className="font-light text-base">
                  {selectedCountry.nativeName}
                </span>
              </p>
              <p>
                <span className="font-semibold text-base">Population:</span>{" "}
                <span className="font-light text-base">
                  {new Intl.NumberFormat().format(selectedCountry.population)}
                </span>
              </p>
              <p>
                <span className="font-semibold text-base">Region:</span>{" "}
                <span className="font-light text-base">
                  {selectedCountry.region}
                </span>
              </p>
              <p>
                <span className="font-semibold text-base">Sub Region:</span>{" "}
                <span className="font-light text-base">
                  {selectedCountry.subregion}
                </span>
              </p>
              <p>
                <span className="font-semibold text-base">Capital:</span>{" "}
                <span className="font-light text-base">
                  {selectedCountry.capital}
                </span>
              </p>
            </div>
            <div className="space-y-2 desktop:space-y-0">
              <p>
                <span className="font-semibold text-base">
                  Top Level Domain:
                </span>{" "}
                <span className="font-light text-base">
                  {selectedCountry.topLevelDomain}
                </span>
              </p>
              <p>
                <span className="font-semibold text-base">Currencies:</span>{" "}
                <span className="font-light text-base grid-cols-2 ">
                  {selectedCountry.currencies?.map((curr, index) => (
                    <span key={index}>{curr.name}, </span>
                  ))}
                </span>
              </p>
              <p>
                <span className="font-semibold text-base">Languages:</span>{" "}
                <span className="font-light text-base">
                  {selectedCountry.languages?.map((lang, index) => (
                    <span key={index}>{lang.name}, </span>
                  ))}
                </span>
              </p>
            </div>
          </div>
          <div className="desktop:flex items-center justify-between gap-4 my-6 space-y-3 desktop:space-y-0">
            {selectedCountry?.borders ? (
              <h2 className="font-semibold text-base">Border Countries:</h2>
            ) : (
              ""
            )}
            <Pill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
