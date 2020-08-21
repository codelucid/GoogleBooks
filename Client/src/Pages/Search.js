import React, { useState, useEffect } from "react";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/api";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import Image from "../components/Image";
import HyperLink from "../components/HyperLink";

function Search() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})
    
    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    // Saves a book from the database with a given id, then reloads books from the db
    function saveBook(id) {
        API.saveBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        API.googleBook(formObject.title).then(function(res) {
            console.log(res);
            
        })
        // if (formObject.title) {
        //     API.saveBook({
        //         title: formObject.title,
        //         author: formObject.author,
        //         description: formObject.description,
        //         thumbnail: formObject.thumbnail,
        //         href: formObject.href
        //     })
        //         .then(res => loadBooks())
        //         .catch(err => console.log(err));
        // }
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Google Books Search!</h1>
                    </Jumbotron>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="title"
                            placeholder="Title (required)"
                        />
                        <FormBtn
                            disabled={!(formObject.title)}
                            onClick={handleFormSubmit}
                        >
                            Search for Book
                        </FormBtn>
                    </form>
                </Col>
            </Row>
            <Jumbotron>
            <Row>
                <Col size="md-12 sm-12">
                    {books.length ? (
                        <List>
                            {books.map(book => (
                                <ListItem key={book._id}>
                                    <Link to={"/books" + book._id}>
                                        <strong>
                                            {book.title} by {book.author}
                                        </strong>
                                    </Link>
                                    <article>
                                        <h5>Description</h5>
                                        <p>{book.description}</p>
                                    </article>
                                    <Image thumbnail={book.thumbnail} />
                                    <HyperLink href={book.href} />
                                    <SaveBtn onClick={() => saveBook(book._id)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
            </Row>
            </Jumbotron>
        </Container>
    );
}


export default Search;
