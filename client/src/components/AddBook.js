
import { useState } from 'react';

import { useQuery } from '@apollo/client';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries'
import { useMutation } from '@apollo/react-hooks';

const AddBook = () => {
    const [name, setBookName] = useState('')
    const [genre, setGenre] = useState('')
    const [author, setAuthor] = useState('')
    // console.log(addBookMutation)
    const [addBook] = useMutation(addBookMutation);
    const DisplayAuthors = () => {
        const { loading, data } = useQuery(getAuthorsQuery);

        if (loading) return <option disabled>Loading...</option>;

        return data.author.map(({ name, id }) =>
            <option key={id} value={id}>{name}</option>
        )
    }

    const submitForm = (e) => {
        e.preventDefault();
        addBook({
            variables: {
                name: name,
                genre: genre,
                authorid: author,
            },
            refetchQueries: [{ query: getBooksQuery }]
        })
    }

    return (
        <form
            id="add-book"
            onSubmit={submitForm.bind(this)}
        >
            <div className="field">
                <label>Book Name:</label>
                <input
                    type="text"
                    onChange={(e) => setBookName(e.target.value)}
                />
            </div>

            <div className="field">
                <label>Genre:</label>
                <input
                    type="text"
                    onChange={(e) => setGenre(e.target.value)}
                />
            </div>

            <div className="field">
                <label>Author:</label>
                <select
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                >
                    <option>Select Author</option>
                    <DisplayAuthors />
                </select>
            </div>

            <button>+</button>
        </form>
    );
}

export default AddBook;