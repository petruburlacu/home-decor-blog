import Image from "next/image";
import resolveUrl from "../util/image-url-helper";

type Props = {
    posts: Post[];
};

function BlogList({ posts }: Props) {  
  return (
    // <div>
    //   <hr className="border-[#F7AB0A] mb-4" />
    //   <>
    //     {posts.map((post) => (
    //       <>
    //         <div key={post._id} className="flex flex-col group cursor-pointer">
    //           <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
    //             { post?.mainImage &&
    //               <Image
    //                 className="object-cover object-left lg:object-center"
    //                 src={resolveUrl(post.mainImage).url()}
    //                 alt={'Image not found for ' + post.title}
    //                 fill 
    //               />
    //             }
    //           </div>
    //         </div>
    //       </>
    //     ))}
    //   </>
    // </div>
    <>

    {/* Left at minute 1:35:00 */}
<div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to organize your home with our cheerful advice.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <article key={post._id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                { post?.mainImage && 
                  <Image
                    src={resolveUrl(post.mainImage).auto("format").url()}
                    alt={'Image not found for ' + post.title}
                    fill
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                }
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post._createdAt} className="text-gray-500">
                      {new Date(post._createdAt).toLocaleDateString(
                        "en-Us", {
                          day: "numeric",
                          month: "long",
                          year: "numeric"
                        }
                      )}
                    </time>
                    <a
                      href="/"
                      className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {'category'}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="/">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {
                        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.'
                      }
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <img src={resolveUrl(post.author.image).url()} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href="/">
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-gray-600">{'Administrator / Blogger'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default BlogList;