import React from "react";

function getJobMatches(answers) {
  if (answers.includes("Créer du contenu")) return ["Graphiste", "Social Media Manager", "UX Designer"];
  if (answers.includes("Aider les autres")) return ["Chargé·e RH", "Infirmier·e", "Conseiller·e social·e"];
  if (answers.includes("Résoudre des problèmes")) return ["Développeur·se", "Data Analyst", "Technicien·ne support"];
  return ["Assistant·e administratif·ve", "Commercial·e", "Coordinateur·rice"];
}

function Results({ answers }) {
  const jobs = getJobMatches(answers);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Voici des métiers qui pourraient te correspondre :</h2>
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li key={job} className="bg-gray-100 p-4 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">{job}</h3>
            <p className="text-sm text-gray-600">Découvre des offres pour ce métier sur hellowork.com</p>
            <a
              href={`https://www.hellowork.com/fr-fr/emploi/recherche.html?k=${encodeURIComponent(job)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-blue-600 underline"
            >
              Voir les offres
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
