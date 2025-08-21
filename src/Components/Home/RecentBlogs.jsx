import React, { useEffect, useState } from "react";

function RecentBlogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function fetchPosts() {
      try {
        const res = await fetch(
          "https://blog.traul.in//wp-json/wp/v2/posts?per_page=3&_embed",
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        if (isMounted) setPosts(data);
      } catch (err) {
        if (isMounted) setError(err.message || "Failed to load blogs");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchPosts();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-8 md:py-12 lg:py-8 xl:py-12">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 justify-between mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Latest <span className="text-orange-500">Blogs</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600">
          Updates and insights from Traul
        </p>
      </div>

      {loading && (
        <div className="text-gray-500">Loading recent blogs...</div>
      )}
      {error && (
        <div className="text-red-600">{error}</div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => {
            const title = post?.title?.rendered || "Untitled";
            const excerptHtml = post?.excerpt?.rendered || "";
            const link = post?.link || "#";
            const media = post?._embedded?.["wp:featuredmedia"]?.[0];
            const imageUrl =
              media?.media_details?.sizes?.medium?.source_url ||
              media?.source_url || "/logo-png.png";
            const date = new Date(post?.date);
            const formattedDate = isNaN(date) ? "" : date.toLocaleDateString();

            return (
              <a
                key={post.id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100"
              >
                <div className="aspect-[16/9] w-full bg-gray-100 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt="Blog cover"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <h3
                    className="text-lg font-semibold line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: title }}
                  ></h3>
                  <div className="text-sm text-gray-500">{formattedDate}</div>
                  <div
                    className="prose prose-sm max-w-none text-gray-600 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: excerptHtml }}
                  ></div>
                  <span className="text-orange-600 font-medium mt-1 inline-flex items-center gap-1">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default RecentBlogs;


