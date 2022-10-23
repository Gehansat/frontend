import React  , {useState , useEffect}from "react";
import axios from "axios";




export default function BoatUpdate(props){

    const [Capacity, setCapacity] = useState("");
    const [Type,setType] = useState("");
    const [Cost,setCost] = useState("");
    const [Description,setDescription] = useState("");

    function sendData(e){
      e.preventDefault();
      //alert("Successfuly inserted");

       
     let Capacity = document.getElementById('Capacity').value;
     let Type = document.getElementById('Type').value;
     let Cost = document.getElementById('Cost').value;
     let Description = document.getElementById('Description').value;
     
     const editboat={

        Capacity:Capacity,
        Type:Type, 
        Cost:Cost,
        Description:Description,
             }

     axios.put(`http://localhost:8080/Boat/update/${sessionStorage.editboat_id}`,editboat).then(()=>{
        alert("Boat updated")

        let editboat_id=sessionStorage.editboat_id;
        console.log(editboat_id);
      window.location.reload(false);//refresh the value field
             

     }).catch((err) =>{
        alert(err)
     })
}

useEffect(() =>{
    const id = props.id;
    let editboat_id=sessionStorage.editboat_id;
    axios.get(`http://localhost:8080/Boat/get/${editboat_id}`).then((res) => {
        console.log(res);
        let data=res.data.boats;
        document.getElementById('Capacity').value=data.Capacity;
        document.getElementById('Type').value=data.Type;  
        document.getElementById('Cost').value=data.Cost;
        document.getElementById('Description').value=data.Description;    
       
      })
    }, []);
   
    return(

        
    <div className="ucontainer">
      <div><br></br><center>
<h3>Update Boat Details</h3></center>
<br></br>
      </div>
    
      <form onSubmit={sendData} className = "uform">

        
          <label for="Capacity">Capacity</label><br></br>
          <input type="text" className="form-control" id="Capacity"  placeholder="Capacity" 
            onChange={(e) => {

              setCapacity(e.target.value);  //assigng values to Capacity

            }} />
            
       
        

          
            
          <label for="Type">Type</label><br></br>
          <input type="text" className="form-control" id="Type"  placeholder="Enter Type"
            onChange={(e) => {

              setType(e.target.value);  

            }} />
            

            
        
          <label for="Cost">Cost</label><br></br>
          <input type="text" className="form-control" id="Cost" placeholder="Enter Cost"
            onChange={(e) => {

              setCost(e.target.value);  
            }} />
            
            
          <label for="Description">Description</label><br></br>
          <input type="text"className="form-control"  id="Description" placeholder="Enter Description"
            onChange={(e) => {

              setDescription(e.target.value);  

            }} />
            
            
           

           
            
            <br></br>
        <input type="submit" value="Update"/>
              
          
</form>
       
            </div>
    )
}

