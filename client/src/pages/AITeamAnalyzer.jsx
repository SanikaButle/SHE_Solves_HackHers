import { useState } from "react";

const AITeamAnalyzer = () => {
  const [skills, setSkills] = useState("");
  const [projectIdea, setProjectIdea] = useState("");
  const [teamMembers, setTeamMembers] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalyzeTeam = () => {
    // Mock AI analysis response
    setAnalysisResult({
      accuracy: "85%",
      missingSkills: ["UI/UX Design", "DevOps", "Cloud Architecture"],
    });
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh", width: "100vw", padding: "20px" }}>
      <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">AI Team Analyzer</h2>
          <button className="bg-black text-white px-3 py-1 rounded-lg">Filters</button>
        </div>

        {/* Team Details Form */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-md font-semibold mb-2">Team Details</h3>

          <label className="block text-sm font-medium">Your Skills</label>
          <input
            type="text"
            placeholder="e.g., React, Python, UI/UX"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full p-2 border rounded-md mt-1 mb-3"
          />

          <label className="block text-sm font-medium">Project Idea</label>
          <textarea
            placeholder="Describe your project idea"
            value={projectIdea}
            onChange={(e) => setProjectIdea(e.target.value)}
            className="w-full p-2 border rounded-md mt-1 mb-3"
          />

          <label className="block text-sm font-medium">Existing Team Members</label>
          <input
            type="text"
            placeholder="Add team members (optional)"
            value={teamMembers}
            onChange={(e) => setTeamMembers(e.target.value)}
            className="w-full p-2 border rounded-md mt-1 mb-3"
          />

          <button
            onClick={handleAnalyzeTeam}
            className="w-full bg-blue-600 text-white py-2 rounded-md mt-2"
          >
            Analyze Team
          </button>
        </div>

        {/* AI Analysis Results */}
        {analysisResult && (
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 className="text-md font-semibold">AI Analysis Results</h3>
            <p className="mt-2 text-lg font-bold">Team Accuracy: {analysisResult.accuracy}</p>

            <h4 className="mt-3 font-semibold text-sm">Suggested Missing Skills</h4>
            <div className="flex gap-2 flex-wrap mt-1">
              {analysisResult.missingSkills.map((skill, index) => (
                <span key={index} className="bg-gray-200 px-3 py-1 rounded-md text-sm">
                  {skill}
                </span>
              ))}
            </div>

            <button className="w-full bg-black text-white py-2 rounded-md mt-4">
              Recommend me others
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AITeamAnalyzer;