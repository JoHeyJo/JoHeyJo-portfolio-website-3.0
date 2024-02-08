"use client"
// import { BrowserRouter, Link } from "react-router-dom";
import Link from 'next/link';
import '../../styles/Nav.css';

type NavLink = {
  id?: string;
  link: string;
  name: string;
}

type NavLinkProp = {
  section: NavLink;
}

function NavLinks({ section }: NavLinkProp) {
  return (
      <Link id={section.id} className="Nav-link" href={`#${section.link}`}>{section.name}</Link> 

  )
}

export default NavLinks