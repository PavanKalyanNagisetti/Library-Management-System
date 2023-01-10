import { useState } from 'react';
import '../Styles/addBook.css'
import { useNavigate } from 'react-router-dom';
const AddBook = () => {
    //title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl

        let[title,setTitle] =useState("")
        let[authors,setAuthors] =useState("")
        let[categories,setCategory] =useState("")
        let[pageCount,setPageCount] =useState("")
        let[shortDescription,setShort] =useState("")
        let[longDescription,setLong] =useState("")
        let[thumbnailUrl,setUrl] =useState("")

        let navigate = useNavigate()
        let handleSubmit =(x)=>{
            x.preventDefault();  //prevent reloading of the page
            //data to be posted
            let bookData = {title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}
            //posting to the server
            fetch('http://localhost:4000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
           body:JSON.stringify(bookData)
        })
        alert('book added successfully')
        navigate('/adminpage/book-list')
    }

    return (
        <div className="addBook">
            <h1>Add a book</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        {/* <label  htmlFor="">Title           :</label>  */}
                        <input value={title} onChange={(x)=>setTitle(x.target.value)} type="text" placeholder="Title of the book" required/> <br />
                    </div>
                    <div className="authors" >
                        {/* <label htmlFor="">Author:</label> */}
                        <input value={authors} onChange={(x)=>setAuthors(x.target.value)}  type="text" placeholder="Author name" required/> <br />
                    </div>
                    <div className="categories">
                        {/* <label htmlFor="">Category:</label> */}
                        <input value={categories} onChange={(x)=>setCategory(x.target.value)}  type="text" placeholder="Category of the Book" required/> <br />
                    </div>
                    <div className="pageCount">
                        {/* <label htmlFor="">No.of Pages</label> */}
                        <input value={pageCount} onChange={(x)=>setPageCount(x.target.value)}  type="number" placeholder="page count" required /> <br />
                    </div>
                    <div className="thumbnailUrl">
                        {/* <label htmlFor="">ThumbnailURL:</label> */}
                        <input value={thumbnailUrl} onChange={(x)=>setUrl(x.target.value)}  type="text" placeholder="URL of the book" required />
                    </div>
                    <div className="shortDescription">
                        {/* <label htmlFor="">shortDescription:</label> */}
                        <textarea value={shortDescription} onChange={(x)=>setShort(x.target.value)}  placeholder="short Description" name="" id="" cols="30" rows="10"></textarea> <br />
                    </div>
                    <div className="longDescription">
                        {/* <label htmlFor="">longDescription:</label> */}
                       <textarea value={longDescription} onChange={(x)=>setLong(x.target.value)}  placeholder="long Description" name="" id="" cols="30" rows="10"></textarea><br />
                    </div>
                    
                    <button>Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;