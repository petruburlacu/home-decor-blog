type Props = {
    posts: Post[];
};

function BlogList({ posts }: Props) {
  console.log("🚀 ~ file: BlogList.tsx:6 ~ BlogList ~ posts length:", posts.length)
  return (
    <div>BlogList</div>
  );
}

export default BlogList;