import React, { useState,useContext } from "react";
import { useSearch } from "../context/SearchContext";
import { AppContext } from "../context/AppContext";


export default function SearchBar() {
    const { language } = useContext(AppContext);
    const { query, setQuery, searchPages, handleNavigate } = useSearch();
    const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    const found = searchPages(value);
    setResults(found);
  };

  
  const highlightText = (text, keyword) => {
    if (!keyword.trim()) return text;
    const regex = new RegExp(`(${keyword})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-yellow-200 font-semibold text-gray-900">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  
  const createSnippet = (text, keyword, maxLength = 100) => {
    if (!keyword.trim()) return text.slice(0, maxLength) + (text.length > maxLength ? "..." : "");
    const index = text.toLowerCase().indexOf(keyword.toLowerCase());
    if (index === -1) return text.slice(0, maxLength) + (text.length > maxLength ? "..." : "");

    const start = Math.max(0, index - maxLength / 2);
    const end = Math.min(text.length, index + keyword.length + maxLength / 2);
    const snippet = (start > 0 ? "..." : "") + text.slice(start, end) + (end < text.length ? "..." : "");
    return snippet;
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-4">
      <input
        type="text"
        placeholder={language === "en" ? "Search across the site..." : "संपूर्ण साइटवर शोधा..."}
        value={query}
        onChange={handleSearch}
        className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:ring-2 focus:ring-blue-500"
      />

      {results.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {results.map((r, index) => {
            const snippet = createSnippet(r.content, query);
            return (
              <li
                key={index}
                onClick={() => handleNavigate(r.path)}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                <strong className="text-blue-700">{highlightText(r.title, query)}</strong>
                <p className="text-sm text-gray-600 mt-1">
                  {highlightText(snippet, query)}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
