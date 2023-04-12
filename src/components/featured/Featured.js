import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://hblimg.mmtcdn.com/content/hubble/img/ooty/mmt/destination/m_Ooty_activity_mountains_l_368_613.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kodaikanal</h1>
          <h2>118 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://assets-news.housing.com/news/wp-content/uploads/2022/07/12214143/best-places-to-visit-in-Tamil-Nadu-Kanyakumari-shutterstock_1750897691.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kanyakumari</h1>
          <h2>177 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Vagamon</h1>
          <h2>209 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
