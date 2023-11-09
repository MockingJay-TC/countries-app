import Search from "../components/Search";

const HomePage = () => {
  return (
    <div className="bg-skin-fill h-screen pt-32 px-32">
      <div>
        <div className="flex items-center justify-between">
          <Search />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
