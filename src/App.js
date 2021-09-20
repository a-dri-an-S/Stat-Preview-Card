import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <div className="card-info">

          <div className="card-desc">
            <h1 className="card-main-desc">Get insights that help your business grow.</h1>
            <p className="card-tag-desc">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
          </div>

          <div className="card-stats">
            <div className="card-stat">
              <h2 className="card-main-stat">10k+</h2>
              <p className="card-tag-stat">COMPANIES</p>
            </div>

            <div className="card-stat">
              <h2 className="card-main-stat">314</h2>
              <p className="card-tag-stat">TEMPLATES</p>
            </div>

            <div className="card-stat">
              <h2 className="card-main-stat">12M+</h2>
              <p className="card-tag-stat">QUERIES</p>
            </div>
          </div>

        </div>

        <div className="card-img">
          <image className="card-main-img"/>
        </div>
      </section>

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
