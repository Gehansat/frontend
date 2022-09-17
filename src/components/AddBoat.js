import React,{useState} from "react";
import axios from "axios";

export default function AddBoat(){

    const [Capacity, setCapacity] = useState("");
    const [Type,setType] = useState("");
    const [Cost,setCost] = useState("");
    const [Description,setDescription] = useState("");

    function sendData(e){
        e.preventDefault();

        const newBoat = {

            Capacity,
            Type,
            Cost,
            Description

        }

        axios.post("http://localhost:8080/Boat/add",newBoat).then(()=>{
            alert("Boat Added")
        }).catch((err)=>{
            alert(err)
        })

    }

    return(

        <div className="container" style={{border: '2px solid rgba(0,255,0,0.3)'}}>
        
        <form onSubmit={sendData}>

  <div class="form-group" >
    <label for="Capacity">Capacity</label>
    <input type="Number" className="form-control" id="Capacity" placeholder="Enter the boat capacity" 
    onChange={(e)=>{
        setCapacity(e.target.value);
    }}/>
  </div>

  <div className="form-group">
    <label for="Type">Type</label>
    <input type="text" className="form-control" id="Type" placeholder="Enter the boat type" 
    onChange={(e)=>{
        setType(e.target.value);
    
    }}/>
  </div>

  <div className="form-group">
    <label for="Cost">Cost</label>
    <input type="Number" className="form-control" id="Cost" placeholder="Enter the boat cost" 
     onChange={(e)=>{
        setCost(e.target.value);
    }}/>
  </div>

  <div className="form-group">
    <label for="Description">Description</label>
    <input type="text" className="form-control" id="Description" placeholder="Enter the boat Description" 
     onChange={(e)=>{
        setDescription(e.target.value);
    }}/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>    
</div>
       

    )


}