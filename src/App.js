import "./App.css";
import Spline from "@splinetool/react-spline";

function App() {
  return (
    <div className="App">
      <Spline scene="https://prod.spline.design/F1o7xDiFN6F0rfam/scene.splinecode" />
      <div className="hero">
        <h1>Stay tuned</h1>
        <h3>Design & Development in progress</h3>
        <div className="ctrls">
          <a
            href="https://www.figma.com/file/sZPrIIs4yWIqAWP5su7y3o/portfolio2.0?node-id=0%3A1&t=sIdnWRk7lgaZhzR5-1"
            target="_blank"
            className="btn"
          >
            Design
          </a>
          <a
            href="https://jatinchourasia.netlify.app/"
            target="_blank"
            className="btn btn1"
          >
            Portfolio v1
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
