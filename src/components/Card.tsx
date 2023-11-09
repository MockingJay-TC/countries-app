import { Country } from "../Interfaces/interface";

interface ICard {
  country: Country;
}

const Card = ({ country }: ICard) => {
  return (
    <div className="w-72 h-80 rounded-md shadow-card bg-skin-card cursor-pointer group-hover hover:shadow-2xl">
      <div className="w-full h-40">
        <img
          src={country.flags.svg}
          alt={country.flags.alt}
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="p-6 text-skin-base">
        <h2 className="mb-3 text-lg font-extrabold">{country.name.common}</h2>
        <p>
          <span className="font-semibold text-sm">Population:</span>{" "}
          <span className="font-light text-sm">{country.population}</span>
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
