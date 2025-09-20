import Link from "next/link";
import Image from "next/image";
export default function TinkerHubLetter() {
    return (
      <div className="min-h-screen bg-white">
        {/* Navigation Header */}
        <div className="border-b border-gray-100">
          <div className="max-w-2xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image 
                  src="https://paths.tinkerhub.org/logo.png" 
                  alt="TinkerHub Logo" 
                  width={32} 
                  height={32}
                  className="rounded-md"
                />
                <span className="font-medium text-black">TinkerHub</span>
              </Link>
              <nav className="flex gap-6">
                <Link href="/course" className="text-gray-500 hover:text-black transition-colors text-sm">Courses</Link>
                <Link href="/letter" className="text-black text-sm">Letter</Link>
                <Link href="/leaderboard" className="text-gray-500 hover:text-black transition-colors text-sm">Leaderboard</Link>
              </nav>
            </div>
          </div>
        </div>

        <header className="py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-12">
               {/* Official TinkerHub Logo */}
            <div className="h-full w-full  bg-white rounded-lg flex items-center justify-center mx-auto mb-8 p-2">
              <Image 
                src="https://paths.tinkerhub.org/logo.png" 
                alt="TinkerHub Logo" 
                width={120}
                    height={120}
                className="rounded-md"
              />
            </div>
              <h1 className="text-4xl md:text-5xl font-normal text-black mb-6 text-balance">
                A Letter to Everyone Who Builds the Future
              </h1>
  
              <div className="text-gray-500 text-sm space-y-1">
                <p>by: TinkerHub.</p>
                <p>
                  published: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}.
                </p>
              </div>
            </div>
          </div>
        </header>
  
        <main className="max-w-2xl mx-auto px-4 pb-16">
          <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
            <div className="space-y-6">
              <p className="text-xl">Hey,</p>
  
              <p>
                If you're reading this, you probably care about building things.
                <br />
                Not just code, not just projects — but opportunities, confidence, change.
              </p>
  
              <p>That's what TinkerHub has always been about.</p>
  
              <p>
                When we started, we didn't have all the answers. We just knew one thing: there are brilliant people
                everywhere who never get a chance to realize how brilliant they are.
              </p>
  
              <p>
                The school system, the college system — they don't always encourage you to experiment, to break things, to
                learn at your own pace. Most of us are taught to memorize, not to explore.
              </p>
  
              <p>
                But something magical happens when you get the freedom to try.
                <br />
                The first time you write a program that actually works, ship a project with friends, or solve a problem
                that matters to you — something clicks.
              </p>
  
              <p>
                <strong>That spark is everything.</strong>
              </p>
            </div>
  
            <div className="space-y-6">
              <p>
                Over the last few years, we've been obsessed with that spark.
                <br />
                And somehow, a small idea grew into something massive:
              </p>
  
              <ul className="space-y-2 pl-6">
                <li>• 18,000+ makers who have tinkered, taught, and shared.</li>
                <li>• 1,000+ events where people have connected and collaborated.</li>
                <li>• Thousands of projects built and celebrated.</li>
                <li>• Careers started, startups launched, new confidence unlocked.</li>
              </ul>
            </div>
  
            <div className="py-8">
              <div className="flex flex-col gap-3 mb-4">
                <img
                  src="/placeholder-wmsv9.png"
                  alt="TinkerHub hackathon"
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <img
                  src="/placeholder-goy70.png"
                  alt="TinkerHub meetup"
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <img
                  src="/placeholder-k267i.png"
                  alt="Open source session"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-400 text-center">moments from our journey together.</p>
            </div>
  
            <div className="space-y-6">
              <p>
                But the real story isn't in the numbers.
                <br />
                It's in the late-night debug sessions, the "aha!" moments, the friendships formed, the belief that grows
                every time someone realizes:
              </p>
  
              <div className="border-l-4 border-gray-200 pl-6 py-4 my-8 border-none">
                <p className="italic text-gray-600 text-center">
                  "I can actually do this.
                  <br />I can build.
                  <br />
                  Wait — I actually made this work."
                </p>
              </div>
  
              <p>And here's the thing — we're just getting warmed up.</p>
            </div>
  
            <div className="space-y-6">
              <p className="text-xl">Our vision isn't changing. If anything, it's expanding.</p>
  
              <p>
                We want more people — teenagers, students, professionals, lifelong learners — to have access to the tools,
                mentors, and environments that help them go from curious to capable.
              </p>
  
              <p>
                That's what TinkerSpace is about.
                <br />
                It's not just a room, not just a lab — it's a playground for builders.
                <br />A place to experiment, fail fast, learn faster, and be surrounded by others who care as much about
                your growth as you do.
              </p>
  
              <p>
                <strong>This is a new chapter for us — not a reset, not a farewell, but a bold step forward.</strong>
              </p>
            </div>
  
            <div className="space-y-6">
              <p className="text-xl">And if you're reading this, we want you to be part of it.</p>
  
              <p>
                Come talk to us. Come build with us.
                <br />
                Bring your ideas, your side-projects, your "what if we…" dreams.
                <br />
                Because this movement isn't about watching from the sidelines.
                <br />
                It's about rolling up your sleeves and making things real — together.
              </p>
  
              <p>
                The future belongs to those who tinker.
                <br />
                Let's make that future brighter, wilder, and more accessible than ever before.
              </p>
  
              <p>
                Stay curious.
                <br />
                Stay building.
                <br />
                Let's do this.
              </p>
            </div>
  
            <div className="text-center py-12">
              <p className="text-xl mb-6">Ready to tinker with us?</p>
              <p className="text-gray-500 mb-8">
                Join our community of builders, makers, and dreamers who are shaping the future.
              </p>
  
              <div className="space-y-4">
                <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Join TinkerSpace
                </button>
                <div>
                  <button className="text-gray-600 hover:text-black transition-colors underline">
                    Explore our community
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
  
        <footer className="border-t border-gray-100 py-8 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm text-gray-400">— TinkerHub</p>
          </div>
        </footer>
      </div>
    )
  }
  