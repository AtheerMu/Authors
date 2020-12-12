import React, { useEffect, useState } from 'react';
import { navigate  ,Link} from '@reach/router';
import axios from 'axios';


const EditAuthor =  ({id})  => {

    const [name, setName] = useState(""); 
    const [errors, setErrors] = useState([]); 
  
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
              console.log(res)
              setName(res.data.author.name);
            })
           
    }, [])
    const update = e => {
        e.preventDefault();
        const author = {name};
        axios.put(`http://localhost:8000/api/authors/update/${id}`, author)
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
            <h4 className="text-capitalize"> Edit this author</h4>
            <div className="row my-5 " >
            <div className="col-sm-5 offset-sm-4">
              <div className="card">
                <div className="card-body">
                
                {
                      name?
                  <form onSubmit={update}>
                   

             
                    <div className="form-group">
                      
                     
                   
                    <label>Name</label>
                  
                    <input type="text" className="form-control" name="name" value={name} onChange={e => setName(e.target.value)} />
                    {errors.map((err, index) => <p  className="text-danger" key={index}>{err}</p>)}
                  </div>
                  
                  <button type="submit" className="btn btn-dark btn-block">Submit</button>
                 
                    <button className="btn btn-warning btn-block" onClick={()=> navigate("/")}>Cancel</button>
                  
                       
           
                </form>
                  :
                  <p>We're sorry, but we could not find
                     the author you are looking for. Would you like to add this author to our database? <Link to="/AddAuthor">Add New Author</Link>
                     </p>
                 }
              </div>
                  
            </div>
          </div>
        </div>
    </>
    ) }

export default EditAuthor
    
    

