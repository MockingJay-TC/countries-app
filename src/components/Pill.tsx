import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hook";

const Pill = () => {
  const navigate = useNavigate();
  const { borders } = useAppSelector((state) => state.countries);

  const handleBorder = (border: string) => {
    navigate(`/details-page/${border}`);
  };

  return (
    <div className="flex items-center gap-4 justify-stretch flex-wrap">
      {borders?.map((border, index) => (
        <div
          onClick={() => handleBorder(border.code)}
          key={index}
          className="shadow-pill py-1.5 px-3 text-sm font-light bg-skin-navbar cursor-pointer"
        >
          {border.name}
        </div>
      ))}
    </div>
  );
};

export default Pill;
