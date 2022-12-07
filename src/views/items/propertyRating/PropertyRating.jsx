import "./propertyRating.css"
const propertyRating = () => {
    return (
        <div className="place">
            <div className="placeItem">
                <img
                    src="https://t-cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1"
                    alt=""
                    className="placeImg"
                />
                <span className="placeName">La Roulotte de Ciney</span>
                <span className="placeCountry">Beligum</span>
                <span className="placePrice">Starting from VND 2.061.001</span>
                <div className="placeRate">
                    <button>8.4</button>
                    <span>Very Good</span>
                </div>
            </div>
            <div className="placeItem">
                <img
                    src="https://t-cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=8448bab55c87dbb42ab7c6643fbbce542124c908f63f6b36dc3cdc859e60cb0a&o=&s=1"
                    alt=""
                    className="placeImg"
                />
                <span className="placeName">Wierszyki Shelters</span>
                <span className="placeCountry">Poland</span>
                <span className="placePrice">Starting from VND 3.213.000</span>
                <div className="placeRate">
                    <button>9.7</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="placeItem">
                <img
                    src="https://t-cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=bbb45aa5b540c7608ea3af52d92b95a215df9af831dd3ae0e4c4cce501e28b1b&o=&s=1"
                    alt=""
                    className="placeImg"
                />
                <span className="placeName">Dreischwesternherz</span>
                <span className="placeCountry">Germany</span>
                <span className="placePrice">Starting from VND 1.207.200</span>
                <div className="placeRate">
                    <button>9.6</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="placeItem">
                <img
                    src="https://t-cf.bstatic.com/xdata/images/hotel/square600/280950287.webp?k=b984c542b8b1a2ee0e019e4491da338a85b660caa10c5e1197225c5f3052d629&o=&s=1"
                    alt=""
                    className="placeImg"
                />
                <span className="placeName">Wierszyki Shelters</span>
                <span className="placeCountry">Poland</span>
                <span className="fpPriplacePricece">Starting from VND 1.900.120</span>
                <div className="placeRate">
                    <button>9.4</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default propertyRating