import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/api";
import DeleteBtn from "../components/DeleteBtn";
import Image from "../components/Image";
import HyperLink from "../components/HyperLink";

function Saved(props) {
  const [book, setBook] = useState({})


  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const { id } = useParams()
  useEffect(() => {
    API.getBook(id)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res =>
        setBook(res.data)
      )
      .catch(err => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-2">
          <Link to="/search">← Back to Search</Link>
        </Col>
      </Row>
      <Jumbotron>
        {book.length ? (
          <List>
            {book.map(saved => (
              <ListItem key={saved._id}>
              <Row>
                <Col size="md-12">
                  <DeleteBtn onClick={() => deleteBook(saved._id)} />
                  <h1>
                    {saved.title} by {saved.author}
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col size="md-10 md-offset-1">
                  <article>
                    <p>
                      {saved.description}
                    </p>
                  </article>
                </Col>
              </Row>
              <Row>
                <Col size="md-10 md-offset-1">
                  <Image thumbnail={saved.thumbnail} alt={saved.title} />
                </Col>
              </Row>
              <Row>
                <Col size="md=10 md-offset-1">
                  <HyperLink href={saved.href} />
                </Col>
              </Row>
              </ListItem>
        ))}
          </List>
        ) : (
            <h3>No Saved Books</h3>
          )}
      </Jumbotron>
    </Container>
  );
}


export default Saved;
