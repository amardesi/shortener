function App() {
  return (
    <div className="container">
      <div className="pure-g content">
        <form class="pure-form pure-u-1">
          <h1>Shorten A URL</h1>
          <div>
            <label for="inputBox" class="inputBoxLabel">Need a URL Shortened? Paste it here:</label>
            <input id="inputBox" type="text" name="longUrl" required="" class="pure-u-3-4 pure-u-sm-1"/>
            <button type="submit" class="button-xlarge pure-button pure-button-primary pure-u-1-4 pure-u-sm-1">Shorten</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
