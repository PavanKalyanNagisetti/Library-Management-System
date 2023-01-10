import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ReadBook = (props) => {
    let [book,setBook] =useState([])
    let params =useParams()
    useEffect(()=>{
        let fetchData=async() =>{
            let response=await fetch (`http://localhost:3000/books/${params.id}`)
            let data =await response.json()
            setBook(data)
        }
        fetchData()
    })
    let navigate = useNavigate()
  let back= (x)=>{
    x.preventDefault()
         navigate('/adminpage/book-list')
  }

    return ( 
        <div className="readBook">
            
            <h1>{book.title}</h1>
            <p>{book.shortDescription}</p>
            <p>{book.longDescription}</p>
            <button onClick={back}> Back  </button>
           

        </div>
     );
}
 
export default ReadBook;