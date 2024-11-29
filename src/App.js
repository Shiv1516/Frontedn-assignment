import "./App.css";
import Collection from "./Components/Collection";
import Destinantion from "./Components/Destinantion";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Offers from "./Components/Offers";
import Testimonials from "./Components/Testimonials";
import Trending from "./Components/Trending";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Offers />
      <Destinantion />
      <Trending />
      <Collection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
