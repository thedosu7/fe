import Head from "../head/Head"
import Feature from "../items/features/Feature"
import Navbar from "../items/navbar/Navbar"
import "./mainpage.css"
import TypeList from "../items/typeList/TypeList"
import PropertyPlace from "../items/propertyPlace/PropertyPlace"
import PropertyRating from "../items/propertyRating/PropertyRating"
import Contact from "../items/contact/Contact"
import Foot from "../foot/Foot"
const MainPage = () => {
  return (
   <div>
    <Navbar/>
    <Head/>
    <div className="mainContain">
        <Feature/>
        <h1 className="mainTilte">Search by property type</h1>
        <TypeList/>
        <h1 className="mainTilte">Stay at top unique properties</h1>
        <PropertyRating/>
        <h1 className="mainTilte">Travel around Asia</h1>
        <PropertyPlace/>
        <Contact/>
        <Foot/>
    </div>
   </div>
  )
}

export default MainPage
