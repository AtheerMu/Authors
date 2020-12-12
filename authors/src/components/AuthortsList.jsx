import React from 'react'
import axios from 'axios';
import {navigate, Link} from '@reach/router';


export default function AuthortsList({author , id ,removeFromDom , name }) {
    const deleteProduct = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${authorId}`)
            .then(res => {
                removeFromDom(authorId)
            })
            navigate("/")
    }
    
   
   
    return (

        <>
         <div>
         <Link to="/AddAuthor">
        <p className="font-weight-bold">Add an Author</p>
        </Link>

      
        <p className="text-monospace">We have quotes by</p>
     
         
         <table className="table">
         <thead className="thead-dark">
            <tr>
                       
                <th>Author</th>
                <th>Action Available</th>
            </tr>
        </thead>
        <tbody>
        {author.sort((a,b)  =>(a.name.localeCompare(b.name))).map((author , idx) =>
        <tr key={idx}>
        <td  scope="row"> {author.name}</td>
        <td>
        <Link to={`/${author._id}/edit`}>
        <button className="btn btn-sm btn-outline-dark mt-4 ml-4">Edit</button>
        </Link>
        <button className="btn btn-sm btn btn-danger mt-4 ml-4" onClick={(e)=>{deleteProduct(author._id)}}>
                    Delete
        </button>
        </td>
     
        </tr>
           )}
        

         </tbody>
                
         </table>
         
        </div>
        </>  
    )
}



