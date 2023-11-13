import { useNavigate } from "react-router-dom";
import { countryType } from "../Interfaces/interface";

const Pill = ({ borders }: { borders: countryType[] | undefined }) => {
  const navigate = useNavigate();

  const handleBorder = (border: countryType) => {
    navigate(`/details-page/${border.cca3}`);
  };

  return (
    <div className="flex items-center gap-4 justify-stretch flex-wrap">
      {borders?.map((border, index) => (
        <div
          onClick={() => handleBorder(border)}
          key={index}
          className="shadow-pill py-1.5 px-3 text-sm font-light bg-skin-navbar cursor-pointer"
        >
          {border.name.common}
        </div>
      ))}
    </div>
  );
};

export default Pill;
