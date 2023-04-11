import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/1c/d9/90/76/exterior-view.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">The Accord Metropolitan</span>
        <span className="fpCity">Chennai</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cdn.luxuryhotel.world/file/hotcdn/hotel/cover-small/282458_1606189910.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">ITC Grand Chola</span>
        <span className="fpCity">Coimbatore</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.greavesindia.co.uk/wp-content/uploads/2015/02/50-best-hotels-500x0-c-default.jpeg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Imperial Hotel</span>
        <span className="fpCity">Banglore</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://ak-d.tripcdn.com/images/0221z1200084ac5hx7F91_R_550_412_R5.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Kerala</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;