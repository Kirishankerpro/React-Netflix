import Carousel from "../components/Caroussel";
import Images from "../assets/json/images.json";
import "../App.css";

const Main = () => {
  return (
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
  );
};

export default Main;
