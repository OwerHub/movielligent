import { movieResponse } from "../types/movietypes"

const fullMockResponse  = {
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/nrqsa0qMz0LqrFBjOisMTfajvVn.jpg",
        "genre_ids": [
          10751,
          16,
          10402
        ],
        "id": 292177,
        "original_language": "en",
        "original_title": "My Little Pony: Equestria Girls - Rainbow Rocks",
        "overview": "Music rules and rainbows rock as Twilight Sparkle and pals compete for the top spot in the Canterlot High \"Mane Event\" talent show. The girls must rock their way to the top, and outshine rival Adagio Dazzle and her band The Dazzlings, to restore harmony back to Canterlot High.",
        "popularity": 26.17,
        "poster_path": "/xcSrR4HXHsFXqjAg8nY7y6JMAG4.jpg",
        "release_date": "2014-09-27",
        "title": "My Little Pony: Equestria Girls - Rainbow Rocks",
        "video": false,
        "vote_average": 8,
        "vote_count": 125
      },
      {
        "adult": false,
        "backdrop_path": "/sLCsss7LjBeeRgJwpiOuLdtHUBa.jpg",
        "genre_ids": [
          18,
          35
        ],
        "id": 575417,
        "original_language": "en",
        "original_title": "On the Rocks",
        "overview": "Faced with sudden doubts about her marriage, a young New York mother teams up with her larger-than-life playboy father to tail her husband.",
        "popularity": 10.749,
        "poster_path": "/fcijRCmB7yTtloh4Pumy9b1rkwU.jpg",
        "release_date": "2020-10-02",
        "title": "On the Rocks",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 464
      },
      {
        "adult": false,
        "backdrop_path": "/imLqj1YdhxPSCeinP0AKYwC6IZc.jpg",
        "genre_ids": [
          18
        ],
        "id": 575773,
        "original_language": "en",
        "original_title": "Rocks",
        "overview": "A young teenage girl finds herself struggling to take care of herself and her younger brother after being abandoned by their single mother with no choice but to live out on the streets.",
        "popularity": 5.197,
        "poster_path": "/8Mg4ew6drIax6ZmeY22dxM8ujBk.jpg",
        "release_date": "2019-09-05",
        "title": "Rocks",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 69
      },
      {
        "adult": false,
        "backdrop_path": "/l3qZ3wYF0iRCrWuYTSMsp70qiH9.jpg",
        "genre_ids": [
          18,
          53
        ],
        "id": 11087,
        "original_language": "en",
        "original_title": "The Hand that Rocks the Cradle",
        "overview": "A suburban family chooses seemingly sweet Peyton Flanders as their newborn's nanny. Only much later does the infant's mother, Claire Bartel, realize Peyton's true intentions -- to destroy Claire and replace her in the family. The nail-biting suspense builds quickly in this chilling psychological thriller about deception and bitter revenge.",
        "popularity": 18.062,
        "poster_path": "/8Ktj8PuupTIFIUIiuOqxfKKg2c2.jpg",
        "release_date": "1992-01-10",
        "title": "The Hand that Rocks the Cradle",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 713
      },
      {
        "adult": false,
        "backdrop_path": "/eg7IOV2HqdsT7uHvM97ok5Ua5N9.jpg",
        "genre_ids": [
          35,
          10749
        ],
        "id": 26044,
        "original_language": "en",
        "original_title": "Arthur 2: On the Rocks",
        "overview": "Arthur, that irrepressible drunk, tries to sober up and get a job. Meanwhile, Ralph Marolla is conniving to trick the hapless boozer into marrying his daughter so he can gain entrée to Arthur's $750 million fortune.",
        "popularity": 7.332,
        "poster_path": "/oHrdTClgUyIvlthvWv8HFaeu5Wy.jpg",
        "release_date": "1988-07-08",
        "title": "Arthur 2: On the Rocks",
        "video": false,
        "vote_average": 5.4,
        "vote_count": 119
      },
      {
        "adult": false,
        "backdrop_path": "/y8FPyS7QkBjvfnxTp8xrBViV7u8.jpg",
        "genre_ids": [
          35
        ],
        "id": 991115,
        "original_language": "en",
        "original_title": "Bill Burr: Live at Red Rocks",
        "overview": "Comedian Bill Burr sounds off on cancel culture, feminism, getting bad reviews from his wife and a life-changing epiphany during a fiery stand-up set.",
        "popularity": 7.265,
        "poster_path": "/w3VmDVhgVq8c9lWNkMzsSeJIdgA.jpg",
        "release_date": "2022-07-12",
        "title": "Bill Burr: Live at Red Rocks",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 41
      },
      {
        "adult": false,
        "backdrop_path": "/AqHpekwitI3sJYlMPjUn88CyN2O.jpg",
        "genre_ids": [
          10751,
          35
        ],
        "id": 478157,
        "original_language": "en",
        "original_title": "Nativity Rocks!",
        "overview": "The staff and students at St. Bernadette's Primary School audition for a coveted place in a spectacular rock musical competition.",
        "popularity": 2.152,
        "poster_path": "/x6CtgV2bpkgq0TIXpG6nCNDuS06.jpg",
        "release_date": "2018-11-23",
        "title": "Nativity Rocks!",
        "video": false,
        "vote_average": 4.8,
        "vote_count": 8
      },
      {
        "adult": false,
        "backdrop_path": "/sQlfhbB9hisskF4RzKZXDmczOPk.jpg",
        "genre_ids": [
          10402
        ],
        "id": 397914,
        "original_language": "en",
        "original_title": "KISS: Rocks Vegas",
        "overview": "For one night only. KISS’ 9 day run of concerts at the Hard Rock Cafe in Las Vegas, Nevada in November 2014.",
        "popularity": 2.508,
        "poster_path": "/8BxlwBZ2zhsyrL3JUdQnf0EUyLr.jpg",
        "release_date": "2016-05-25",
        "title": "KISS: Rocks Vegas",
        "video": true,
        "vote_average": 8,
        "vote_count": 25
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          99
        ],
        "id": 348880,
        "original_language": "en",
        "original_title": "Skum Rocks!",
        "overview": "The unbelievable true story of the band that gained massive east coast popularity in the late 1980s despite having a complete lack of musical talent and ambition. A powerful PR machine built their fame, and soon their primary objective was to invent new and creative ways to get kicked off stage without actually playing. Narrated by 'Alice Cooper', Skum ROCKS!, is a genre-bending film described by some as a true-life 'This is Spinal Tap', and by others as an independent 'Rock of Ages'. 'Skum Rocks!' chronicles the rise, fall, and return of this infamous band, giving new life to the tale of 'The Emperor's New Clothes'.",
        "popularity": 1.895,
        "poster_path": "/sAywbVS5eutup0qwwdlOr4yyRFP.jpg",
        "release_date": "2013-09-26",
        "title": "Skum Rocks!",
        "video": false,
        "vote_average": 3,
        "vote_count": 1
      },
      {
        "adult": false,
        "backdrop_path": "/a79ArZYkxTmdymXPoe4FL6raTuO.jpg",
        "genre_ids": [
          10402
        ],
        "id": 360800,
        "original_language": "en",
        "original_title": "Aerosmith – Rocks Donington 2014",
        "overview": "Aerosmith Rocks Donington 2014 is much more than just a great gig. It is a lasting document of the powerful and explosive bond that these five men Steven Tyler, Joe Perry, Brad Whitford, Tom Hamilton and Joey Kramer have made with each other and with fans of rock n roll everywhere. The film captures Aerosmith headlining the massive Download Festival at Donington Park with all their attitude and talent-drenched beauty as they deliver a blistering set of their greatest hits. It is a true once-in-a-lifetime rock n roll experience to treasure and remember forever.",
        "popularity": 1.745,
        "poster_path": "/zRaSaEajMddOa7DLXKM8uJ1YQKR.jpg",
        "release_date": "2015-09-03",
        "title": "Aerosmith - Rocks Donington 2014",
        "video": true,
        "vote_average": 8.7,
        "vote_count": 9
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [],
        "id": 47569,
        "original_language": "en",
        "original_title": "Pop Rocks",
        "overview": "A former heavy-metal star (Gary Cole) tries to keep his past a secret from his family and friends while he rehearses for a reunion concert.",
        "popularity": 1.675,
        "poster_path": "/bdbMWY8QVlyriYCuQoVPPoHkI1f.jpg",
        "release_date": "2004-09-10",
        "title": "Pop Rocks",
        "video": false,
        "vote_average": 5,
        "vote_count": 7
      },
      {
        "adult": false,
        "backdrop_path": "/zHlTkbwaZkhzfYa9fEQ9VzuA1Mu.jpg",
        "genre_ids": [
          16,
          35,
          10751
        ],
        "id": 75915,
        "original_language": "en",
        "original_title": "The Flintstones: On the Rocks",
        "overview": "With their marriage on the rocks, Fred and Wilma take a holiday together to rekindle the fire in their relationship.",
        "popularity": 3.268,
        "poster_path": "/a4yGnUKiwO6jiDa3PanNlangxB7.jpg",
        "release_date": "2001-11-03",
        "title": "The Flintstones: On the Rocks",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 8
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          18,
          53
        ],
        "id": 70406,
        "original_language": "de",
        "original_title": "Falling Rocks",
        "overview": "6 Friends, 1 Killer, No Mercy! Slow moving thriller that builds up towards a nerve wrecking end.",
        "popularity": 1.4,
        "poster_path": "/hIqSIiFf0AIkFdy2WrlQirRuy8p.jpg",
        "release_date": "2000-06-29",
        "title": "Falling Rocks",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 4
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [],
        "id": 391834,
        "original_language": "en",
        "original_title": "God Rocks! Bibletoons: Love God!",
        "overview": "Chelsea Road Productions  featuring Gem, Ruff, Scarecrow, Watering Can, Lion, Wizzle",
        "popularity": 2.855,
        "poster_path": null,
        "release_date": "2007-07-01",
        "title": "God Rocks! Bibletoons: Love God!",
        "video": true,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/yAvv67ixyjJxcm5J4Hvat6RqiAI.jpg",
        "genre_ids": [
          18,
          35
        ],
        "id": 121870,
        "original_language": "en",
        "original_title": "Patti Rocks",
        "overview": "It's Christmas time in the twin cities. Billy's working a lot of overtime, running barges on the Mississippi. He calls his friend Eddie, whom he hasn't seen in six months, and asks a favor: to drive with him to see his pregnant girlfriend, Patti, because Billy hasn't told her he's married and already has two children. The road trip of guy talk becomes a night of truths exchanged between men and women.",
        "popularity": 1.539,
        "poster_path": "/cvi8hjUgDeBaE1wP4WPVdzyBNoo.jpg",
        "release_date": "1988-01-15",
        "title": "Patti Rocks",
        "video": false,
        "vote_average": 3.3,
        "vote_count": 6
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          10751,
          18
        ],
        "id": 136411,
        "original_language": "ml",
        "original_title": "മോളി ആന്‍റി ROCKS!",
        "overview": "Molly is an unstoppable woman, who will do only what she feels is right. Molly’s world is unique but she is its unquestioned queen!. Pranav is an egoistic bureaucrat of the premier and exclusive Indian Revenue Service , who wants his system and power to rule over the subjects. When both of them clashed, sparks flew and egos would not relent. Will Molly rock or will Pranav get her locked? 'Molly Aunty Rocks!!’ is the story of a very powerful young man and a special middle aged woman.",
        "popularity": 0.835,
        "poster_path": "/aUXy1dCwwGYPK6WSurFILBkFL4z.jpg",
        "release_date": "2012-09-14",
        "title": "Molly Aunty Rocks!",
        "video": false,
        "vote_average": 5.2,
        "vote_count": 7
      },
      {
        "adult": false,
        "backdrop_path": "/jhLeBhOB7hUjNvUnGcB3oH9ilZN.jpg",
        "genre_ids": [
          10402,
          99
        ],
        "id": 147001,
        "original_language": "en",
        "original_title": "Mumford & Sons: The Road to Red Rocks",
        "overview": "1. Lovers' Eyes 2. Little Lion Man 3. Below My Feet 4. Roll Away Your Stone 5. Lover Of The Light 6. Thistle & Weeds 7. Ghosts That We Knew 8. Awake My Soul 9. Whispers In The Dark 10. Dust Bowl Dance 11. I Will Wait 12. The Cave  English folk rock band captured live in performance at the Red Rocks Ampitheatre in Colorado in summer 2012. As well as footage of the concert itself the journey of the band to Red Rocks is explored, from their humble origins in the West London music scene to their ability to sell out the spectacular 10,000 capacity open-air amphitheatre.",
        "popularity": 3.501,
        "poster_path": "/gjlSl5SgFtKgTvOyL4kTkuCk5o.jpg",
        "release_date": "2012-11-26",
        "title": "Mumford & Sons: The Road to Red Rocks",
        "video": false,
        "vote_average": 10,
        "vote_count": 1
      },
      {
        "adult": false,
        "backdrop_path": "/lbVprCsXRzEz4LQIOlM9PlZahIn.jpg",
        "genre_ids": [
          18,
          10749
        ],
        "id": 53231,
        "original_language": "en",
        "original_title": "Beyond the Rocks",
        "overview": "A young woman marries an older millionaire and then falls in love with a handsome nobleman on her honeymoon.",
        "popularity": 1.4,
        "poster_path": "/ykDMRX5H2xH862Sg1UyLAoUZeRu.jpg",
        "release_date": "1922-05-07",
        "title": "Beyond the Rocks",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 13
      },
      {
        "adult": false,
        "backdrop_path": "/zrZSNWukEEEIV2oybH9L2700HP1.jpg",
        "genre_ids": [
          35
        ],
        "id": 794095,
        "original_language": "en",
        "original_title": "Brian Regan: On the Rocks",
        "overview": "Brian Regan tackles the big issues weighing on him, including aging, time, obsessive behavior, backpacks on airplanes, ungrateful horses and raisins.",
        "popularity": 1.802,
        "poster_path": "/zZ8zxO7u7HH0QzdN7pX7kWIUsFS.jpg",
        "release_date": "2021-02-23",
        "title": "Brian Regan: On the Rocks",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 13
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          16,
          35,
          10751
        ],
        "id": 311812,
        "original_language": "en",
        "original_title": "Cartoon Network: Christmas Rocks",
        "overview": "The Cartoon Network's coolest characters celebrate the holidays in this collection of Christmas episodes. The season of giving turns chaotic as Johnny Bravo knocks Santa out; Courage the Cowardly Dog battles an evil snowman; Baboon sets out traps for Santa on I.M. Weasel's rooftop; and Dexter plots to shave Santa's beard off. The fun continues with episodes of \"Ed, Edd n Eddy,\" \"The Powerpuff Girls,\" \"Codename: Kids Next Door\" and more.",
        "popularity": 1.4,
        "poster_path": null,
        "release_date": "2005-10-04",
        "title": "Cartoon Network: Christmas Rocks",
        "video": true,
        "vote_average": 10,
        "vote_count": 2
      }
    ],
    "total_pages": 31,
    "total_results": 615
  }

  export default {
    get: jest.fn().mockResolvedValue(fullMockResponse)
}