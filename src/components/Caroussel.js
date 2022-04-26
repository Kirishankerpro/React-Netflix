import "../assets/style/Carousel.css";

const Carousel = (props) => {
  return (
    <div>
      <h1 className="title"> {props.category} </h1>
      <div className="imagesfromtable">
        {props.images.map((img, index) => {
          return (
            <div key={index}>
              <img src={img} alt="movies"></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
