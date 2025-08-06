import { motion } from 'framer-motion';
import './HeroSlide.css';

const slideVariants = {
  initial: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    position: 'absolute',
  }),
  animate: {
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  static: {
    x: 0,
    position: 'absolute',
  },
};

const HeroSlide = ({ slide, direction = 1, isAnimating = false, onAnimationComplete }) => {
  return (
    <motion.div
      className="hero-slide-content"
      style={{ background: slide.bg }}
      variants={slideVariants}
      initial={isAnimating ? "initial" : false}
      animate={isAnimating ? "animate" : "static"}
      custom={direction}
      onAnimationComplete={onAnimationComplete}
    >
   <div className="hero-left">
        <h1>{slide.title}</h1>
        <p>{slide.description}</p>
        <button className="hero-btn">Try It Now</button>
      </div>
      <div className="hero-right">
        <p>Every sip and bite at DoughPamine is crafted with care and a sprinkle of love.</p>
<p>From velvety shakes to melt-in-your-mouth cupcakes and warm, fresh doughnuts, each treat is a little celebration.</p>
<p>These aren’t just desserts — they’re moments of pure joy made just for you.</p>
<p>Come taste the magic that turns simple cravings into unforgettable memories.</p>

      </div>
    </motion.div>
  );
};

export default HeroSlide;
