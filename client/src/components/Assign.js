import { useState } from 'react';
import ApiHook from './ApiHook';

function Found(props) {
  return (
    <div className="pure-g">
      <div className="pure-u-1">
        <h2>{props.message} <a href="{props.link}">{props.link}</a></h2>
      </div>
    </div>
  )
}

function Assign() {
  const host = window.location.host;
  // const [status, setStatus] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [shortCode, setShortCode] = useState("");
  let loading = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    loading = true;
    const path = 'long';
    const options = {
      method: "POST",
      body: JSON.stringify({ longUrl: longUrl}),
      headers: { "Content-Type": "application/json" }};
    const { isLoading, hasError, data } = ApiHook(path, options, null);
    loading = isLoading;

    if (!hasError && data) {
      setShortCode(data.short);
    }
  }

  return (
    <form className="pure-form pure-u-1" onSubmit={handleSubmit}>
      <h1>Shorten a URL</h1>
      <div>
        <label htmlFor="inputBox" className="inputBoxLabel">Need a URL Shortened? Paste it here:</label>
        <input id="inputBox" type="text" name="longUrl" required="" className="pure-u-3-4 pure-u-sm-1"
              value={longUrl} onChange={e => setLongUrl(e.target.value)}/>
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