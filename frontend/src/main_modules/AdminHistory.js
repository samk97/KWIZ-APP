import {useEffect} from 'react'
import axios  from 'axios';
const AdminHistory = (props) =>{ 


  useEffect(()=>{
     axios.post('http://localhost:4000/api/get-all-quiz',{ }).then(function(res){
     console.log(res);
     return ()=>{}
  }).catch(function(err){
    console.log(err);
  })
  },[])



  return (
    <>
      <div className="flex"></div>
    </>
  );
}

export default AdminHistory;
