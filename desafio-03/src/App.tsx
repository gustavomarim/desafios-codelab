import "./App.scss";
import RecommendedArticles from "./components/Article/Recommended/RecommendedArticles";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Banner />
      <RecommendedArticles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
