import React from "react";
import { useSelector } from "react-redux";
import { selectResources } from "../store/resources/selectors";

export default function ResourcesSection() {
  const resources = useSelector(selectResources);
  console.log("resources?", resources);
  return (
    <div>
      <h2>All resources</h2>
      {resources.map((resource) => {
        return (
          <ul key={resource.id}>
            <li>
              <strong>{resource.name}</strong> ({resource.type}) --- Find out
              more at <a href={resource.url}>{resource.url}</a>
              <p>
                  {resource.tags.map((tag, i) => <button key={i}>
                      {tag}
                    </button>)}
              </p>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
