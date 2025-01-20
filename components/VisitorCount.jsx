// components/VisitorCount.jsx
import { useState, useEffect } from 'react';

export default function VisitorCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const res = await fetch('/api/visitor');
        const data = await res.json();
        if (res.ok) {
          setCount(data.count);
          console.log('Is this a new visit?', data.newVisit);
        } else {
          console.error('Failed to fetch visitor count:', data.error);
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <>
      <div className="visitorCountOverlay">
        {count === null ? 'Loading visitor count...' : `Unique Visitor Count: ${count}`}
      </div>
      <style jsx>{`
        .visitorCountOverlay {
          position: absolute;
          top: 200px;
          right: 20px;
          padding: 10px 20px;
          background-color: #0070f3; /* Blue background */
          color: #ffffff;           /* White text */
          border-radius: 20px;      /* Rounded corners */
          font-weight: bold;
          font-size: 0.9rem;
          z-index: 9999;           /* Ensures it appears above other elements */
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); /* Optional drop shadow */
        }
      `}</style>
    </>
  );
}
