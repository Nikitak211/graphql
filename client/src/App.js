import React from 'react';

//components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const App = () => {
  return (
      <div id="main">
        <h1> Reading list</h1>
        <BookList key="bookList"/>
        <AddBook key="AddBook"/>
      </div>
  );
}

export default App;
