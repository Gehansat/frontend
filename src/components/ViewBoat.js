import axios from "axios";
import React,{ useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDownloadExcel} from "react-export-table-to-excel";


//funtion for View boat details---------------------------------------------------------------
function View(){

    const [boats, setBoats] = useState([]);
    const Navigate=useNavigate()

 
  useEffect(() => {
    function getBoats() {
      axios
        .get("http://localhost:8080/Boat/")
        .then((res) => {
          setBoats(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getBoats();
  }, []);

  const updateBoat=(id)=>{
    sessionStorage.editboat_id = id;
    // alert(sessionStorage.editboat_id);
   
    window.location = `http://localhost:3000/update/?${id}`;
 }
  
    // function getBoats(){
    //   axios.get("http://localhost:8080/Boat/").then((res)=>{
    //     setBoats(res.data);
  
    //   }).catch((err)=>{
    //     console.log(err.message)
    //     alert(err.message)
    //   })
    // }
  
   /////delete boat------------------------------
    const deleteBoat = (boatId) => {
        axios
          .delete(`http://localhost:8080/Boat/delete/${boatId}`)
          .then((res) => {
            alert(`deleted successfully`);
            window.location.reload(false);
          })
          .catch((err) => {
            alert(err);
          });
      };
    

      const Update=(boatId)=>{
        console.log("error")
         Navigate('Update',{ state: { id: boatId } }
         )
        
    
      }
   
      const boatTabel = useRef(null)

    const { onDownload } = useDownloadExcel({
        currentTableRef: boatTabel.current,
        filename: "boat report",
        sheet: "boats"
      });






    return(


//displaying boat details in a table-------------------------------------------

<center><div class="bd"><br></br>
  <h2>Boat List</h2>
        <div>
          <br></br>
          
            <table border = "2"  id="MainTable" ref={boatTabel}>
        <thead>
            <tr>
            <th >Capacity</th>
              <th >Type</th>
              <th >Cost(Rs.)</th>
              <th >Description</th>
             
              <th >Remove</th>
              <th >Update</th>
              
            </tr>
            </thead>

            <tbody>
            {boats.map((boat) => (
              <tr>
                <td>{boat.Capacity}</td>
                <td>{boat.Type}</td>
                <td>{boat.Cost}</td>
                <td>{boat.Description}</td>
                
                <td>
                  <button id="btn" onClick={() => deleteBoat(boat._id)}>Delete</button>
                </td>

                <td>
                <button id="btn" onClick={() => updateBoat(boat._id)}>Update</button>
                {}
                </td>

              
              </tr>
            ))}
            </tbody>
        </table>

<br></br>
<button type="button" onClick={onDownload} className="btn btn-success float-right m-3">Download report</button>

        </div>
        </div>
        </center>
    )
            
            }

export default View;