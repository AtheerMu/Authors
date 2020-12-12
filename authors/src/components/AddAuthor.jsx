import React, { useState } from 'react'
import axios from 'axios';
import { navigate  ,Link} from '@reach/router';




const AddAuthor =  props => {
 
    const [name, setName] = useState(""); 
    const [errors, setErrors] = useState([]); 

    const add = e => {
      e.preventDefault();
      const author = {name};
      axios.post("http://localhost:8000/api/authors/new", author)
        .then(res => {
          console.log(res);
          navigate("/");
          
        })
        
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) { 
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        });

        
        
    }
   
    return (

        <>
        <Link to="/">
        <p className="font-weight-bold">Home</p>
        </Link>
        <h4 className="text-capitalize"> 
        Add a new  author
        </h4>
        <div className="row my-5">
        <div className="col-sm-5 offset-sm-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={add}>
         
                <div className="form-group">
                
                <label>Name</label>
                <input type="text" className="form-control" name="name" value={name} onChange={e => setName(e.target.value)} />
                {errors.map((err, index) => <p  className="text-danger" key={index}>{err}</p>)}
              </div>
              <button type="submit" className="btn btn-dark btn-block">Submit</button>
                <button className="btn btn-warning btn-block" onClick={()=> navigate("/")}>Cancel</button>
       
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}

export default AddAuthor

