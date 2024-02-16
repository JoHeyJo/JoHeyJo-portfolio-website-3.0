"use client"
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../styles/NavDropdown.css'
import { sections } from '../utils/sections';
const RESUME_LINK = "https://github.com/JoHeyJo/myWebsiteReact/raw/main/public/Joannes_Figueroa_Resume.pdf"

/** Renders mobile nav
 * 
 * 
 * TopBanner -> NavDropdown
 */
function NavDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant='dark-outline' split={false} id="dropdown-basic">
        <FontAwesomeIcon icon={faBars} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {sections.map((section, i) =>
          section.id === "Nav-resume" ?
            <Dropdown.Item key={i}>
              <a id={section.id} className="Nav-link" href={section.link} />
            </Dropdown.Item>
            :
            <Dropdown.Item key={i}>
              <Link className='Nav-link' href={`#${section.link}`}>{section.name}</Link>
            </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavDropdown;