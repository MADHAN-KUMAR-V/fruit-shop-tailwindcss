import Appbar from "./components/Appbar";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Items from "./components/Items";
import SeasonSpecial from "./components/SeasonSpecial";


function App() {
  return (
    <div>
      <Appbar />
      <Filter />
      <Items />
      <SeasonSpecial />
      <Footer />
    </div>
  );
}

export default App;
