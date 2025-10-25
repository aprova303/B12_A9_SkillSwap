import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TopRatedProviders = ({ count = 3 }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/skills.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load skills.json');
        return res.json();
      })
      .then((data) => {
        const top = (data || [])
          .slice()
          .sort((a, b) => b.rating - a.rating)
          .slice(0, count);
        setItems(top);
      })
      .catch((err) => setError(err.message || 'Error'))
      .finally(() => setLoading(false));
  }, [count]);

  if (loading) return <div className="p-4">Loading top providers...</div>;
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;
  if (!items.length) return <div className="p-4">No providers found.</div>;

  return (
    <section className="rounded-lg p-6 shadow-sm bg-white">
      <h2 className="text-2xl font-semibold mb-4">Top Rated Providers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((s) => (
          <div key={s.skillId} className="card bg-base-100 shadow-md">
            <figure className="h-44 overflow-hidden">
              <img src={s.image} alt={s.skillName} className="object-cover w-full h-full" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{s.skillName}</h3>
              <p className="text-sm text-muted">By {s.providerName}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="text-sm">Rating: <strong>{s.rating}</strong></div>
                <div className="text-sm font-medium">${s.price}</div>
              </div>
              <div className="card-actions justify-end mt-4">
                <Link to={`/skillDetails/${s.skillId}`} className="btn btn-outline btn-sm">
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedProviders;