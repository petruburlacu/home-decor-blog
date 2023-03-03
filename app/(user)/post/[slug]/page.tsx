import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import resolveUrl from "../../../../util/image-url-helper";

type Props = {
    params: {
        slug: string;
    };
};

async function Post({ params: {slug}}: Props) {
    const query = groq`
        *[_type == "post" && slug.current == $slug][0] {
            ...,
            author->,
            categories[]->
        }
    ` 

    const post: Post = await client.fetch(query, {slug});

    
    return (
        <article className="px-10 pb-28">
            <section className="space-y-2 border border-[#F7AB0A] text-white">
                <div className="relative min0h056 flex flex-col md:flex-row justify-between">
                    <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                        <Image 
                            className="object-cover object-center mx-auto"
                            src={resolveUrl(post.mainImage).url()}
                            alt={post.author.name}
                            fill
                        />
                    </div>

                    <section className="p-5 w-full bg-[#F7AB0A]">
                        <div className="flex flex-col md:flex-row justify-between gap-y-5">
                            <div>
                                <h1 className="text-4xl font-extrabold">
                                    {post.title}
                                </h1>

                                <p>
                                    {
                                        new Date(post._createdAt).toLocaleDateString("en-Us", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric"
                                        })
                                    }
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Image 
                                    className="rounded-full"
                                    src={resolveUrl(post.author.image).url()}
                                    alt={post.author.name}
                                    width={40}
                                    height={40}
                                />

                                <div className="w-64">
                                    <h3>{post.author.name}</h3>
                                    <div>
                                        {/* TODO: author bio */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="italic pt-10">{post.description}</h2>
                            <div>
                                {post.categories.map((category) => (
                                    
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </article>
    )
}

export default Post;