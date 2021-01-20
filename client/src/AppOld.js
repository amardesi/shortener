import { useState } from 'react';

function Found(props) {
  return (
    <div className="pure-g">
      <div className="pure-u-1">
        <h2>{props.message} <a href="{props.link}">{props.link}</a></h2>
      </div>
    </div>
  )
}

// function Search(props) {
//   const [s, setStatus] = useState("Searching...");

//   if (props.short) {
//     /* Placeholder for case of short URL not being found. 
//       This should be controlled by server reponse in the end */
//     setTimeout(() => { 
//       setStatus(`That URL ${window.location} is not found.`)
//     }, 4200);
//   } else {
//     return <div/>;
//   }
// }

function App() {
  const host = window.location.host;
  const path = window.location.pathname.split('/')[1];
  const [longUrl, setLongUrl] = useState("");
  const [shortCode, setShortCode] = useState(path);
  const [found, setFound] = useState(false);

  // * * * * TEMPORARILY DISABLED * * * *

  // Redirect a short URL request
  /* Length property of 7 should actually  be a global constant
     since this is tied to the slugs being generated */
  // if (short && short.length === 7) {
  //   fetch(`/${short}`, {
        //   method: "GET",
        //   headers: {"Content-type": "application/json;charset=UTF-8"}
        // })
  //   .then(response => response.json())
  //   // I'm trusting the URLs sitting in the database are safe
  //   .then(obj => window.location = obj.longUrl);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/long', {
      method: "POST",
      body: JSON.stringify({ longUrl: longUrl}),
      headers: { "Content-Type": "application/json" }
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
      },
      error => { throw error; }
    )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setShortCode(data.short);
      setFound(true);
      console.log(shortCode);
    })
    .catch(error => {
        console.log('post longUrl', error.message);
        alert('Your URL could not be posted\nError: ' + error.message);
    });
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
        {/* <Search short={short} /> */}
        {found && <Found message={"Here's your short URL: "} link={`${host}/${shortCode}`} />}
      </div>
    </div>
  );
}

export default App;
