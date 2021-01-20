import ApiHook from './ApiHook';

function AssignedShort(props) {
  let loading = true;
  let status = "Searching...";
  let link= "";
  let error = false;

  /* Length property of 7 should actually  be a global constant
    since this is tied to the shortIDs being generated */
  if (props.path && props.path.length === 7) {
    const path = `/${props.path}`;
    const options = {
      method: "GET",
      headers: {"Content-type": "application/json;charset=UTF-8"}};
    const { isLoading, hasError, data } = ApiHook(path, options, null);

    loading = isLoading;
    if (!hasError && data) {
      link = data.longUrl;
      (window.location = data.longUrl);  // We're trusting this URL is safe
    }
  } else {
    error = true;
  }
  if (error) {
    loading = false;
    status= `URL not found on this system: `;
    link = `${window.location.host}${window.location.pathname}`;
    link = window.location.href;
  }

  if (loading) {
    return (
      <div className="pure-u-1">
        Loading...
      </div>
    )
  }
  return (
    <div className="pure-u-1">
      <h1>Shortened URL</h1>
      <h2>{status} <a href="{link}">{link}</a></h2>
    </div>
  )
}

export default AssignedShort;