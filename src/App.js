import "./App.css";
import Images from "./assets/json/images.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Caroussel";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="container">
        <div className="all">
          <div className="table">
            {Images.map((item, index) => {
              const category = item.category;
              const images = item.images;
              return (
                <div className="boxes" key={index}>
                  <Carousel key={index} category={category} images={images} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
