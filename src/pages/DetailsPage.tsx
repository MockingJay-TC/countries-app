import { useEffect, useState } from "react";
import Pill from "../components/Pill";
import { useAppSelector } from "../store/hook";

const DetailsPage = () => {
  const [native, setNative] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const { selectedCountry } = useAppSelector((state) => state.countries);

  useEffect(() => {
    if (selectedCountry?.name) {
      const nativeName = selectedCountry?.name?.nativeName;
      const newArray = Object.entries(nativeName).map(([key, value]) => ({
        language: key,
        common: value.common,
        official: value.official,
      }));
      setNative(newArray[0].common);
    }
  }, [native, selectedCountry?.name]);

  useEffect(() => {
    selectedCountry.currencies.forEach((currency) => {
      setCurrencies([...currencies, currency.name]);
    });

    // if (selectedCountry?.currencies) {
    //   const curr = selectedCountry?.currencies;
    //   const newArray = Object.entries(curr).map(([key, value]) => ({
    //     country: key,
    //     name: value.name,
    //     symbol: value.symbol,
    //   }));
    //   setCurrencies(newArray);
    // }
  }, [selectedCountry?.currencies]);

  return (
    <div className="p-32 h-full">
      <div className="flex items-center justify-between h-full">
        <div className="w-[600px] h-[400px] ">
          <img
            src={selectedCountry?.flags?.svg}
            alt={selectedCountry?.flags?.alt}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="text-left">
          <h1 className="text-4xl font-extrabold">
            {selectedCountry?.name?.common}
          </h1>
          <div className="pt-4 text-skin-base">
            <p>
              <span className="font-semibold text-base">Native Name:</span>{" "}
              <span className="font-light text-base">{native}</span>
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
          <div>
            <p>
              <span className="font-semibold text-base">Top Level Domain:</span>{" "}
              <span className="font-light text-base">
                {selectedCountry.tld}
              </span>
            </p>
            <p>
              <span className="font-semibold text-base">Currencies:</span>{" "}
              <span className="font-light text-base">
                {currencies?.map((curr, index) => (
                  <p key={index}>{curr}</p>
                ))}
              </span>
            </p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-semibold text-base">Border Countries:</h2>
            <Pill name={selectedCountry?.name?.common} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
