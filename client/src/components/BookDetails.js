import {useQuery} from '@apollo/client';
import {getBookQuery} from '../queries/queries'


const BookDetails = (bookid) => {
    const DisplayBookDitails = () => {
        const {book} = data
        if (book){
            return(
                <div >
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        {
                            book.author.books.map(book => {
                                return <li key={book.id}>{book.name}</li>
                            })
                        }
                    </ul>
                </div>
            )
        } else {
            return (
                <div> No Book Selected</div>)
        }
    }
    const { data,loading,error} = useQuery(getBookQuery,{variables:{id:bookid.bookid}})
    // console.log(data.book)
    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="loading">Error :</p>;

    return (
        <div id="book-details">
            <DisplayBookDitails/>
        </div>
    )
}

export default BookDetails;