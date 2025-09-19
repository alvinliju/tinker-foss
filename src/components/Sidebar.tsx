import Link from "next/link";
import { useRouter } from "next/router";

type Chapter = {
  title: string;
  slug: string;
  subChapters?: Chapter[];
};

const chapters: Chapter[] = [
  { title: "Introduction", slug: "introduction" },
  { title: "Setting up Git", slug: "setup" },
  {
    title: "Working with GitHub",
    slug: "github",
    subChapters: [
      { title: "Creating a Repository", slug: "github/repository" },
      { title: "Cloning a Repository", slug: "github/cloning" },
    ],
  },
  { title: "Branching & Merging", slug: "branching" },
  { title: "Pull Requests", slug: "pull-requests" },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-64 bg-gray-100 p-4 border-r h-screen overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Course Chapters</h2>
      <ul className="space-y-2">
        {chapters.map((chapter) => (
          <li key={chapter.slug}>
            <Link
              href={`/course/${chapter.slug}`}
              className={`block p-2 rounded ${
                router.asPath.includes(chapter.slug)
                  ? "bg-blue-200 font-semibold"
                  : "hover:bg-gray-200"
              }`}
            >
              {chapter.title}
            </Link>

            {chapter.subChapters && (
              <ul className="ml-4 mt-1 space-y-1">
                {chapter.subChapters.map((sub) => (
                  <li key={sub.slug}>
                    <Link
                      href={`/course/${sub.slug}`}
                      className={`block p-2 text-sm rounded ${
                        router.asPath.includes(sub.slug)
                          ? "bg-blue-100 font-medium"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
