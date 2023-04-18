
import axios from 'axios';
import { useState } from 'react';
function PreviewPage(props) {
    const data = localStorage.getItem("quiz");
    const startTime = localStorage.getItem("time");
    const runTime = localStorage.getItem("runTime");
    const [title,setTitle] = useState("");
    
    const handleClick = async  (e) => {
       e.preventDefault();
       console.log();

       var l = JSON.parse(data);
       var questions = [];


       for(var i = 0;i<l.length;i++){
           questions.push((l[i]._id).toString());
       }



      await axios.post('http://localhost:4000/api/save-quiz',{ questions,startTime,runTime,title}).then(function(res){
          localStorage.removeItem("quiz");
          localStorage.removeItem("time");
          localStorage.removeItem("runTime");
          alert("saved");
      }).catch(function(err){
        alert("Error");
      })




    }

    return (
      <>
        <div className="flex"></div>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <button onClick = {handleClick}>Save</button>
      </>
    );
  }
  
  export default PreviewPage;
  