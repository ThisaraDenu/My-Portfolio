import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function GitHubProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch repositories for ThisaraDenu
    fetch('https://api.github.com/users/ThisaraDenu/repos?sort=updated&per_page=6')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch repositories');
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full py-10 flex justify-center items-center">
        <div className="w-8 h-8 border-4 border-gray-900 dark:border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-10 text-center text-red-500">
        <p>Error loading projects: {error}</p>
      </div>
    );
  }

  return (
    <section id="github-projects" className="w-full py-20 px-4 sm:px-6 md:px-8 bg-white dark:bg-[#0a0a0f] transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Latest Code</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My recent open-source projects and activities directly from GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="block p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white bg-[#f9f9f9] dark:bg-[#111116] transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <svg className="w-8 h-8 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M2 12C2 6.477 6.484 2 12.017 2c4.425 0 8.18 2.865 9.504 6.839.092.5-.217.682-.483.682-.237 0-.868-.008-1.703-.013.605-2.782-1.343-3.369-1.343-3.369-1.158-.454-1.466-1.11-1.466-1.11-.62-.908-.608.069-.608.069.07 1.003 1.032 1.531 1.032 1.531 1.53.892 1.088 2.341.832 2.91-.647.092-1.088.35-1.338.636-.253-2.22-1.113-4.555-4.951-4.555-1.093 0-1.988.39-2.688 1.029-.253-.103-1.272-.446-2.65.098 0 0-.27.84 1.026 2.75A9.564 9.564 0 016.844 12c.004.85.115 1.705.337 2.504-1.296 1.909-1.027 2.747-1.027 2.747 1.379.546 2.398.202 2.651.1.7.64 1.595 1.028 2.688 1.028 3.848 0 4.695-2.339 4.943-4.566.309.359.92.678 1.855.678 1.338 0 2.419-.012 2.747-.012.268 0 .58.18.482.688A10.019 10.019 0 0012.017 22C6.484 22 2 17.522 2 12z" clipRule="evenodd" />
                </svg>
                <span className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  {project.stargazers_count}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 h-10">
                {project.description || 'No description available for this repository.'}
              </p>
              <div className="flex items-center text-xs font-mono text-gray-500 dark:text-gray-400">
                <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                {project.language || 'Unknown'}
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://github.com/ThisaraDenu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:scale-105 transition-transform duration-300"
          >
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default GitHubProjects;
