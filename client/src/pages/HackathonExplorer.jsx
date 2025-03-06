import { useState } from "react";
import { Bookmark, Filter } from "lucide-react";

const hackathons = [
  {
    id: 1,
    title: "TechCrunch Disrupt Hackathon",
    date: "Oct 15-17, 2024",
    type: "Virtual",
    tags: ["React", "Node.js"],
    prize: "$10,000",
    bookmarked: false,
  },
  {
    id: 2,
    title: "Google Cloud Hackathon",
    date: "Nov 1-3, 2024",
    type: "On-site",
    tags: ["Cloud", "AI/ML"],
    prize: "$15,000",
    bookmarked: true,
  },
];

export default function HackathonExplorer() {
  const [filters, setFilters] = useState(["Virtual", "On-site", "College", "National", "International"]);
  const [bookmarked, setBookmarked] = useState({});

  const toggleBookmark = (id) => {
    setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Hackathon Explorer</h1>
        <button className="flex items-center gap-2 bg-gray-900 text-white px-3 py-1.5 rounded-md">
          <Filter size={16} />
          Filter
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 flex-wrap mb-4">
        {filters.map((filter, index) => (
          <button key={index} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg text-sm">
            {filter}
          </button>
        ))}
      </div>

      {/* Upcoming Hackathons */}
      <h2 className="text-lg font-semibold mb-3">Upcoming Hackathons</h2>
      <div className="space-y-4">
        {hackathons.map((hackathon) => (
          <div key={hackathon.id} className="bg-white p-4 rounded-xl shadow flex flex-col relative">
            {/* Bookmark */}
            <button className="absolute top-3 right-3" onClick={() => toggleBookmark(hackathon.id)}>
              <Bookmark size={20} className={bookmarked[hackathon.id] ? "fill-yellow-500 text-yellow-500" : "text-gray-400"} />
            </button>

            <h3 className="text-md font-semibold">{hackathon.title}</h3>
            <p className="text-sm text-gray-600">{hackathon.date} • {hackathon.type}</p>

            {/* Tags */}
            <div className="flex gap-2 mt-2">
              {hackathon.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 text-xs rounded-lg bg-gray-100 text-gray-700">
                  {tag}
                </span>
              ))}
            </div>

            {/* Prize Pool */}
            <p className="text-green-600 font-semibold mt-2">{hackathon.prize} Prize Pool</p>

            {/* Register Button */}
            <button className="mt-2 bg-blue-600 text-white px-4 py-1.5 rounded-md w-fit">Register</button>
          </div>
        ))}
      </div>
    </div>
  );
};