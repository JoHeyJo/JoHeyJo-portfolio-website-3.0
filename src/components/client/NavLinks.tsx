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
  i: number;
  section: NavLink;
}

function NavLinks({ i, section }: NavLinkProp) {
  return (
      <Link key={i} id={section.id} className="Nav-link" href={`#${section.link}`}>{section.name}</Link> 

  )
}

export default NavLinks