  // function of the home page and the buttons 
  function home(page) {
    document.querySelector(".home").style.display = "none";
    document.querySelector(".films").style.display = "none";
    document.querySelector(".list").style.display = "none";
    document.querySelector("#button-home").className = "";
    document.querySelector("#button-film").className = "";
    document.querySelector("#button-list").className = "";
    document.querySelector("." + page).style.display = "block";
    document.querySelector("#button-" + page).className = "selected";
  }
  // function of the next page, input the content of film types, country and year
  function next() {
    document.querySelector(".films .title").innerText =
      document.querySelector('input[name="filmTypes"]').value +
      "," +
      document.querySelector('input[name="Country"]').value +
      "," +
      document.querySelector('input[name="Year"]').value;
    document.querySelector(".home").style.display = "none";
    document.querySelector(".films").style.display = "block";
    document.querySelector("#button-home").className = "";
    document.querySelector("#button-list").className = "";
    document.querySelector("#button-film").className = "selected";
  }
  // function of the list
  function showList() {
    document.querySelector(".list").style.display = "block";
    document.querySelector("#button-home").className = "";
    document.querySelector("#button-film").className = "";
    document.querySelector("#button-list").className = "selected";
  }
  // save to local storage
  function save() {
    const movies = [];
    for (let name of document.querySelectorAll(".list .name")) {
      movies.push(name.innerText);
    }
    localStorage.setItem("movies", movies);
    document.querySelector(".list").style.display = "none";
  }
  // add the movie to the list
  function addMovie(movie) {
    for (let name of document.querySelectorAll(".list .name")) {
      if (name.innerText == movie) {
        return;
      }
    }
    document.querySelector(".list .movies").innerHTML +=
      '<div class="name" onclick="showMovieDetail(event)">' +
      movie +
      '<img class="delete" onclick="deleteMovie(event)" src="images/delete.png"/></div>';
  }
  // Get the data from local storage
    for (let movie of localStorage.getItem("movies").split(",")) {
        if (movie !== "") {
        console.log(movie);
        document.querySelector(".list .movies").innerHTML +=
        '<div class="name" onclick="showMovieDetail(event)">' +
        movie +
        '<img class="delete" onclick="deleteMovie(event)" src="images/delete.png"/></div>';
    }
  }
  // delete movies
  function deleteMovie(e, delAll) {
    e.stopPropagation();
    e.target.parentNode.remove();
  }
  // delete all movies
  function deleteAll() {
    for (let name of document.querySelectorAll(".list .name")) {
      name.remove();
    }
  }
  // click movies'name, see the introduction of the movie
  function showMovieDetail(event) {
    document.querySelector(".detail").style.display = "block";
    for (let name of document.querySelectorAll(".film-name")) {
      if (name.innerText == event.target.innerText) {
        document.querySelector(".detail img").src =
          name.parentNode.parentNode.querySelector(".poster").src;
        document.querySelector(".detail .name").innerText =
          event.target.innerText;
        document.querySelector(".detail .filmIntroduce").innerText =
          name.parentNode.querySelector(".introduction-text").innerText;
      }
    }
  }

  // hide movie's name, poster, introduction
  function hideMovieDetail() {
    document.querySelector(".detail").style.display = "none";
    document.querySelector(".detail img").src = "";
    document.querySelector(".detail .name").innerText = "";
    document.querySelector(".detail .filmIntroduce").innerText = "";
  }