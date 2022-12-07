import "./feature.css"

const Feature = () => {
  return (
    <div className="feature">
        <div className="featureItems">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/357219020.webp?k=7376da15f8262b10c37b7a831b8a19190ac17c5a07b7f3a21f7b408fb584bacf&o=&s=1" alt="" 
            className="featureImg" />
            <div className="tilte">
                <h1>Golden Rose</h1>
                <h2>123</h2>
            </div>
        </div>
        <div className="featureItems">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/215595381.webp?k=6e300a81dad53a0719baefb44ab8ec58789d5bf14abf157b45fb8aa2415aedda&o=&s=1" alt="" 
            className="featureImg" />
            <div className="tilte">
                <h1>Sun River Hotel & Apartment</h1>
                <h2>123</h2>
            </div>
        </div>
        <div className="featureItems">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/357500651.webp?k=6ba0331f5d1328b481965ab7ed231ac1e71578e4a6f8c5b3b763ee50f302bf89&o=&s=1" alt="" 
            className="featureImg" />
            <div className="tilte">
                <h1>Crystal Boutique</h1>
                <h2>123</h2>
            </div>
        </div>
    </div>
  );
};

export default Feature