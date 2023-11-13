import { useNavigate } from "react-router-dom";
import { countryType } from "../Interfaces/interface";

const Card = ({ country }: { country: countryType }) => {
  const navigate = useNavigate();

  const handleCardDetials = (country: countryType) => {
    navigate(`/details-page/${country.cca3}`);
  };

  return (
    <div
      className="desktop:w-72 h-80 w-full rounded-md shadow-card bg-skin-card cursor-pointer group-hover hover:shadow-2xl"
      onClick={() => handleCardDetials(country)}
    >
      <div className="w-full h-40">
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="p-6 text-skin-base">
        <h2 className="mb-3 text-lg font-extrabold truncate ">
          {country.name.common}
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
