import { faMap } from "@fortawesome/free-regular-svg-icons"
import { faTaxi } from "@fortawesome/free-solid-svg-icons"
import { faPlane } from "@fortawesome/free-solid-svg-icons"
import { faCar } from "@fortawesome/free-solid-svg-icons"
import { faHotel } from "@fortawesome/free-solid-svg-icons"
import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import { faBed } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./head.css"
import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"
import { useNavigate } from "react-router-dom"

const Head = ({type}) => {
    const [destination, setDestination] = useState("")
    const [openDate, setOpendate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [people, setPeople] = useState({
        adult: 1,
        children: 1,
        room: 1,
    });
    const [option, setOption] = useState(false)

    const handleCount = (name, operation) =>{
        setPeople(prev=>{return{
            ...prev, [name]: operation === "plus" ? people[name] + 1 : people[name] - 1,

        }})
    }
    const navi =  useNavigate()
    const Search = () =>{
        navi("/hotels",{state:{destination,date,people}})
    }
    return (
        <div className="head">
            <div className={type === "record" ? "headContains recordMode" : "headContains"} >
                <div className="headList">
                    <div className="headItems">
                        <FontAwesomeIcon icon={faHotel} />
                        <span>Stays</span>
                    </div>
                    <div className="headItems">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Rend Cars</span>
                    </div>
                    <div className="headItems">
                        <FontAwesomeIcon icon={faMap} />
                        <span>Attractions </span>
                    </div>
                    <div className="headItems">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Taxi</span>
                    </div>
                    <div className="headItems">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flight</span>
                    </div>
                </div>
                { type !== "record" &&
                    <>
                    <h1 className="title">HOTEL, RESTAURANT, HOMESTAY AND MORE</h1>
                <p className="description">Get the best prices on more than 2,000,000 properties, globally</p>

                <button className="headBtn">Sign Up/Sign In</button>

                <div className="headSearch">
                    <div className="headSearchItems">
                        <FontAwesomeIcon icon={faHotel} className="icon" />
                        <input type="text" placeholder="City/Hotel" className="inputText"  onChange={e=>setDestination(e.target.value)} />
                    </div>

                    <div className="searchItems">
                        <FontAwesomeIcon icon={faCalendar} className="icon" />
                        <span onClick={() => setOpendate(!openDate)} className="searchText">{`${format(date[0].startDate, "dd/MM/yyyy")} 
                    to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {openDate && <DateRange
                            className="date"
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            min={new Date()}
                        />}
                    </div>

                    <div className="searchItems">
                        <FontAwesomeIcon icon={faBed} className="icon" />
                        <span onClick={()=> setOption(!option)} className="searchText">{`${people.adult} adult - ${people.children} children - ${people.room} room  `}</span>
                        {option && <div className="peopleOption">
                            <div className="peopleOptionItems">
                                <span className="textOption">Adult</span>
                                <div className="counter">
                                    <button className="countBtn" onClick={()=>handleCount("adult","plus")}>+</button>
                                    <span className="countNumber">{people.adult}</span>
                                    <button className="countBtn" 
                                    onClick={()=>handleCount("adult","minus")}
                                    disabled={people.adult <= 1}
                                    >-</button>
                                </div>
                            </div>
                            <div className="peopleOptionItems">
                                <span className="textOption">Children</span>
                                <div className="counter">
                                    <button className="countBtn" onClick={()=>handleCount("children","plus")}>+</button>
                                    <span className="countNumber">{people.children}</span>
                                    <button className="countBtn" 
                                    onClick={()=>handleCount("children","minus")}
                                    disabled={people.children <= 0}
                                    >-</button>
                                </div>
                            </div>
                            <div className="peopleOptionItems">
                                <span className="textOption">Room</span>
                                <div className="counter">
                                    <button className="countBtn" onClick={()=>handleCount("room","plus")}>+</button>
                                    <span className="countNumber">{people.room}</span>
                                    <button className="countBtn" 
                                    onClick={()=>handleCount("room","minus")}
                                    disabled={people.room <= 1}
                                    >-</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="searchItems">
                        <button className="searchBtn" onClick={Search}>Search</button>
                    </div>
                </div></>}

            </div>

        </div>

    );
};

export default Head