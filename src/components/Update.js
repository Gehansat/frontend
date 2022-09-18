// import {useLocation} from "react-router-dom";
// import React,{useState,useEffect} from "react";

// import axios from "axios";

import React,{useState ,useEffect} from "react";
import axios from "axios";
import {Navigate, useLocation} from "react-router-dom";


// import IconButton from '@material-ui/core/IconButton';
// import RemoveIcon from '@material-ui/icons/Remove';
// import AddIcon from '@material-ui/icons/Add';


function Update(){

    
    // Creating states for assigning user input data
    const [Capacity, SetCapacity] = useState("");
    const [Type, SetType] = useState("");
    const [Cost, SetCost] = useState("");
    const [Description, SetDescription] = useState("");
   
    
    const bo = useLocation();
    const id = bo.pathname.split("/")[2];
  
    
// --------creating function to send data------------------
    function sendData(e){
        e.preventDefault();
        

        const newBoatdata ={
            Capacity,
            Type,
            Cost,
            Description

        }

        
        // creating axios request for send data to backend
        axios.post(`http://localhost:8080/Boat/update/`,Update).then(()=>{
            alert("Submit")
            // Navigate("/")
            
            
        }).catch((err)=>{
            alert(err)
        })
    }

    return (

    <div className="container" >

        <br></br>
       <div style={{border: '2px solid rgba(0,255,0,0.3)'}}>

        <br></br>
        <h3 style={{ marginLeft:'35%'}}>ADD Boat DETAILS</h3>
        <br></br>

        <form style={{ marginLeft:'25px',marginRight:'15px'}} onSubmit={sendData}>

        <label >Capacity:</label>
                <input style={{ marginBottom:'10px'}} type="text" class="form-control" id="Capacity" placeholder="Capacity" 
                onChange={(e) =>{
                    SetCapacity(e.target.value);
                }}/>

        <label >Type:</label>
                <input style={{ marginBottom:'10px'}} type="text" class="form-control" id="Type" placeholder="Boat Type" 
                onChange={(e) =>{
                    SetType(e.target.value);
                }}/>

        <label >Cost:</label>
                <input style={{ marginBottom:'10px'}} type="text" class="form-control" id="Cost" placeholder="Cost" 
                onChange={(e) =>{
                    SetCost(e.target.value);
                }}/>

        <label >Description:</label>
                <input style={{ marginBottom:'10px'}} type="Description" class="form-control" id="Description"  
                onChange={(e) =>{
                    SetDescription(e.target.value);
                }}/>

        {/* <div className="form-row" style={{ marginBottom:'25px'}}>
            <div className="col">
                <label>Start Place :</label>
                <select className="custom-select"
                onChange={(e) =>{
                    SetStartPlace(e.target.value);
                }}>
                    <option value="colombo">colombo</option>
                    
                </select>
            </div>

            <div className="col">
            <label>End Place:</label>
            <select className="custom-select"
                onChange={(e) =>{
                    SetEndPlace(e.target.value);
                }} >
                    <option value="kandy">kandy</option>
                    <option value="galle">galle</option>
                </select>
            </div>

         

        </div>     */}


        {/* <label >Route Details :</label>
                <textarea style={{ marginBottom:'10px'}}  class="form-control" id="Locations" placeholder="Enter Route Details" 
                onChange={(e) =>{
                    SetLocations(e.target.value);
                }}>
                </textarea> */}

         {/* old data */}
        {/* <input type="submit" value="Update" class="btn btn-primary" /> */}
        <button type="submit" className="btn btn-primary">Update</button>
        {/* <a  href="/PublicTransDashboard"><button type="button" style={{ marginLeft:'5px'}} className="btn btn-primary">Back</button></a> */}
        <br></br><br></br>
      </form>
      </div><br></br>
    </div>  
    )
}
export default Update;