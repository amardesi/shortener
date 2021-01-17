import { useState } from 'react';

function App() {
  const [longUrl, setLongUrl] = useState("");
  
  const handleSubmit = (e) => {
      e.preventDefault();
      // Just confirm we can talk to server and get a response
      fetch("/V1SGXR8")
        .then(response => response.json())
        // I'm trusting what URLs are sitting in the database
        .then(obj => window.location = obj.longUrl);
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
      </div>
    </div>
  );
}

export default App;
