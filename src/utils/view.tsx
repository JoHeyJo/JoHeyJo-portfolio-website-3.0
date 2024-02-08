import '../styles/Banner.css'
import 'devicon/devicon.min.css';

// DO NOT FORMAT 
// Written like this to space out pipe w/o additional styling. Yes. I know it's lazy...

function tech(tech: string){
  return tech === "Flask"
  ?
    <span className="tech"> Flask </span>
  :
    <span><span className="tech">{tech}< span className="pipes" >|</span> </span></span >
}

function icon(iconClass: string) {
  return iconClass === "devicon-flask-original"
  ? 
  <i className="devicon-flask-original"></i>
  :
    <span>
      <i className={iconClass}> </i><span className="pipes">|</span > </span>
}

function renderTypeScript(windowWidth: number, isLandscape: boolean) {
  return windowWidth > 915
    ? tech("TypeScript")
    : icon("devicon-typescript-plain")
}
function renderReact(windowWidth: number, isLandscape: boolean) {
  return windowWidth > 935
    ? tech("React")
    : icon("devicon-react-original")
}

function renderPython(windowWidth: number, isLandscape: boolean) {
  return windowWidth > 955
    ? tech("Python")
    : icon("devicon-python-plain")
}

function renderFlask(windowWidth: number, isLandscape: boolean) {
  return windowWidth > 995
    ? tech("Flask")
    : icon("devicon-flask-original")
}

export { renderTypeScript, renderReact, renderPython, renderFlask }