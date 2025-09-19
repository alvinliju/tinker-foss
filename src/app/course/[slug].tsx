import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Link from "next/link";

const chapterOrder = [
  "introduction",
  "setup",
  "github/repository",
  "github/cloning",
  "branching",
  "pull-requests",
];

export default function CoursePage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <p>Loading...</p>;

  const flatSlug = Array.isArray(slug) ? slug.join("/") : slug;
  const currentIndex = chapterOrder.indexOf(flatSlug);
  const nextSlug = chapterOrder[currentIndex + 1];

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 capitalize">{flatSlug}</h1>
      <p className="mb-4">
        Content for <strong>{flatSlug}</strong> goes here.
      </p>

      {nextSlug && (
        <Link
          href={`/course/${nextSlug}`}
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Next →
        </Link>
      )}
    </Layout>
  );
}
