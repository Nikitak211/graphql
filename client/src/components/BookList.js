import {useState} from 'react'
import {useQuery} from '@apollo/client';
import {getBooksQuery} from '../queries/queries'
import BookDetails from './BookDetails'


const BookList = () => {
    const { loading, error, data } = useQuery(getBooksQuery);
    const [select,setSelect] = useState(null)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    const Data = () => {
        return data.books.map(({ name, genre, id }) =>(
            
                <li 
                    key={id}
                    onClick={(e) => {
                        e.preventDefault();
                        setSelect(id);
                    }}
                >{name}: {genre}</li>
            ))
    }
    return (
        <div>
            <ul  id="books-list">
                <Data/>
            </ul>
            <BookDetails bookid={select} />
        </div>   
    )
}

export default BookList;