import { useAppSelector } from "../store/hook";

const Pill = () => {
  const { borders } = useAppSelector((state) => state.countries);

  return (
    <div className="flex items-center gap-4 justify-stretch flex-wrap">
      {borders?.map((border, index) => (
        <div
          key={index}
          className="shadow-pill py-1.5 px-3 text-sm font-light bg-skin-navbar"
        >
          {border}
        </div>
      ))}
    </div>
  );
};

export default Pill;
