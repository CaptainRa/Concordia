import { Link } from "react-scroll"
import { Link as PageLink } from "@inertiajs/react"

export default function Section() {
    return (
        <>
              <h1 className="text-xl font-semibold">Section</h1>
              
              <Link to="hero-section" delay={100} smooth className="cursor-pointer hover:text-blue-300">
                  <h1>
                      Home
                  </h1>
              </Link>
              <PageLink href="/about" className="cursor-pointer hover:text-blue-300">
                  <h1>
                      About
                  </h1>
              </PageLink>
              <PageLink href="/contact" className="cursor-pointer hover:text-blue-300">
                  <h1>
                      Contact
                  </h1>
              </PageLink>
              <PageLink href="/project" className="cursor-pointer hover:text-blue-300">
                  <h1>
                      Projects
                  </h1>
              </PageLink>
        </>
    )
}