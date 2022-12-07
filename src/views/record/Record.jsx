import "./record.css"
import Head from '../head/Head'
import Navbar from '../items/navbar/Navbar'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import Search from "../items/search/Search"

const Record = () => {
  const loca = useLocation();
  const [destination, setDestination] = useState(loca.state.destination);
  const [date, setDate] = useState(loca.state.date);
  const [people, setPeople] = useState(loca.state.people);
  const [openDate, setOpendate] = useState(false);
  return (
    <div>
      <Navbar />
      <Head type="record" />
      <div className="recordContain">
        <div className="recordWrapper">
          <div className="search">
            <h1 className="searchTilte">Search</h1>
            <div className="recordItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="recordItem">
              <label>Date Checkin</label>
              <span onClick={() => setOpendate(!openDate)}>
                {`${format(date[0].startDate, "dd/MM/yyyy")} 
                    to ${format(date[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="recordItem">
              <label>People & Room</label>
              <div className="prOptions">
                <div className="prOtion">
                  <span className="prOptionText">
                    Max Price
                    <small> per night</small>
                  </span>
                  <input type="number" className="prOptionInput" />
                </div>
                <div className="prOtion">
                  <span className="prOptionText">
                    Min Price
                    <small> per night</small>
                  </span>
                  <input type="number" className="prOptionInput" />
                </div>
                <div className="prOtion">
                  <span className="prOptionText">
                    Adult
                  </span>
                  <input type="number" className="prOptionInput" placeholder={people.adult} min={1} />
                </div>
                <div className="prOtion">
                  <span className="prOptionText">
                    Children
                  </span>
                  <input type="number" className="prOptionInput" placeholder={people.children} min={0} />
                </div>
                <div className="prOtion">
                  <span className="prOptionText">
                    Room
                  </span>
                  <input type="number" className="prOptionInput" placeholder={people.room} min={1} />
                </div>
              </div>

            </div>
            <button>Search</button>
          </div>
          <div className="result">
            <Search/>
            <Search/>
            <Search/>
            <Search/>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Record
