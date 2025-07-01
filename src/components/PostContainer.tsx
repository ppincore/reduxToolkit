import { useEffect, useState } from "react";
import { postAPI } from "../store/services/PostService";
import PostItem from "./PostItem";
import type { IPost } from "../models/IPost";

const PostContainer = () => {
  const [limit, setLimit] = useState<number>(20);
  // const { data: posts, error, isLoading, refetch } = postAPI.useGetAllPostsQuery(limit,{
  //   pollingInterval: 3000
  // });
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useGetAllPostsQuery(limit);
  const [createPost, { isLoading: isLoadingPost }] =
    postAPI.useCreatePostMutation();
  const [deletePost] = postAPI.useDeletePostMutation();
  const [updatePost] = postAPI.useUpdatePostMutation();

  useEffect(() => {
    setTimeout(() => setLimit(20), 3000);
  }, [limit]);

  const handleCreate = async () => {
    const title = prompt();
    if (title) {
      await createPost({ title: title, body: title } as IPost);
    }
  };

  const handleRemove = async (post: IPost) => {
    await deletePost(post);
  };

  const handleUpdate = async (post: IPost) => {
    await updatePost(post);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="post__list">
        <button onClick={handleCreate}>ADD POST</button>
        {isLoadingPost && <div>Post Loading</div>}
        <button onClick={() => refetch()}>REFECTH</button>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}
        {posts?.map((post) => (
          <PostItem
            post={post}
            key={post.id}
            remove={handleRemove}
            update={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
