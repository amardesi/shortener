// import { useState } from 'react';
// import { useAsyncRun } from 'react-hooks-async';
// import ApiHook from './ApiHook';
import { useAsyncTaskFetch } from "react-hooks-async";

const Found = (props) => (
  <div className="pure-g">
    <div className="pure-u-1">
      <h2>{props.message} <a href="{props.link}">{props.link}</a></h2>
    </div>
  </div>
);

function Assign() {
  const host = window.location.host;
  // const [status, setStatus] = useState("");
  let longUrl= "";
  let shortCode = "";
  let loading = false;
  // const asyncTask = ApiHook(null, null, null);
  // useAsyncRun(asyncTask);
  // const { start, isLoading, hasError, data } = asyncTask;
  const path = 'long';
  let options = {};
  const { started, pending, error, result, start, abort } = useAsyncTaskFetch(path, options);

  const handleSubmit = (e) => {
    e.preventDefault();
    loading = true;
    start(path, options); // null
    loading = pending;
    options = {
      method: "POST",
      body: JSON.stringify({ longUrl: document.getElementById('inputBox').value}),
      headers: { "Content-Type": "application/json" }};
    if (!error && result) {
      shortCode = result.short;
    }

  }
  // onChange={e => longUrl = e.target.value}
  return (
    <form className="pure-form pure-u-1" onSubmit={handleSubmit}>
      <h1>Shorten a URL</h1>
      <div>
        <label htmlFor="inputBox" className="inputBoxLabel">Need a URL Shortened? Paste it here:</label>
        <input id="inputBox" type="text" name="longUrl" required="" className="pure-u-3-4 pure-u-sm-1" />
        <button type="submit" className="button-xlarge pure-button pure-button-primary pure-u-1-4 pure-u-sm-1">Shorten</button>
      </div>
      {shortCode && shortCode !== "" &&
        <Found message={"Here's your short URL: "} link={`${host}/${shortCode}`} /> }
      {loading &&
        <div>Loading...</div>}
    </form>
  )
}

export default Assign;