export default function TinkerHubLetter() {
    return (
      <div className="min-h-screen bg-white">
        <header className="py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-12">
              {/* Simple logo */}
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-8">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
  
              <h1 className="text-4xl md:text-5xl font-normal text-black mb-6 text-balance">a letter to you.</h1>
  
              <div className="text-gray-500 text-sm space-y-1">
                <p>by: tinkerhub community.</p>
                <p>
                  published: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}.
                </p>
              </div>
            </div>
          </div>
        </header>
  
        <main className="max-w-2xl mx-auto px-4 pb-16">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div className="space-y-6">
              <p className="text-lg">so, tinkerhub.</p>
  
              <p>it's not just a community to us. it's literally like a family we deeply cherish.</p>
  
              <p>
                when we think of tinkerhub, we think of late-night coding sessions fueled by endless cups of coffee, the
                excitement in someone's eyes when they push their first commit, the collaborative spirit that flows
                through every hackathon, and the countless "aha!" moments shared in our meetups.
              </p>
  
              <p>we've built something beautiful together over the years.</p>
            </div>
  
            <div className="py-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
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
                <img
                  src="/placeholder-mq6en.png"
                  alt="TinkerHub workshop"
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <img
                  src="/placeholder-c1lmu.png"
                  alt="TinkerHub networking"
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <img
                  src="/placeholder-84d7m.png"
                  alt="TinkerHub community"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-400 text-center">moments from our journey together.</p>
            </div>
  
            <div className="space-y-6">
              <p className="text-lg">what we stand for.</p>
  
              <p>
                <strong>
                  tinkerhub has always been driven by the belief that technology should be accessible to everyone.
                </strong>
                we're not just about writing code - we're about building bridges, fostering innovation, and creating
                opportunities for anyone who's curious about technology.
              </p>
  
              <p>
                we believe in the power of collective learning and shared knowledge. every member brings unique
                perspectives that enrich our community. we champion open source principles - transparency, collaboration,
                and the belief that great software should be accessible to all.
              </p>
            </div>
  
            <div className="space-y-6">
              <p className="text-lg">who we are.</p>
  
              <p>
                we're students, professionals, dreamers, and builders. we're the ones who stay up late debugging code not
                because we have to, but because we love the thrill of solving problems. we're the community that
                celebrates your first "hello world" as much as your first startup.
              </p>
  
              <div className="border-l-4 border-gray-200 pl-6 py-4 my-8">
                <p className="italic text-gray-600 mb-2">
                  "tinkerhub gave me the confidence to contribute to open source. the mentorship and support i received
                  here changed my career trajectory completely."
                </p>
                <p className="text-sm text-gray-400">- sarah, full-stack developer & tinkerhub alumni</p>
              </div>
  
              <p>
                from organizing weekend hackathons to hosting technical workshops, from contributing to major open source
                projects to mentoring newcomers - we do it all because we believe in the transformative power of
                technology and community.
              </p>
            </div>
  
            <div className="space-y-6">
              <p className="text-lg">join our story.</p>
  
              <p>
                whether you're taking your first steps in programming or you're a seasoned developer looking to give back,
                there's a place for you in our community. we meet regularly, share knowledge freely, and support each
                other's growth.
              </p>
  
              <p>because at the end of the day, the best code is written together.</p>
            </div>
  
            <div className="text-center py-12">
              <p className="text-lg mb-6">ready to be part of something bigger?</p>
              <p className="text-gray-500 mb-8">
                join us at our next foss meetup and experience the magic of collaborative learning.
              </p>
  
              <div className="space-y-4">
                <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  join our next meetup
                </button>
                <div>
                  <button className="text-gray-600 hover:text-black transition-colors underline">
                    explore our projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
  
        <footer className="border-t border-gray-100 py-8 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm text-gray-400">built with ❤️ by the tinkerhub community</p>
          </div>
        </footer>
      </div>
    )
  }
  