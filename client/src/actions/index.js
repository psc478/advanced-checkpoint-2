export function loadMovieIdeas() {
  return function (dispatch) {
    console.log("loadMovieIdeas working");
    fetch("/movieIdeas",{
      headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
       }
    })
    .then( (response) => {
      return response.json();
    }).then((movieIdeas) => {
      let stuff = movieIdeasLoaded(movieIdeas);
      console.log("loadMovieIdeas dispatched stuff:",stuff);
      dispatch(stuff);
    });
  };
}

function movieIdeasLoaded(movieIdeas) {
  return {
    type: "MOVIEIDEAS_LOADED",
    value: movieIdeas
  };
}

export function createMovieIdea(v) {
  return function (dispatch) {
    fetch("/movieIdeas", {
      method: "POST",
      headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
       },
      body: JSON.stringify(v)
    }).then(() => dispatch(loadMovieIdeas()));
  };
}

////////////////////////////////////////////////////////////////////

export function getMovieIdea(id) {
  return function (dispatch) {
    console.log("getMovieIdea working");
    fetch("/movieIdeas/"+id, {
      headers: {
        "Content-Type": "application/json"}
    })
    .then( (response) => {
      return response.json();
    }).then(function(c){
      console.log("getMovieIdea get c:",c);
      dispatch(getMovieIdeaDone(c));
    });
  };
}
function getMovieIdeaDone(movieIdea) {
  return {
    type: "GET_MOVIEIDEA_DONE",
    value: movieIdea
  };
}
