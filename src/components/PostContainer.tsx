import { useEffect, useState } from "react";
import { postAPI } from "../store/services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
  const [limit, setLimit] = useState<number>(10);
  // const { data: posts, error, isLoading, refetch } = postAPI.useGetAllPostsQuery(limit,{
  //   pollingInterval: 3000
  // });
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useGetAllPostsQuery(limit);
  const [createPost, {}] = postAPI.useCreatePostMutation()

  useEffect(() => {
    setTimeout(() => setLimit(3), 3000);
  }, [limit]);

  const handleCreate = async () => {
    const title = prompt()
    await createPost({title:title, body:title})
  }

  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreate}>ADD POST</button>
        <button onClick={() => refetch()}>REFECTH</button>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}
        {posts?.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
