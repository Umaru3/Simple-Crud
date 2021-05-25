import './App.css';
import { useState } from "react";
import Axios from 'axios'

function App() {

  const [name, setName] = useState("")
            //States where our data send to

  const [peopleList, setPeopleList] = useState([]);

  const addPerson = () => {                           //function for calling api in adding more people
    Axios.post('http://localhost:3001/insert', {      //in the database
      name: name
    }).then(() => {
      console.log("Success!");
    });
  };

  const getPeople = () => {
    Axios.get('http://localhost:3001/views').then((response) => { //function for calling the api for
      setPeopleList(response.data);                               //displaying data
    });
  };

  return <>

    <div className="App">
      <form onSubmit={addPerson}>
        <div className="formstyle">

          <label>
            Name:
          </label>
          <input type="text"
            onChange={(event) => {
              setName(event.target.value);//getting the input name
            }}
            required />

          <button>Submit</button>

        </div>
      </form>
      <div className="viewInfos">
        <button onClick={getPeople}>View Names</button>

        {peopleList.map((val, key) => {//where we display all the data
          return (                     //using the javascript, map() function
            <div className="people">
              <ul>
                <li><h2>Name: {val.fname}</h2></li>
              </ul>

            </div>
          );
        })}

      </div>
    </div>
  </>


}

export default App;
