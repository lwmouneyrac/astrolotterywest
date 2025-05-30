import { useEffect, useState } from "preact/hooks";
import BlogCardRectangle from "./BlogCardRectangle.jsx";
import BlogCardSquare from "./BlogCardSquare.jsx";
// import Button from "./Button.astro";

export default function BlogSearchResults({ posts }) {

  const [search, setSearch] = useState('');

  const searchPost = posts.filter(
    (post) => post.body?.includes(search) || post.data.title.includes(search),
  );

  // sort the posts by alphabetical markeddown name
  const blogPosts = searchPost.sort((a, b) => a.data.id - b.data.id);

  useEffect(() => {
    const searchInput = document.getElementById('searchInput');
    const handleInput = (e) => {
      console.log("event: ", e)
      setSearch(e.target.value)
    }
    if (searchInput) {
      console.log("adding listener")
      searchInput.addEventListener('input', handleInput);
      return () => searchInput.removeEventListener('input', handleInput)
    }
  }, [])

  return (<div class="mb-12">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[max(340px)] gap-6"
    >
      {
        blogPosts.map((post, index) => {
          const rowIndex = Math.floor(index / 2); // two items per row
          const isFirstInRow = index % 2 === 0;

          // Determine if this should be a rectangle or square card based on position
          const isRectangle =
            (rowIndex % 2 === 0 && isFirstInRow) ||
            (rowIndex % 2 === 1 && !isFirstInRow);

          return (
            <div class={isRectangle ? "col-span-1 lg:col-span-2" : "col-span-1"}>
              {isRectangle ? (
                <BlogCardRectangle
                  title={post.data.title}
                  text={post.data.text}
                  imageUrl={post.data.imageUrl}
                  link={`/posts/${post.id}`}
                  category={post.data.category}
                  buttonText={post.data.buttonLabel || "Read more"}
                />
              ) : (
                <BlogCardSquare
                  title={post.data.title}
                  text={post.data.text}
                  imageUrl={post.data.imageUrl}
                  link={`/posts/${post.id}`}
                  category={post.data.category}
                  buttonText={post.data.buttonLabel || "Read more"}
                  secondLink={post.data.secondButtonUrl}
                  secondButtonText={post.data.secondButtonLabel || "Check me"}
                  buttonStyle={post.data.buttonStyle}
                  bgStyle={post.data.bgStyle}
                />
              )}
            </div>
          );
        })
      }
    </div>

    {/* <div class="flex justify-center mt-10">
      <Button
        label="Load more"
        url="#"
        class="!bg-primary !text-white !border-primary hover:!bg-primary/90 !px-6 !py-2"
      />
    </div> */}
  </div>);
}
