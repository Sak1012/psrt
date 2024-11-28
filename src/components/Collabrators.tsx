import React, { useState, useEffect } from "react";

// Example adjacency list
const adjacencyList: Map<string, Set<string>> = new Map([
  ["BS", new Set(["AT", "MK", "DS", "SA", "NG"])],
  ["AT", new Set(["BS"])],
  ["MK", new Set(["BS"])],
  ["DS", new Set(["BS"])],
  ["SA", new Set(["BS", "JK"])],
  ["JK", new Set(["SA", "FJ", "NG"])],
  ["FJ", new Set(["JK"])],
  ["NG", new Set(["JK", "VM"])],
  ["VM", new Set(["NG"])],
]);

console.log(adjacencyList);
console.log(Array.from(adjacencyList.entries()));
const Collaborators: React.FC = () => {
  const [nodePositions, setNodePositions] = useState<
    Record<string, { x: number; y: number }>
  >({});

  useEffect(() => {
    // Generate node positions only on the client-side
    const positions: Record<string, { x: number; y: number }> = {};
    adjacencyList.forEach((_, nodeId) => {
      positions[nodeId] = {
        x: Math.random() * 600,
        y: Math.random() * 400,
      };
    });
    setNodePositions(positions);
  }, []);

  return (
    <div className="relative w-full h-[500px] ">
      <svg className="absolute inset-0 pointer-events-none">
        {Array.from(adjacencyList.entries()).flatMap(
          ([fromNodeId, toNodes]) => {
            return Array.from(toNodes).map((toNodeId) => (
              <line
                key={`${fromNodeId}-${toNodeId}`}
                x1={`${nodePositions[fromNodeId]?.x + 25}`}
                y1={`${nodePositions[fromNodeId]?.y + 25}`}
                x2={`${nodePositions[toNodeId]?.x + 25}`}
                y2={`${nodePositions[toNodeId]?.y + 25}`}
                stroke="gray"
                strokeWidth="2"
              />
            ));
          },
        )}
      </svg>

      {Array.from(adjacencyList.keys()).map((nodeId) => (
        <div
          key={nodeId}
          className="absolute w-12 h-12 rounded-full bg-red-50 border 
            flex items-center justify-center"
          style={{
            left: nodePositions[nodeId]?.x || 0,
            top: nodePositions[nodeId]?.y || 0,
          }}
        >
          <span className="text-xs">{nodeId}</span>
        </div>
      ))}
    </div>
  );
};

export default Collaborators;
