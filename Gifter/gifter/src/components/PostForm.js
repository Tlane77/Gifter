import React, { useState } from 'react';

import "../Posts/Post.css";
import { Form, Col, Button, Row } from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactFormBuilder } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';



function PostForm(props) {
    const [post, setPost] = useState({ userId: parseInt(sessionStorage.activeUserID), title: "", url: "", caption: "" });
    let newVariable = props.placeConstruct;


    const handleFieldChange = evt => {
        const stateToChange = { ...post };
        stateToChange[evt.target.id] = evt.target.value;
        setPost(stateToChange);
    };

    const constructNewestPost = evt => {
        evt.preventDefault();
        addPost(post).then(() => {
            getAllPosts()
        })
    };


    return (
        <>
            <Form>
                <Row className="PostRow">
                    <Col>
                        <FormGroup className="postFormGrp" controlId="name">
                            <Form.Label className="postformLbl">Post</Form.Label>
                            <Form.Control
                                className="articleFormCtl"
                                type="text"
                                onChange={handleFieldChange}
                                placeholder="Enter a Name" />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup className="postFormGrp" controlId="date">
                            <FormLabel className="postformLbl">Comments</FormLabel>
                            <FormControl
                                className="commentsformLbl"
                                type="text"
                                onChange={handleFieldChange}
                                placeholder="Enter Comment" />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup className="postFormGrp" controlId="place">
                            <FormLabel className="postformLbl">Providers</FormLabel>
                            <FormControl
                                className="ProviderformLbl"
                                type="text"
                                onChange={handleFieldChange}
                                placeholder="Enter a Provider" />
                        </FormGroup>
                    </Col>
                    {/* <Button
                        className="PostSubmitButton"
                        variant="custom"
                        id="postButton"
                        type="submit"
                        onClick={constructNewestPost}>
                        Submit
                    </Button> */}
                    <Button onClick={ConstructPost} type="submit">Add Post</Button>
                </Row>
            </Form>

        </>
    );
}


export default PostForm;