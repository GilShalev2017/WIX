import React, { useState } from 'react';

function CategoryTree({ data }) {
  const [expanded, setExpanded] = useState(false);

  function toggleExpansion() {
    setExpanded(!expanded);
  }

  function renderChildren(children) {
    //this is a recurrsive function!
    if (!expanded) return null;
    return (
      <ul>
        {children.map((child) => (
          <li key={child.name}>
            {child.name}
            {child.children && renderChildren(child.children)}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <button onClick={toggleExpansion}>
        {expanded ? '▼' : '►'} {data.name}
      </button>
      {renderChildren(data.children)}
    </div>
  );
}

export default CategoryTree;
