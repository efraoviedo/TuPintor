import { FeaturedPosts } from "../sections/index";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Home({ posts }) {
  return (
    <main className="container mx-auto px-1 md:px-2 mb-8">
      <Head>
        <title>
          Pintores en bogotá. Pintamos Casas, apartamentos, Locales, Oficinas{" "}
        </title>
        <meta
          name="description"
          content="Esta es una pagina web ofreciendo servicios de pintura en general."
        ></meta>
        <meta
          name="google-site-verification"
          content="8DnNkwa4PLrO9Uo0TtFU2mn6k1LGJfY7qX2ZfWtcXF4"
        />
        <meta name="robots" content="index, follow"></meta>
      </Head>

      {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 bg bg-yellow-500"> */}
      <div className="flex flex-col md:flex-row lg:flex-row">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      <FeaturedPosts />
      
      <Footer /> 
    </main>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
