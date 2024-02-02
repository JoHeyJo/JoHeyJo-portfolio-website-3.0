import '../styles/Banner.css'
import { BannerIcons } from '@/components/BannerIcons';

/** Renders Banner
 * 
 * App -> Banner -> BannerResize
 */
function Banner() {
  return (
    <div id="Banner">
      <div id="full-stack">Full Stack</div>
      <section id="Banner-sub" className="d-flex">
        <div id="swe">swe</div>
        <section id="Banner-devicons">
          <BannerIcons />
        </section>
      </section>
    </div>
  )
}

export default Banner;