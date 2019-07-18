const API_IP = '172.16.116.182';
export const MEMES_API_ENPOINT = {
  DEFAULT: {
    key: 'DEFAULT',
    title: 'Home',
    apiEndPoints: {
      default: `http://${API_IP}:3000`,
      trending: `http://${API_IP}:3000/tag/cricket/home`
    }
  },
  BOY: {
    key: 'BOY',
    title: 'Boy',
    apiEndPoints: {
      default: `http://${API_IP}:3000/tag/cricket/home`,
      trending: `http://${API_IP}:3000`
    }
  },
  GIRL: {
    key: 'girl',
    url: ''
  },
  PUBG: {
    key: 'pubg',
    url: ''
  },
  ANIMALS: {
    key: 'animals',
    url: ''
  },
  MOVIES: {
    key: 'movies',
    url: ''
  },
  COMIC: {
    key: 'comic',
    url: ''
  },
  BESTIE: {
    key: 'bestie',
    url: ''
  },
  CELEB: {
    key: 'celeb',
    url: ''
  },
  ANIMES: {
    key: 'animes',
    url: ''
  },
  KIDS: {
    key: 'kids',
    url: ''
  },
  RELATIONSHIPS: {
    key: 'relationships',
    url: ''
  },
  SCHOOL_LIFE: {
    key: 'schoolLife',
    url: ''
  },
  CRICKET: {
    key: 'CRICKET',
    title: 'Cricket',
    apiEndPoints: {
      default: `http://${API_IP}:3000/trending`,
      trending: ''
    }
  },
  BOLLYWOOD: {
    key: 'bollywood',
    url: ''
  },
  TV_SERIES: {
    key: 'tvSeries',
    url: ''
  },
  ACTORS: {
    key: 'actors',
    url: ''
  },
  MOVIES_TV_SHOWS: {
    key: 'moviesTvShows',
    url: ''
  },
  HOLLYWOOD: {
    key: 'hollywood',
    url: ''
  }
};