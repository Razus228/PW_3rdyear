import { useState } from "react";

const Trending = () => {

    const [trendings, setTrending] = useState([
        {title: 'Wicked', description: 'After two decades as one of the most beloved and enduring musicals on the stage, Wicked makes its long-awaited journey to the big screen as a spectacular, generation-defining cinematic event this holiday season.', director: 'Jon M. Chu', image: '/images/wicked.jpg', id: 1 },
        {title: 'Megalopolis', description: 'An architect wants to rebuild New York City as a utopia following a devastating disaster', director: 'Francis Ford Coppola', image: '/images/megalopolis.jpg', id: 2 },
        {title: 'Challengers', description: 'Tashi, a former tennis prodigy turned coach, turned her husband into a champion. But to overcome a losing streak, he needs to face his ex-best friend and Tashis ex-boyfriend.', director: 'Luca Guadagnino', image: '/images/challengers.jpg', id: 3 },
        {title: 'IF', description: 'A young girl who goes through a difficult experience begins to see everyones imaginary friends who have been left behind as their real-life friends have grown up.', director: 'John Krasinski', image: '/images/IF.jpg', id: 4 }
    ])

    return ( 
        <div className='best' > 
          <h2 style={{maxWidth: '170px'}}>Discover hot picks</h2>    
            {trendings.map((trending) => (
              <div className='trending' key={trending.id}>
                <img src={trending.image} style={{height: '500px'}}/>
                <h2 className='title'>{trending.title}</h2>
                <p className='director'>{trending.director}
                  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{paddingLeft: '49%'}} className='liked'>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </p>
              </div>
              
            ))}
          </div>
     );
}
 
export default Trending;