"use client"
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

/** Render individual client nav links
 * 
 * Nav -> NavLinks
 */

function NavLinks({ section }: NavLinkProp) {
  return (
      <Link id={section.id} className="Nav-link" href={`#${section.link}`}>{section.name}</Link> 

  )
}

export default NavLinks