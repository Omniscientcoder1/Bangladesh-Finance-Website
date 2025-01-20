import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function VisitorCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // Check if a unique visitor ID exists in localStorage
        let visitorId = localStorage.getItem("visitorId");
        if (!visitorId) {
          visitorId = uuidv4(); // Generate a new unique visitor ID
          localStorage.setItem("visitorId", visitorId);
        }

        // Send the visitor ID to the backend
        const res = await fetch("/api/visitor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ visitorId }),
        });

        const data = await res.json();

        if (res.ok) {
          setCount(data.count); // Update the visitor count
          console.log("Is this a new visit?", data.newVisit);
        } else {
          console.error("Failed to fetch visitor count:", data.error);
        }
      } catch (error) {
        console.error("Error tracking visitor:", error);
      }
    };

    trackVisitor();
  }, []);

  return (
    <>
      <div className="visitorCountOverlay">
        {count === null
          ? "Loading visitor count..."
          : ` ${count} people visited`}
      </div>
      <style jsx>{`
        .visitorCountOverlay {
          position: absolute;
          top: 200px;
          right: 20px;
          padding: 10px 20px;
          background-color: #0070f3; /* Blue background */
          color: #ffffff; /* White text */
          border-radius: 20px; /* Rounded corners */
          font-weight: bold;
          font-size: 0.9rem;
          z-index: 9999; /* Ensures it appears above other elements */
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); /* Optional drop shadow */
        }
      `}</style>
    </>
  );
}
