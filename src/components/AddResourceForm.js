import React, {useState} from "react";
import {addResource} from "../store/resources/actions"
import { useDispatch } from "react-redux";

export default function AddResourceForm() {
    const [name, set_name] = useState("");
    const [type, set_type] = useState("");
    const [tags, set_tags] = useState("");
    const [url, set_url] = useState("");
    const dispatch = useDispatch()

    const submit = event => {
        // to make sure that the form does not redirect (which is normal browser behavior)
        event.preventDefault();
        console.log("form values?", name, type, tags, url)
        dispatch(addResource( 
            name,
            type,
            tags.split(/[, ]+/),
            url
        ));
    }

  return (
    <div>
      <h1>Add a new resource</h1>
      <form onSubmit={submit}>
        <p>
          <label>Name:{" "}</label>
          <input
            type="text"
            value={name}
            onChange={e => set_name(e.target.value)}
          />
        </p>
        <p>
        Type:{" "}
          <select value={type} onChange={e => set_type(e.target.value)}>
            <option value="library">library</option>
            <option value="website">website</option>
            <option value="resource">resource</option>
            <option value="tool">tool</option>
            <option value="cheatsheet">cheatsheet</option>
          </select>
        </p>
        <p>
          <label>Tags:{" "}</label>
          <input
            type="text"
            value={tags}
            onChange={e => set_tags(e.target.value)}
          />        
        </p>
        <p>
          <label>URL:{" "}</label>
          <input
            type="text"
            value={url}
            onChange={e => set_url(e.target.value)}
          />        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    </div>
  );
}
