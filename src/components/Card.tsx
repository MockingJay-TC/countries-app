import { Country } from "../Interfaces/interface";
import { useNavigate } from "react-router-dom";
import {
  fetchBorderCountries,
  fetchCountry,
} from "../feature/country/countrySlice";
import { useAppDispatch } from "../store/hook";

interface ICard {
  country: Country;
}

const Card = ({ country }: ICard) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCardDetials = (country: Country) => {
    const name = country.name.replace(/\s+/g, "-");
    dispatch(fetchBorderCountries(country.borders));
    dispatch(fetchCountry(country.name));
    navigate(`/details-page/${name}`, { state: { country } });
  };
  return (
    <div
      className="w-72 h-80 rounded-md shadow-card bg-skin-card cursor-pointer group-hover hover:shadow-2xl"
      onClick={() => handleCardDetials(country)}
    >
      <div className="w-full h-40">
        <img
          src={country.flags.svg}
          alt={country.name}
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="p-6 text-skin-base">
        <h2 className="mb-3 text-lg font-extrabold truncate ">
          {country.name}
        </h2>
        <p>
          <span className="font-semibold text-sm">Population:</span>{" "}
          <span className="font-light text-sm">
            {" "}
            {new Intl.NumberFormat().format(country.population)}
          </span>
        </p>
        <p>
          <span className="font-semibold text-sm">Region:</span>{" "}
          <span className="font-light text-sm">{country.region}</span>
        </p>
        <p>
          <span className="font-semibold text-sm">Capital:</span>{" "}
          <span className="font-light text-sm">{country.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
