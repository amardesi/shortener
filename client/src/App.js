import Assigned from './components/Assigned';
import Assign from './components/Assign';

function App() {
  const path = window.location.pathname.split('/')[1];
  return (
    <div className="container">
      <div className="pure-g content">
        {path
          ? <Assigned path={path}/>
          : <Assign />
        }
      </div>
    </div>
  )
}

export default App;