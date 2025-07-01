import { postAPI } from "../store/services/PostService";
import PostItem from "./PostItem";

const PostContainer2 = () => {
  const { data: posts, error, isLoading } = postAPI.useGetAllPostsQuery(5);

  return (
    <div>
      <div className="post__list">
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}
        {posts?.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default PostContainer2;
