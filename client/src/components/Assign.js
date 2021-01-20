import { useAsyncTaskFetch } from "react-hooks-async";
import { useRef } from "react";

const Found = (props) => (
  <div className="pure-g">
    <div className="pure-u-1">
      <h2>{props.message} <a href="{props.link}">{props.link}</a></h2>
    </div>
  </div>
);

function Assign() {
  const host = window.location.host;
  let shortCode = "";
  const path = useRef('http://localhost:3000/long');
  let options = useRef({});
  const { pending, error, result, start } = useAsyncTaskFetch("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    start(path.current, options.current);
    options.current = {
      method: "POST",
      body: JSON.stringify({ longUrl: document.getElementById('inputBox').value}),
      headers: { "Content-Type": "application/json" }};
    if (!error && result) {
      shortCode = result.short;
    }

  }

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
      {pending &&
        <div>Loading...</div>}
    </form>
  )
}

export default Assign;