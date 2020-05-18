import React, {useState} from "react";
import "./App.css";
import { useSelector } from "react-redux";
import {selectDevelopersWithThisFavorite} from "./store/developers/selectors"
import {selectResourcesWithThisFavorite} from "./store/selectors"

const selectDevelopers = (reduxState) => {
  return reduxState.developers;
};

const selectResources = reduxState => {
  return reduxState.resources;
};

function App() {
  const [favoriteResource, set_favoriteResource] = useState(1)
  const [developersInSelect, set_developersInSelect] = useState(1)
  const developers = useSelector(selectDevelopers);
  const developersWithThisFavorite = useSelector(selectDevelopersWithThisFavorite(favoriteResource))
  const resourcesWithThisFavorite = useSelector(selectResourcesWithThisFavorite(developersInSelect))
  console.log("resources with this fav?", resourcesWithThisFavorite)
  const resources = useSelector(selectResources);
  



  return (
    <div>
      <h1> Web development resources</h1>
      <p>{developers.length} developers</p>      
      <p>{resources.length} developers</p>
      <h2>Who likes{" "}
        <select value={favoriteResource} onChange={e => set_favoriteResource(parseInt(e.target.value))}>
          {resources.map(resource => {
            return (
            <option key={resource.id} value={resource.id}>{resource.name}</option>
            );
          })}
        </select>
        {" "}?
      </h2>

      <ul>
        {developersWithThisFavorite.map(dev => {
          return <li key={dev.id}>{dev.name}</li>;
        })}
      </ul>
      <h2>What are{" "}
        <select value={developersInSelect} onChange={e => set_developersInSelect(parseInt(e.target.value))}>
          {developers.map(developer => {
            return (
            <option key={developer.id} value={developer.id}>{developer.name}</option>
            );
          })}
        </select>
        's favorites?
      </h2>

      <ul>
        {resourcesWithThisFavorite.map(res => {
          return <li key={res.id}>{res.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
