const Pill = ({ name }: { name: string }) => {
  return (
    <div className="shadow-pill h-10 flex items-center justify-center p-5">
      <h1 className="text-sm font-light">{name}</h1>
      <h1 className="text-sm font-light">{name}</h1>
    </div>
  );
};

export default Pill;
