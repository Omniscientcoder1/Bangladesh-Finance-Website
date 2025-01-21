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
    <div className="visitorCountOverlay">
      {count === null
        ? "Loading visitor count..."
        : ` ${count} people visited`}
    </div>
  );
}
