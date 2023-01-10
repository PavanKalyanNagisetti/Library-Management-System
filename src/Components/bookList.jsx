import { Link } from 'react-router-dom';
import '../Styles/bookList.css'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
const BookList = () => {
    let [books, setBooks] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(' http://localhost:4000/books')
            let data = await response.json()
            setBooks(data)
        }
        fetchData()
    }, [books])
    //delete a book from server
    let handleDelete = (id, title) => {                  //this method deletes the data permanently
        fetch(`http://localhost:4000/books/${id}`, {
            method: 'DELETE'
        });
        alert(`${title} will be deleted permanently`)
    }
    let navigate = useNavigate()
    let handleRead = (id) => {
        navigate(`${id}`);

    }

    return (
        <div className="bookList ">
            <h1>Book List:{books.length}</h1>

            <div className="books_section">
                {books.map(data => (
                    <div className="bookdata">
                        <div className="img">
                            <img src={data.thumbnailUrl} height="330" width="170" alt="" />

                            <div className="bookcard">
                                <h2>{data.title}</h2>

                                {/* <p><b>Publish Date:{}</b>{ }</p> */}
                                <p><b><i>by</i> </b><i>{data.authors}</i></p>
                                <p><b>Category:</b> {data.categories}</p>
                                {/* <p><b>Description:</b>{data.shortDescription}</p> */}
                                {/* <p><b>Description:</b>{data.longDescription}</p> */}
                                <p><b> No.of Pages:</b>{data.pageCount}</p>
                                <button  onClick={() => handleRead(data.id)} className="read"><Link>Read more....</Link> </button> <span>    </span>
                                <button onClick={() => handleDelete(data.id, data.title)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
                    
         
        </div>
    );
}

export default BookList;