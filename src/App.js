import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div>
      <Nav/>
      
      {/* data sharing from parent to child (parent-app.js, child-banner.jsx // this data get at the child as props. fetchUrl is the key of object props // to access this fetchUrl directly at the child do destructing*/}
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>

      {/*data sharing from parent to child using props(props is used in child(Row)) */}
      <Row isPoster={true} title="Trending" fetchUrl={requests.fetchTrending}/>

      <Row  title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals} />

      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated}/>

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>

      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>

      <Row title="Documenteries" fetchUrl={requests.fetchDocumentaries}/>




    </div>
  );
}

export default App;
