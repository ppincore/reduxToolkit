import { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";
import { fetchUsersAsync } from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";
import PostContainer2 from "./components/PostContaine2";

function App() {
  const dispatch = useAppDispatch();
  // const {users,isLoading,isError} =useAppSelector(state => state.userReducer)

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <PostContainer />
        <PostContainer2 />
      </div>
      {/* {isLoading && <h1>Loading</h1>}
      {isError && <h1>{isError}</h1>}
      {JSON.stringify(users)} */}
    </div>
  );
}

export default App;
