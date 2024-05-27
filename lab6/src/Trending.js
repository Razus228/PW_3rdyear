import { useState } from "react";
import MovieListTrending from "./MovieListTrending";

const Trending = () => {

    const [trendings, setTrending] = useState([
        {title: 'Wicked', description: 'After two decades as one of the most beloved and enduring musicals on the stage, Wicked makes its long-awaited journey to the big screen as a spectacular, generation-defining cinematic event this holiday season.', director: 'Jon M. Chu', image: '/images/wicked.jpg', id: 1 },
        {title: 'Megalopolis', description: 'An architect wants to rebuild New York City as a utopia following a devastating disaster', director: 'Francis Ford Coppola', image: '/images/megalopolis.jpg', id: 2 },
        {title: 'Challengers', description: 'Tashi, a former tennis prodigy turned coach, turned her husband into a champion. But to overcome a losing streak, he needs to face his ex-best friend and Tashis ex-boyfriend.', director: 'Luca Guadagnino', image: '/images/challengers.jpg', id: 3 },
        {title: 'IF', description: 'A young girl who goes through a difficult experience begins to see everyones imaginary friends who have been left behind as their real-life friends have grown up.', director: 'John Krasinski', image: '/images/IF.jpg', id: 4 }
    ])

    return ( 
        
          <MovieListTrending trendings={trendings} title="Discover hot picks"/>
        
              
            
     );
}
 
export default Trending;