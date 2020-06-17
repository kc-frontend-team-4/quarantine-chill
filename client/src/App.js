import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';
import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Favorites from './components/pages/Favorites/Favorites.js';
import Recent from './components/pages/Recent/Recent.js';
import Results from './components/pages/Results/Results.js';
function App() {
  const movieApiKey = 'api_key=0402eec8d6da4df59f8077842992a247';
  const foodApiKey = 'apiKey=73bb985ab78b4740a1444004dfd60217';
  const [randomedMovie, setRandomedMovie] = useState({

    "id": 475430,
    "video": false,
    "vote_count": 128,
    "vote_average": 5.3,
    "title": "Artemis Fowl",
    "release_date": "2020-06-12",
    "original_language": "en",
    "original_title": "Artemis Fowl",
    "genre_ids": [
      12,
      14,
      878
    ],
    "backdrop_path": "/3CIae0GrhKTIzNS3FYYvT8P9D3w.jpg",
    "adult": false,
    "overview": "With the help of his loyal protector Butler, 12-year-old genius Artemis Fowl, descendant of a long line of criminal masterminds, seeks to find his mysteriously disappeared father, and in doing so, uncovers an ancient, underground civilization—the amazingly advanced world of fairies. Deducing that his father’s disappearance is somehow connected to the secretive, reclusive fairy world, cunning Artemis concocts a dangerous plan—so dangerous that he ultimately finds himself in a perilous war of wits with the all-powerful fairies.",
    "poster_path": "/4cd08Le3PjCEd9EAOV71hR6r20R.jpg",
    "popularity": 139.943,
    "media_type": "movie"
  })
  const [fileredMovieList, setFileredMovieList] = useState([])
  const [randomedRecipe, setRandomedRecipe] = useState([])
  const [filter, setFilter] = useState({
    Genre: null,
    Rating: 0,
    Length: null,
    'Cuisine Type': null,
    'Meal Type': null,
    'Food Allergies': null
  })

  const onChangeGenre = (event) => {
    // todo: update state with the selected options
    console.log(event.target.value)
    setFilter({ ...filter, Genre: event.target.value })
    console.log(filter)
  }
  const onChangeRating = (event) => {
    // todo: update state with the selected options
    console.log(event.target.value)
    setFilter({ ...filter, Rating: Number(event.target.value) })
    console.log(filter)
  }
  const onChangeLength = (event) => {
    // todo: update state with the selected options
    console.log(event.target.value)
    setFilter({ ...filter, Length: event.target.value })
    console.log(filter)
  }
  const onChangeCuisineType = (event) => {
    // todo: update state with the selected options
    console.log(event.target.value)
    setFilter({ ...filter, 'Cuisine Type': event.target.value })
    console.log(filter)
  }
  const onChangeMealTypes = (event) => {
    // todo: update state with the selected options
    console.log(event.target.value)
    setFilter({ ...filter, 'Meal Type': event.target.value })
    console.log(filter)
  }
  const onChangeFoodAllergies = (event) => {
    // todo: update state with the selected options
    console.log(event.target.value)
    setFilter({ ...filter, 'Food Allergies': event.target.value })
    console.log(filter)
  }
  // get filtered movies list
  function onClickSearchMovies() {
    console.log('getting filtered movies list')
    setFileredMovieList(movies.filter((element) =>
      element.vote_average > filter.Rating
    ))
    console.log('filtered movie list', fileredMovieList)
  }
  function onPairMeClick() {
    // setMovies(fetchMovie(selectedOptions.Rating))
    let index = Math.floor((Math.random() * fileredMovieList.length))
    setRandomedMovie(fileredMovieList[index])
    console.log(fileredMovieList)
  }
  //hard code movies array for now
  const [movies, setMovies] = useState([
    {
      "id": 475430,
      "video": false,
      "vote_count": 128,
      "vote_average": 5.3,
      "title": "Artemis Fowl",
      "release_date": "2020-06-12",
      "original_language": "en",
      "original_title": "Artemis Fowl",
      "genre_ids": [
        12,
        14,
        878
      ],
      "backdrop_path": "/3CIae0GrhKTIzNS3FYYvT8P9D3w.jpg",
      "adult": false,
      "overview": "With the help of his loyal protector Butler, 12-year-old genius Artemis Fowl, descendant of a long line of criminal masterminds, seeks to find his mysteriously disappeared father, and in doing so, uncovers an ancient, underground civilization—the amazingly advanced world of fairies. Deducing that his father’s disappearance is somehow connected to the secretive, reclusive fairy world, cunning Artemis concocts a dangerous plan—so dangerous that he ultimately finds himself in a perilous war of wits with the all-powerful fairies.",
      "poster_path": "/4cd08Le3PjCEd9EAOV71hR6r20R.jpg",
      "popularity": 139.943,
      "media_type": "movie"
    },
    {
      "id": 581859,
      "video": false,
      "vote_count": 77,
      "vote_average": 7.2,
      "title": "Da 5 Bloods",
      "release_date": "2020-06-12",
      "original_language": "en",
      "original_title": "Da 5 Bloods",
      "genre_ids": [
        18,
        10752
      ],
      "backdrop_path": "/Aq5Zhj9iaTF6BEKNk05dlUxeHKa.jpg",
      "adult": false,
      "overview": "Four African-American Vietnam veterans return to Vietnam. They are in search of the remains of their fallen squad leader and the promise of buried treasure. These heroes battle forces of humanity and nature while confronted by the lasting ravages of the immorality of the Vietnam War.",
      "poster_path": "/yx4cp1ljJMDSFeEex0Zjv45b55E.jpg",
      "popularity": 113.292,
      "media_type": "movie"
    },
    {
      "id": 664413,
      "video": false,
      "vote_count": 1088,
      "vote_average": 7.1,
      "title": "365 Days",
      "release_date": "2020-02-07",
      "original_language": "pl",
      "original_title": "365 dni",
      "genre_ids": [
        18,
        10749
      ],
      "backdrop_path": "/27nn2YJBwY7a1etZ0AiIcOrIgu3.jpg",
      "adult": false,
      "overview": "Laura, in order to save her relationship from falling apart, goes to Sicily, where she meets Massimo. A dangerous man, the head of a mafia family, kidnaps her and gives her 365 days to fall in love with him.",
      "poster_path": "/ibaDBJBAvWd4J5lzfbpq1PJ6ZU1.jpg",
      "popularity": 97.353,
      "media_type": "movie"
    },
    {
      "id": 579583,
      "video": false,
      "vote_count": 0,
      "vote_average": 0,
      "title": "The King of Staten Island",
      "release_date": "2020-07-30",
      "original_language": "en",
      "original_title": "The King of Staten Island",
      "genre_ids": [
        35,
        18
      ],
      "backdrop_path": "/5rwcd24GGltKiqdPT4G2dmchLr9.jpg",
      "adult": false,
      "overview": "Scott has been a case of arrested development ever since his firefighter father died when he was seven. He’s now reached his mid-20s having achieved little, chasing a dream of becoming a tattoo artist that seems far out of reach. As his ambitious younger sister heads off to college, Scott is still living with his exhausted ER nurse mother and spends his days smoking weed, hanging with the guys — Oscar, Igor and Richie — and secretly hooking up with his childhood friend Kelsey. But when his mother starts dating a loudmouth firefighter named Ray, it sets off a chain of events that will force Scott to grapple with his grief and take his first tentative steps toward moving forward in life.",
      "poster_path": "/zQFjMmE3K9AX5QrBL1SXIxYQ9jz.jpg",
      "popularity": 59.251,
      "media_type": "movie"
    },
    {
      "id": 520900,
      "video": false,
      "vote_count": 23,
      "vote_average": 6.6,
      "title": "The Personal History of David Copperfield",
      "release_date": "2019-11-07",
      "original_language": "en",
      "original_title": "The Personal History of David Copperfield",
      "genre_ids": [
        35,
        18
      ],
      "backdrop_path": "/tZZXvAnfrR58C64O3o3Ox4zUkSI.jpg",
      "adult": false,
      "overview": "A fresh and distinctive take on Charles Dickens’ semi-autobiographical masterpiece, The Personal History of David Copperfield, set in the 1840s, chronicles the life of its iconic title character as he navigates a chaotic world to find his elusive place within it. From his unhappy childhood to the discovery of his gift as a storyteller and writer, David’s journey is by turns hilarious and tragic, but always full of life, colour and humanity.",
      "poster_path": "/2epgo9k2Jrs7qrTL1Rork1mDSKT.jpg",
      "popularity": 21.225,
      "media_type": "movie"
    },
    {
      "id": 495764,
      "video": false,
      "vote_count": 4474,
      "vote_average": 7.2,
      "title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
      "release_date": "2020-02-05",
      "original_language": "en",
      "original_title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
      "genre_ids": [
        28,
        35,
        80
      ],
      "backdrop_path": "/kvbbK2rLGSJh9rf6gg1i1iVLYQS.jpg",
      "adult": false,
      "overview": "Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.",
      "poster_path": "/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",
      "popularity": 96.244,
      "media_type": "movie"
    },
    {
      "id": 703134,
      "video": false,
      "vote_count": 5,
      "vote_average": 5.8,
      "title": "Infamous",
      "release_date": "2020-06-12",
      "original_language": "en",
      "original_title": "Infamous",
      "genre_ids": [
        80,
        18,
        53
      ],
      "backdrop_path": "/j57oUw8LIYvjOl0zs3A1A1UqwKH.jpg",
      "adult": false,
      "overview": "Two young lovers rob their way across the southland, posting their exploits to social media, and gaining fame and followers as a result.",
      "poster_path": "/q2lkJf1TAjImTHCEO7XvbqPtnPb.jpg",
      "popularity": 82.452,
      "media_type": "movie"
    },
    {
      "original_name": "Snowpiercer",
      "id": 79680,
      "name": "Snowpiercer",
      "vote_count": 143,
      "vote_average": 7.7,
      "first_air_date": "2020-05-17",
      "poster_path": "/n6UNHZoiYj81abwmG38HbNjflDx.jpg",
      "genre_ids": [
        10765
      ],
      "original_language": "en",
      "backdrop_path": "/a9dT4YLNkyh4m2DTvD8tkXTiYpR.jpg",
      "overview": "Set more than seven years after the world has become a frozen wasteland, the remnants of humanity inhabit a gigantic, perpetually-moving train that circles the globe as class warfare, social injustice and the politics of survival play out.",
      "origin_country": [
        "US"
      ],
      "popularity": 54.192,
      "media_type": "tv"
    },
    {
      "id": 535292,
      "video": false,
      "vote_count": 675,
      "vote_average": 6.8,
      "title": "21 Bridges",
      "release_date": "2019-10-24",
      "original_language": "en",
      "original_title": "21 Bridges",
      "genre_ids": [
        28,
        80,
        18
      ],
      "backdrop_path": "/5bUExJx4NLXJSaphRxO5VflaKdG.jpg",
      "adult": false,
      "overview": "An embattled NYPD detective, is thrust into a citywide manhunt for a pair of cop killers after uncovering a massive and unexpected conspiracy. As the night unfolds, lines become blurred on who he is pursuing, and who is in pursuit of him.",
      "poster_path": "/b40ApfKDPoJYbWepUs7f09Y3fD.jpg",
      "popularity": 48.14,
      "media_type": "movie"
    },
    {
      "id": 508439,
      "video": false,
      "vote_count": 2190,
      "vote_average": 7.9,
      "title": "Onward",
      "release_date": "2020-02-29",
      "original_language": "en",
      "original_title": "Onward",
      "genre_ids": [
        12,
        16,
        35,
        14,
        10751
      ],
      "backdrop_path": "/xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg",
      "adult": false,
      "overview": "In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.",
      "poster_path": "/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
      "popularity": 97.948,
      "media_type": "movie"
    },
    {
      "id": 339095,
      "video": false,
      "vote_count": 132,
      "vote_average": 5.7,
      "title": "The Last Days of American Crime",
      "release_date": "2020-06-05",
      "original_language": "en",
      "original_title": "The Last Days of American Crime",
      "genre_ids": [
        28,
        80,
        53
      ],
      "backdrop_path": "/t93doi7EzoqLFckidrGGnukFPwd.jpg",
      "adult": false,
      "overview": "In the not-too-distant future, where as a final response to crime and terrorism, the U.S. government plans to broadcast a signal that will make it impossible for anyone to knowingly break the law.",
      "poster_path": "/ygCQnDEqUEIamBpdQdDYnFfxvgM.jpg",
      "popularity": 121.08,
      "media_type": "movie"
    },
    {
      "backdrop_path": "/patQkA8aQ4ZhevWSpPLninFlmYc.jpg",
      "first_air_date": "2020-05-18",
      "genre_ids": [
        10759,
        18,
        80,
        10765
      ],
      "id": 80986,
      "name": "Stargirl",
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "Stargirl",
      "overview": "Courtney Whitmore, a smart, athletic and above all else kind girl, discovers her step-father has a secret; he used to be the sidekick to a superhero. \"Borrowing\" the long-lost hero’s cosmic staff, she becomes the unlikely inspiration for an entirely new generation of superheroes.",
      "poster_path": "/sWSGc3Bb7aCTOPvAIkkhqI7ae9H.jpg",
      "vote_average": 7.9,
      "vote_count": 275,
      "popularity": 38.503,
      "media_type": "tv"
    },
    {
      "id": 338762,
      "video": false,
      "vote_count": 2591,
      "vote_average": 7,
      "title": "Bloodshot",
      "release_date": "2020-03-05",
      "original_language": "en",
      "original_title": "Bloodshot",
      "genre_ids": [
        28,
        878
      ],
      "backdrop_path": "/ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg",
      "adult": false,
      "overview": "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
      "poster_path": "/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
      "popularity": 82.205,
      "media_type": "movie"
    },
    {
      "original_name": "Curon",
      "id": 103849,
      "name": "Curon",
      "vote_count": 9,
      "vote_average": 8.3,
      "first_air_date": "2020-06-10",
      "poster_path": "/vmNpI4C0LDfWGiSYWyKLVkCSaOi.jpg",
      "genre_ids": [
        18,
        9648,
        10765
      ],
      "original_language": "it",
      "backdrop_path": "/2NWVtSTpknaQCt6wrXnCUlJnuip.jpg",
      "overview": "When their mother mysteriously vanishes shortly after they all arrive in her hometown, teen twins discover secrets behind the village’s tranquil facade.",
      "origin_country": [
        "IT"
      ],
      "popularity": 72.147,
      "media_type": "tv"
    },
    {
      "id": 38700,
      "video": false,
      "vote_count": 4337,
      "vote_average": 7.2,
      "title": "Bad Boys for Life",
      "release_date": "2020-01-15",
      "original_language": "en",
      "original_title": "Bad Boys for Life",
      "genre_ids": [
        28,
        80,
        53
      ],
      "backdrop_path": "/upUy2QhMZEmtypPW3PdieKLAHxh.jpg",
      "adult": false,
      "overview": "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
      "poster_path": "/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
      "popularity": 64.474,
      "media_type": "movie"
    },
    {
      "id": 299534,
      "video": false,
      "vote_count": 13613,
      "vote_average": 8.3,
      "title": "Avengers: Endgame",
      "release_date": "2019-04-24",
      "original_language": "en",
      "original_title": "Avengers: Endgame",
      "genre_ids": [
        28,
        12,
        878
      ],
      "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      "adult": false,
      "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
      "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      "popularity": 42.365,
      "media_type": "movie"
    },
    {
      "id": 181812,
      "video": false,
      "vote_count": 4880,
      "vote_average": 6.5,
      "title": "Star Wars: The Rise of Skywalker",
      "release_date": "2019-12-18",
      "original_language": "en",
      "original_title": "Star Wars: The Rise of Skywalker",
      "genre_ids": [
        28,
        12,
        878
      ],
      "backdrop_path": "/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg",
      "adult": false,
      "overview": "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
      "poster_path": "/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
      "popularity": 72.576,
      "media_type": "movie"
    },
    {
      "id": 454626,
      "video": false,
      "vote_count": 4569,
      "vote_average": 7.5,
      "title": "Sonic the Hedgehog",
      "release_date": "2020-02-12",
      "original_language": "en",
      "original_title": "Sonic the Hedgehog",
      "genre_ids": [
        28,
        35,
        878,
        10751
      ],
      "backdrop_path": "/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg",
      "adult": false,
      "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
      "poster_path": "/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
      "popularity": 171.78,
      "media_type": "movie"
    },
    {
      "original_name": "W głębi lasu",
      "id": 103425,
      "name": "The Woods",
      "vote_count": 4,
      "vote_average": 8.5,
      "first_air_date": "2020-06-12",
      "poster_path": "/cA0o5dT1xCAQNKl8ShYNf84AySO.jpg",
      "genre_ids": [
        18,
        9648
      ],
      "original_language": "pl",
      "backdrop_path": "/939fj4JSFqd1OOXEpBD18h7USKy.jpg",
      "overview": "Paul Copeland is looking to solve the murder of his sister back in 1994.",
      "origin_country": [
        "PL"
      ],
      "popularity": 50.574,
      "media_type": "tv"
    },
    {
      "original_name": "Reality Z",
      "id": 104108,
      "name": "Reality Z",
      "vote_count": 7,
      "vote_average": 7.6,
      "first_air_date": "2020-06-10",
      "poster_path": "/wJ56eshpiSkQUSqaCvCveKwnFNJ.jpg",
      "genre_ids": [],
      "original_language": "pt",
      "backdrop_path": "/yH9dFBELD5SqsibdnSBGp6ERftS.jpg",
      "overview": "A zombie apocalypse that imprisons participants and producers of a reality show called Olimpo, The House of the Gods. The studio becomes a shelter for those who seek salvation in Rio de Janeiro where chaos and hopelessness begin to rule.",
      "origin_country": [
        "BR"
      ],
      "popularity": 35.772,
      "media_type": "tv"
    }
  ]);



  function fetchMovie() {
    let listOfMovies = [];
    const movieApiKey = 'api_key=0402eec8d6da4df59f8077842992a247';
    for (let i = 3; i < 15; i++) {
      fetch(`https://api.themoviedb.org/3/trending/all/day?${movieApiKey}&page=${i}`)
        .then(response => response.json())
        .then(data => {
          // building array of filtered movies 
          for (const element of (data.results.filter(item => item.genre_ids.includes(12))
            .filter(item => item.vote_average > filter.Rating))) {
            listOfMovies.push(element)
          }
        }
        )
    }
    return listOfMovies;
  }

  // fetchRecipes()
  function fetchRecipes() {
    fetch(`https://api.spoonacular.com/recipes/random?${foodApiKey}&cuisine=&intolerances=&type=&diet=`)
      .then(response => response.json())
      .then(data => {
        console.log(data.recipes[0].title, data.recipes[0].image)
      }
      )
  }

  return (
    <div>
      <nav>
        <div className="logo">
          <span className="logo-text">
            <a href="/">Quarantine & Chill</a>
          </span>
        </div>
        <div className="right-menu">
          <span className="right-menu-links">
            <Link to="/favorites/">Favorites</Link> | <Link to="/recent/">Recent</Link>
          </span>
        </div>
      </nav>
      <div>
        <Switch>
          {/* passing props to route*/}
          {/* https://reacttraining.com/react-router/web/api/Route/render-func */}
          <Route exact path='/' render={(...props) => <LandingPage {...props}
            onClick={onPairMeClick}
            movies={movies}
            onChangeGenre={onChangeGenre}
            onChangeRating={onChangeRating}
            onChangeLength={onChangeLength}
            onChangeCuisineType={onChangeCuisineType}
            onChangeMealTypes={onChangeMealTypes}
            onChangeFoodAllergies={onChangeFoodAllergies}
            randomedMovie={randomedMovie}
            onClickSearchMovies={onClickSearchMovies} />} />     onClickSearchMovies={onClickSearchMovies} />} />
          <Route exact path='/results' component={Results} />
          <Route exact path='/favorites/' component={Favorites} />
          <Route exact path='/recent/' component={Recent} />
        </Switch>
      </div>
    </div>
  );
}

export default App;