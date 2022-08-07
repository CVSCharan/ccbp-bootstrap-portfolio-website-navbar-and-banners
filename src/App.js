import "./App.css";

function App() {
  return (
    <div class="bg-container">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="!#">
          <div class="logocontainer">
            <h1 class="logoh">C.V.S.</h1>
          </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-lg-auto">
            <a class="nav-link active" href="!#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-link" href="!#">
              Projects
            </a>
            <a class="nav-link" href="!#">
              Recent Blogs
            </a>
            <a class="nav-link" href="!#">
              Testimonials
            </a>
          </div>
        </div>
      </nav>
      <div class="container mt-2">
        <div class="row">
          <div class="col-12 d-md-none order-md-1 ml-auto mt-4">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-banner-img.png"
              class="img"
              alt="img1"
            />
          </div>
          <div class="col-md-7 col-lg-6">
            <div class="col-12">
              <h1 class="heading1 mt-5">
                Hey, I am <span class="p1">CVS CHARAN</span>
              </h1>
            </div>

            <div class="col-12 mt-4">
              <p class="para1">I am Frontend Developer & Mentor.</p>

              <button class="butn btn-primary mb-5 mt-3">Contact Me</button>
            </div>
          </div>

          <div class="col-12 col-md-5 col-lg-5 order-md-2 d-none d-md-block mt-5">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-banner-img.png"
              class="img"
              alt="img2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
