import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectResources } from "../store/resources/selectors";
import { toggleFavorite } from "../store/developers/action";
import { selectUserLoggedIn } from "../store/selectors";

export default function ResourcesSection() {
  const resources = useSelector(selectResources);
  console.log("resources?", resources);
  const dispatch = useDispatch();
  const me = useSelector(selectUserLoggedIn);

  return (
    <div>
      <h2>All resources</h2>

      {resources.map((resource) => {
        const toggle = () => {
          dispatch(toggleFavorite(me.id, resource.id));
        };
        return (
          <ul key={resource.id}>
            <li>
              <button onClick={toggle}>
                {me.favorites.includes(resource.id) ? "♥" : "♡"}
              </button>{" "}
              <strong>{resource.name}</strong> ({resource.type}) --- Find out
              more at <a href={resource.url}>{resource.url}</a>
              <p>
                {resource.tags.map((tag, i) => (
                  <button key={i}>{tag}</button>
                ))}
              </p>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
