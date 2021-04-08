import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import { getUserList } from "./redux/actions/getUserAction";
import { getPosts } from "./redux/actions/getPostAction";

function App(props) {
  const { isLoading, getUserList, getPosts, userData, post } = props;
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="App">
      <button onClick={() => getUserList()}>Call API</button>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && <p>{JSON.stringify(userData)}</p>}

      <h1>Post data fetch API on page Load</h1>

      {!isLoading && <p>{JSON.stringify(post)}</p>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
    isLoading: state.user.isLoading,
    post: state.post.post,
  };
};
export default connect(mapStateToProps, { getUserList, getPosts })(App);
