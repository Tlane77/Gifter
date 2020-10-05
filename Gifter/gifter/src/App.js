import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";


function App() {
  return (
    <div className="App">
      <PostProvider>
        {/* <AwesomeNewPostComponent/> */}
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;