import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate,useLocation,Link } from "react-router-dom";

// ------------------------------------------------------------------------------------------------


function UpdateBoat(props) {



    const [Capacity, setCapacity] = useState("");
    const [Type,setType] = useState("");
    const [Cost,setCost] = useState("");
    const [Description,setDescription] = useState("");
    
    const location=useLocation();
    const navigate = useNavigate();


    const UpdateBoat = {
            Capacity,
            Type,
            Cost,
            Description
           
    }

    

    useEffect(() => {

            console.log(location.state.id)

        axios.get(`http://localhost:8080/Boat/get/${location.state.id}`)
        .then((res)=> {
            

            console.log(res.data.Data.Capacity)

            setCapacity(res.data.Data.Capacity)
            setType(res.data.Data.Type)
            setCost(res.data.Data.Cost)
            setDescription(res.data.Data.Description)
           
            
        })
        .catch((err)=> {
            alert(err)
        })
        
        

    }, [props])

    function updateData(e){
        e.preventDefault();
        axios.put(`http://localhost:8080/Boat/update/${location.state.Id}`, UpdateBoat)
        .then(()=> {
            alert("Boat Updated")
            navigate("/");
        
        }).catch((err)=> {
            alert(err)
        })
       
    } 

    return(

        <div className="">
           
           <form onSubmit={updateData}>
                <div className="form-group">
                    <label for="Capacity"><b>Capacity</b></label>
                    <input type="text" className="form-control" id="Capacity" 
                    value = {Capacity}
                    onChange= {(e) =>{
                        setCapacity(e.target.value);
                    }}
                     />
                </div>

                
                <div className="form-group">
                    <label for="Type"><b>Type</b></label>
                    <input type="text" className="form-control" id="Type" 
                    value = {Type}
                    onChange= {(e) =>{
                        setType(e.target.value);
                    }}
                    />
                </div>

                <div className="form-group">
                    <label for="Cost"><b>Cost</b></label>
                    <input type="text" className="form-control" id="Cost" 
                     value = {Cost}
                     onChange= {(e) =>{
                        setCost(e.target.value);
                    }}
                    />
                </div>    

                <div className="form-group">
                    <label for="Description"><b>Description</b></label>
                    <input type="text" className="form-control" id="Description" 
                      value = {Description}
                      onChange= {(e) =>{
                        setDescription(e.target.value);
                    }}
                     />
                </div>    

                  

                     

                

        <div class="form-submit">            
            <button type="submit" className="btn btn-primary">Update Boat</button>&nbsp;&nbsp;&nbsp;&nbsp;
            
        </div>
        <div class="">            
        <Link to="/"><button  className="btn btn-danger">Cancel</button></Link> 
        </div>

         </form>
        </div>
   
     );
}

export default UpdateBoat;