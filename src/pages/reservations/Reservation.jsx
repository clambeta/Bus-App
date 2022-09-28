import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faBus, faClock, faHouseChimney, faPerson} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {useState} from 'react'
import { DateRange } from 'react-date-range';
import "../reservations/reservation.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"

function Reservation () {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openOptions, setOpenOptions] = useState(false);
      const [options, setOptions] = useState({
        adult: 1,
        children: 0
      });
     return(
            <>
                <div className='searchReservation'>           
                    <div className='searchItem'>
                        <div>
                            <FontAwesomeIcon className='iconForm' icon={ faHouseChimney }/>
                        </div>
                        <div> 
                            <input type="text" placeholder='Where are you?' className='searchInput'/>
                        </div>
                    </div>
                    <div className='searchItem'>
                        <div>
                            <FontAwesomeIcon className='iconForm' icon={ faBus }/>
                        </div>
                        <div>
                            <input type="text" placeholder='Where are you going?' className='searchInput'/>
                        </div> 
                    </div>
                    <div className='searchItem'> 
                        <div>
                            <FontAwesomeIcon className='iconForm' icon={ faCalendarDays }/>
                        </div>
                        <div>
                            <span onClick={()=>setOpenDate(!openDate)} className='searchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
                            {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                            />}
                        </div>
                    </div>
                    <div className='searchItem'> 
                        <div>
                            <FontAwesomeIcon className='iconForm' icon={ faPerson }/>
                        </div>
                        <div>
                            <span className='searchText'>{`${options.adult} adult . ${options.children} children`}</span>
                            <div className="options">
                                <div className="optionItem">
                                    <span className='optionText'>Adult</span>
                                    <button className="optionCounterButton">-</button>
                                    <span className="optionCounterNumber">1</span>
                                    <button className="optionCounterButton">+</button>
                                </div>
                                <div className="optionItem">
                                    <span className='optionText'>Children</span>
                                    <button className="optionCounterButton">-</button>
                                    <span className="optionCounterNumber">0</span>
                                    <button className="optionCounterButton">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='searchItem'> 
                        <div>
                            <FontAwesomeIcon className='iconForm' icon={ faClock }/>
                        </div>
                        <div>
                            <span className='searchText'>Hour</span>
                        </div>
                    </div>
                    <div className='searchItem'> 
                        <button className="searchBtn">Search</button>
                    </div>
                </div>
            </>
        )
    }
    
    export default Reservation