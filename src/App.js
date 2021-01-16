import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ActorsPage from './components/ActorsPage'
import { Container } from 'react-bootstrap';




function App() {

  return (
    <div className="bg">
      <Container>
        <ActorsPage/>
      </Container>


    </div>
  );
}

export default App;

// git remote add origin https://github.com/EliSheftolovich/movie-app.git
// git branch -M main
// git push -u origin main
