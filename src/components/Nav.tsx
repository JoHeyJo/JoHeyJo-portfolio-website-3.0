import { Navbar } from "react-bootstrap";
import NavLink from './client/NavLinks'
import '../styles/Nav.css'
import { sections } from "../utils/sections";

function Nav() {
  return (
    <div className="d-none d-md-inline">
      <Navbar id="Nav-navbar" className="flex-column">
        {sections.map((section, i) =>
          section.id === "Nav-resume" ?
            <a id={section.id} className="Nav-link" href={section.link} />
            :
            <NavLink i={i} section={section}/>
        )}
      </Navbar>
    </div>
  )
}

export default Nav
