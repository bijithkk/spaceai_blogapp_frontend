"use client"; // Required for Apollo Client hooks
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../graphql/queries";
import Link from "next/link";
import ClientProvider from "./client-provider";

// export default function Home() {
//   const { loading, error, data } = useQuery(GET_POSTS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <ClientProvider>
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
//       <div className="grid gap-4">
//         {data.posts.map((post) => (
//           <div key={post.id} className="border p-4 rounded shadow">
//             <Link href={`/post/${post.id}`}>
//               <h2 className="text-xl font-semibold hover:text-blue-600">{post.title}</h2>
//             </Link>
//             <p className="text-gray-600">By {post.author}</p>
//             <p className="text-sm text-gray-500">
//               {new Date(post.createdAt).toLocaleDateString()}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//     </ClientProvider>
//   );
// }

export default function BlogPostList() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ClientProvider>
      <div className="container mx-auto p-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Blog Posts
        </h1>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {data.posts.map((post) => (
            <div
              key={post.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <div className="p-6">
                <Link href={`/post/${post.id}`} className="block group">
                  <h2 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.content}
                  </p>
                </Link>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
                      {post.author.charAt(0)}
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      {post.author}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ClientProvider>
  );
}
