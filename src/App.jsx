import reactLogo from "./assets/react.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Slider from "./components/Slider";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import LiveNews from "./components/LiveNews";
import Body from "./components/Body";
import Test from "./components/Test";

// Hooks
import useApi from "./hooks/useApi";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  // GET NEWS FOR SLIDESHOW
  const url =
    "https://newsapi.org/v2/everything?q=videogames&pageSize=10&sortBy=publishedAt&language=en&apiKey=33670a8619134e64bae86e09a7d9d57c";

  const { loading, data } = useApi(url);

  return (
    <div className="App">
      <TopBar />

      <Header />

      <Slider news={data} />

      {/* <LiveNews /> */}

      <Test value={1000} />

      <Body />
    </div>
  );
}

export default App;
