import './App.css';
import Card from './components/Card';
import Nav from './components/Nav';
import data from './data/data'
function App() {
  const dataElements = data.map( location => {
       return( <Card 
          key={location.title}
          location={location} />
        )
  })
  return (
    <div>
        <Nav />
        <section className='Cards-list'>
          {dataElements}
        </section>
    </div>
  );
}

export default App;
