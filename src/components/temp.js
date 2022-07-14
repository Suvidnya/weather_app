import React,{useEffect ,useState} from "react";
import "./style.css";

export const Temp = () => {
    
    const [city,setcity] = useState(null);
    const [search,setsearch] = useState("Nagpur");


    useEffect(()=>{
        const fetchapi = async ()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3fb3e71882645ee70b7775572f980f43`;
            const response = await fetch(url);
            // console.log(response);

            const resjson = await response.json();
            setcity(resjson.main);
            // console.log(resjson.main.temp);
        }
        fetchapi();
    },[search])


  return (
    <div className="whole">
      <div className="box">
        <div className="inputdiv">
          <input 
          type="search" 
          value={search}
          className="inputbox" 
          placeholder="Search city..."
          onChange={(event)=>{
            console.log(event);
            setsearch(event.target.value)
            }}>
          
          </input>
        
        </div>

        {!city ? (
            <p className="error text">No data Found</p>
        ) : (
            <>
            <div className="info">
            <h1 className="location text">
             {search}
            </h1>


            <h1 className="temp text">
            {city.temp}°C
            </h1>

            <h4 className="tempminmax text">Min : {city.temp_min}°C | Max : {city.temp_max}°C</h4>
        </div>

            </>
        )}

        
      </div>
    </div>
  );
};

//useEffect hook runs whenever the component renders, so whenever the state changes
//and the componennt is rerendered the useEffect runs

//  ----> So here as upon search we have to give data we took search data as 
// state so that each time value of input changes the component rerenders and
// the useEffect re runs and we get new data acc to the value input
// Never use useState in useEffect otherwise will get trap in a infinite loop

//await works only with async function
//await makes the async function run like a synchronous one

//fectch is used to get data from the API