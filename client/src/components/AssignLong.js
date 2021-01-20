import { useAsyncTaskFetch } from "react-hooks-async";
// Not using ApiHook like we are in AssignedShort. 
// We need to use this library in order to call async from an event handler
// If there was more time I would have re-factored so that both modules use this same library.

const Found = (props) => (
  <div className="pure-g">
    <div className="pure-u-1">
      <h2>{props.message} <a href={props.link}>{props.link}</a></h2>
    </div>
  </div>
)

function AssignLong() {
  const origin = window.location.origin;
  const { error, result, start } = useAsyncTaskFetch('http://localhost:3000/long');
  const shortCode = ((!error && result) ? result.short : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    start(null, {
      method: "POST",
      body: JSON.stringify({ longUrl: document.getElementById('inputBox').value}),
      headers: { "Content-Type": "application/json" }
    });
  };
  return (
    <form className="pure-form pure-u-1" onSubmit={handleSubmit}>
      <h1>Shorten a URL</h1>
      <div>
        <label htmlFor="inputBox" className="inputBoxLabel">Need a URL Shortened? Paste it here:</label>
        <input id="inputBox" type="text" name="longUrl" required="" className="pure-u-3-4 pure-u-sm-1" />
        <button type="submit" className="button-xlarge pure-button pure-button-primary pure-u-1-4 pure-u-sm-1">Shorten</button>
      </div>
      {/* A loading spinner would be nice here */}
      {shortCode && shortCode !== "" && 
        <Found message={"Here's your short URL: "} link={`${origin}/${shortCode}`} /> }
    </form>
  )
};

export default AssignLong;