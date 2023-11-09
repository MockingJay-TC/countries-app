import { Country } from "../Interfaces/interface";

interface ICard {
  country: Country;
  index: number;
}

const Card = ({ country, index }: ICard) => {
  return (
    <div key={index} className="w-64 h-80">
      <img
        src={country.flags.svg}
        alt={country.flags.alt}
        className="w-full h-40"
      />
    </div>
  );
};

export default Card;
