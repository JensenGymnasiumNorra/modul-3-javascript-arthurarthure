let header = document.getElementsByTagName("header");
header [0].innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-black p-3 mb-2 text-secondary-emphasis">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Bootstrap test</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Modul4.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Movies.html">Movies</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="Music.html">Music</a>
        </li>
        
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>`

document.body.classList.add("bg-dark", "text-light" ); 