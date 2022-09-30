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
import { RadioButton } from '../radioButton/RadioButton'

const listaBuses= []
for (let i=0; i<= 11; i++){
  let med = ""
  if(i<6){
    med = "a.m."
  } else if (i==6){
    med = "m."
  }else{
    med = "p.m."
  }
  listaBuses.push( {
    id: String(i),
    label:`${i*2}:00 ${med}`,
    value: String(i)
  } )  
}

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
      const handleOption = (name, operation) =>{
        setOptions(prev=>{return {
            ...prev, [name]: operation === "i" ? options[name] +1 : options[name] -1,
        }})
      };

      const [openHours, setOpenHours] = useState(false);
    
      const [hourChossen, setHourChossen] = useState("8:00 a.m");
      const [hours, setHours] = useState("5");
      const radioChangeHandler = (e) => {
        setHours(e.target.value);
        setHourChossen(listaBuses.filter(elem=>elem.value == e.target.value)[0].label)
        };

        

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
                            <span onClick={()=>setOpenOptions(!openOptions)} className='searchText'>{`${options.adult} adult . ${options.children} children`}</span>
                            {openOptions &&<div className="options">
                                <div className="optionItem">
                                    <span className='optionText'>Adult</span>
                                    <div className="optionCounter">
                                        <button 
                                        disabled={options.adult <= 1}
                                        className="optionCounterButton" 
                                        onClick={()=>handleOption("adult", "d")}>-</button>
                                        <span className="optionCounterNumber">{options.adult}</span>
                                        <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className='optionText'>Children</span>
                                    <div className="optionCounter">
                                        <button 
                                        className="hourCounterButton" 
                                        onClick={()=>handleOption("children", "d")}>-</button>
                                        <span className="optionCounterNumber">{options.children}</span>
                                        <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className='searchItem'> 
                        <div>
                            <FontAwesomeIcon className='iconForm' icon={ faClock }/>
                        </div>  

                        <div>
                            <span onClick={()=>setOpenHours(!openHours)} className='searchText'>Hours: {hourChossen} </span>
                            {openHours && 
                            <div className="options">
                                <div className="optionItem">
                                    <span  className='searchText'>Hour</span>
                                    <div className="optionHour">
                                    <ul>
                                        {listaBuses.map((elem, index)=>(
                                            <RadioButton 
                                            changed={radioChangeHandler}
                                            id = {elem.id}
                                            isSelected= {hours === elem.value}
                                            label={elem.label}
                                            value={elem.value}
                                            />
                                        ))
                                        }

                                    </ul>
                                    </div>
                                </div>
                            </div>}
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