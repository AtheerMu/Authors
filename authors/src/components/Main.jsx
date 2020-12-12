import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import ProductForm from './ProductForm';
import AuthortsList from './AuthortsList';





export default function Main (){
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors/')
            .then(res=>{
                console.log(res.data)
                setAuthor(res.data.author);
              console.log(author)
                setLoaded(true);
            });
    },[])


  
    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id != authorId));
    }
   
   
    return (
        

        <>


        <AuthortsList  author={author} author ={author} removeFromDom={removeFromDom}/>
        
       
        </>

    
        
    )
}





