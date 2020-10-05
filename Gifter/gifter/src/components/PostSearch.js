import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../Providers/PostProvider";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

const PostSearch = () => {
    const [search, setSearch] = useState("");
    const { searchPosts, getAllPosts } = useContext(PostContext);

    const handleFieldChange = evt => {
        const stateToChange = { ...search }
        stateToChange[evt.target.id] = evt.target.value;
        setSearch(stateToChange);
    }

    const Search = evt => {
        evt.preventDefault();
        searchPosts(search);
    }



    return (
        <>
            <Form className="postForm postListSearch">
                <FormGroup>
                    <Label for="search">Title</Label>
                    <Input type="text" name="search" id="search" placeholder="Enter Search" onChange={handleFieldChange} />
                </FormGroup>
                <Button onClick={Search} type="submit">Search</Button>
            </Form>
        </>
    )
}

export default PostSearch;