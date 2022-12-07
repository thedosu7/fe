import "./search.css"

const Search = () => {
  return (
    <div className="Items">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="img"
      />
      <div className="desc">
        <h1 className="title">Golden Rose Hotel</h1>
        <span className="distance">2.5km from the center</span>
        <span className="deal">Year-end Deals</span>
        <span className="sub">
        Deluxe Double or Twin Room with City View
        </span>
        <span className="features">
        Various types of beds
        </span>
        <span className="cancel">Free cancellation </span>
        <span className="cancelSub">
          You can cancel later and no fee added!
        </span>
      </div>
      <div className="details">
        <div className="rate">
          <span>Excellent</span>
          <button>9.0</button>
        </div>
        <div className="detailText">
          <span className="price">VND 900.000</span>
          <span className="tax">Include tax and fee</span>
          <button className="btn">See availability</button>         
        </div>
      </div>
    </div>
  );
};

export default Search