"use client";
import { useQuery } from "@apollo/client";
import { GET_POST } from "../../../graphql/queries";
import { use } from "react";
import Link from "next/link";

export default function PostDetail({ params }) {
  const { id } = use(params);
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Header */}
      <div className="bg-white shadow-md py-6 mb-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center mb-4">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
              Back to posts
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Title Section */}
          <div className="p-6 sm:p-10 border-b border-gray-100">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              {data.post.title}
            </h1>

            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold mr-3">
                {data.post.author.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-gray-700">{data.post.author}</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 sm:p-10">
            <div className="prose max-w-none prose-lg prose-blue prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-blue-600">
              <p>{data.post.content}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
