import React, { useEffect, useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { List, ListItem } from '../components/List';
import DeleteBtn from '../components/DeleteBtn';
import { Container, Row, Col } from 'reactstrap';
import './style.css';

function SavedBooks() {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((res) => setSavedBooks(res.data))
      .catch((err) => console.log(err));
  }

  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Jumbotron className='fluid'>
        <Container fluid>
          <Col>
            <h1>My Saved Books</h1>
          </Col>
        </Container>
      </Jumbotron>
      <br></br>
      <br></br>
      <Container fluid='md' id='resultsdiv'>
        <Row>
          {savedBooks.length ? (
            <List>
              {savedBooks.map((savedBook) => (
                <ListItem key={savedBook._id}>
                  <a href={savedBook.link}>
                    <img
                      src={
                        savedBook.image === undefined
                          ? ''
                          : `${savedBook.image}`
                      }
                      alt={savedBook.title}
                    />
                  </a>

                  <strong className='saved-book'>
                    {savedBook.title + '   '}
                    by
                    {'   ' + savedBook.authors}
                  </strong>

                  <p className='book-description'>{savedBook.description}</p>

                  <DeleteBtn onClick={() => deleteBook(savedBook._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h2>No Books to Display</h2>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default SavedBooks;
