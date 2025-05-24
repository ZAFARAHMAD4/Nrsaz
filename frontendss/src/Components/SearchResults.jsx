// src/pages/SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery().get('q')?.toLowerCase() || '';

  const data = [
    { title: 'Banner Design', description: 'Custom banner graphics' },
    { title: 'PPT Creation', description: 'Professional presentations' },
    { title: 'Logo Design', description: 'Unique branding logos' },
    { title: 'Team', description: 'Meet our creative team' },
    { title: 'Blog', description: 'Graphic design tips and stories' }
  ];

  const filtered = data.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query)
  );

  return (
    <div className="container mt-5">
      <h2>Search Results for: "{query}"</h2>
      {query === '' ? (
        <p>Please enter a search term.</p>
      ) : filtered.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {filtered.map((item, i) => (
            <li key={i}>{item.title} - {item.description}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResults;
