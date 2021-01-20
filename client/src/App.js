import AssignedShort from './components/AssignedShort';
import AssignLong from './components/AssignLong';

function App() {
  const path = window.location.pathname.split('/')[1];
  return (
    <div className="container">
      <div className="pure-g content">
        {path
          ? <AssignedShort path={path}/>
          : <AssignLong />
        }
      </div>
    </div>
  )
}

export default App;