import '../styles/Banner.css'
import { BannerResize } from '@/utils/BannerResize';

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
          <BannerResize />
        </section>
      </section>
    </div>
  )
}

export default Banner;