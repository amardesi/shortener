import { useState } from 'react';

function Search(props) {
  const [s, setStatus] = useState("Searching...");

  if (props.short) {
    // placeholder for case of short URL not being found
    setTimeout(() => { 
      setStatus(`That URL ${window.location} is not found.`)
    }, 4200);
  } else {
    return <div/>;
  }
  return (
    <div className="pure-g">
      <div className="pure-u-1">
        <h2>{s}</h2>
      </div>
    </div>
  )
}

function App() {
  const short = window.location.pathname.split('/')[1];
  const [longUrl, setLongUrl] = useState("");

  /* Length property of 7 should actually  be a global constant
     since this is tied to the slugs being generated */
  if (short && short.length === 7) {
    fetch(`/${short}`)
    .then(response => response.json())
    // I'm trusting the URLs sitting in the database are safe
    .then(obj => window.location = obj.longUrl);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
  }

  return (
    <div className="container">
      <div className="pure-g content">
        <form className="pure-form pure-u-1" onSubmit={handleSubmit}>
          <h1>Shorten a URL</h1>
          <div>
            <label htmlFor="inputBox" className="inputBoxLabel">Need a URL Shortened? Paste it here:</label>
            <input id="inputBox" type="text" name="longUrl" required="" className="pure-u-3-4 pure-u-sm-1"
                   value={longUrl} onChange={e => setLongUrl(e.target.value)}/>
            <button type="submit" className="button-xlarge pure-button pure-button-primary pure-u-1-4 pure-u-sm-1">Shorten</button>
          </div>
        </form>
        <Search short={short} />
      </div>
    </div>
  );
}

export default App;
