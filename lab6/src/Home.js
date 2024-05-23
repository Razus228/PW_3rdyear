import {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';



const Home = () => {

    const [movies, setMovies] = useState([
        { title: 'The Shawshank Redemption', body: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.', image: '/images/shawshank.jpg' ,director: 'Frank Darabont', id: 1 },
        { title: 'The Godfather', body: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', director: 'Francis Ford Coppola', image: '/images/godfather.jpg' ,id: 2 },
        { title: 'The Dark Knight', body: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', director: 'Christopher Nolan', image: '/images/batman.jpg', id: 3 },
        { title: 'Schindlers List', body: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.', director: 'Steven Spielberg', image: '/images/schindler.jpg', id: 4 },
        //{ title: 'The Shawshank Redemption', body: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.', director: 'Frank Darabont', id: 1 },
        //{ title: 'The Shawshank Redemption', body: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.', director: 'Frank Darabont', id: 1 },
        //{ title: 'The Shawshank Redemption', body: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.', director: 'Frank Darabont', id: 1 },



    ]); 

    

    return ( 
        
          <div className='best'> 
          <h2 style={{maxWidth: '170px'}}>Best of all time</h2>    
            {movies.map((movie) => (
              <div className='movie-title' key={movie.id}>
                <img src={movie.image} style={{height: '500px'}}/>
                <h2 className='title'>{movie.title}</h2>
                <p className='director'>{movie.director}</p>
              </div>
             
            ))}
          </div>           
  );      
}
 
export default Home;