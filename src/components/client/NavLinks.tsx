"use client"
import { BrowserRouter, Link } from "react-router-dom";
import '../styles/Nav.css';

type NavLink = {
  id?: string;
  link: string;
  name: string;
}

type NavLinkProp = {
  i: number;
  section: NavLink;
}

function NavLinks({ i, section }: NavLinkProp) {
  return (
    <BrowserRouter>
      <Link key={i} id={section.id} className="Nav-link" to={`#${section.link}`}>{section.name}</Link>
    </BrowserRouter>

  )
}

export default NavLinks