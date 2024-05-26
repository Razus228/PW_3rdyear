import {useState} from 'react';
import logo from "./assets/heart.svg";



const Best = () => {

    const [movies, setMovies] = useState([
        { title: 'The Shawshank Redemption', body: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.', image1: '/images/shawshank.jpg' ,director: 'Frank Darabont', id: 1 },
        { title: 'The Godfather', body: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', director: 'Francis Ford Coppola', image1: '/images/godfather.jpg' ,id: 2 },
        { title: 'The Dark Knight', body: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', director: 'Christopher Nolan', image1: '/images/batman.jpg', id: 3 },
        { title: 'Schindlers List', body: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.', director: 'Steven Spielberg', image1: '/images/schindler.jpg', id: 4 },
        //{ title: 'The Shawshank Redemption', body: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.', director: 'Frank Darabont', id: 1 },
        //{ title: 'The Shawshank Redemption', body: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.', director: 'Frank Darabont', id: 1 },
        //{ title: 'The Shawshank Redemption', body: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.', director: 'Frank Darabont', id: 1 },



    ]); 

    

    return ( 
        
          <div className='best'> 
          <h2 style={{maxWidth: '200px'}}> Best of all time </h2>    
            {movies.map((movie) => (
              <div className='movie-title' key={movie.id}>
                <img 
                src={movie.image1} 
                style={{height: '500px'}}
                
                />
                
                <h2 className='title'>{movie.title} </h2>
                <p className='director'>{movie.director} 
                  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{paddingLeft: '49%'}} className='liked'>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </p>
              </div>
             
            ))}
          </div>           
  );      
}
 
export default Best;