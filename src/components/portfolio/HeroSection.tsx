import { memo } from "react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";
import ChalkFrame from "./ChalkFrame";

import {
  NAME_FIRST,
  NAME_LAST,
  KICKER_TEXT,
  ROLE_TEXT,
  HERO_DESCRIPTION,
  CTA_DOWNLOAD_CV,
  CTA_GET_IN_TOUCH,
  UNDERLINE_PATH_D,
  ROLE_CIRCLE_PATH_D,
  STAGGER_CONTAINER_VARIANTS,
  FADE_IN_UP_VARIANTS,
  STYLES,
} from "./heroConstants";

// =========================================
// MEMOIZED SUB-COMPONENTS
// =========================================

const PrimaryButton = memo(({ href, text }: { href: string; text: string }) => (
  <a
    href={href}
    target={href.startsWith('#') ? '_self' : '_blank'}
    rel="noopener noreferrer"
    className={STYLES.primaryButton}
  >
    <ChalkFrame variant="button" />
    <span className="relative">{text}</span>
  </a>
));

const SecondaryButton = memo(({ href, text }: { href: string; text: string }) => (
    <a href={href} className={STYLES.secondaryButton}>
        {text}
    </a>
));

// The chalk that "just wrote" the name — rides the same path as the
// underline stroke, so its tip is mathematically pinned to the line's end.
const ChalkAtRest = () => (
  <g className="chalk-mover">
    <g className="chalk-shape">
      <rect x="0" y="-3" width="7" height="6" rx="3" fill="#B7BDB4" />
      <rect x="6" y="-3" width="20" height="6" rx="3" fill="#F4F1E8" />
    </g>
  </g>
);

// =========================================
// MAIN COMPONENT
// =========================================

const HeroSection = () => {
  return (
    <div className={STYLES.frame}>
      <div className={STYLES.board}>
        <div className={STYLES.section}>
          <div className={STYLES.container}>
            <motion.div
              className={STYLES.grid}
              variants={STAGGER_CONTAINER_VARIANTS}
              initial="hidden"
              animate="visible"
            >
              {/* Left Side: Content */}
              <div className={STYLES.contentWrapper}>
                <motion.div className={STYLES.kicker} variants={FADE_IN_UP_VARIANTS}>
                  {KICKER_TEXT}
                </motion.div>

                <motion.h1
                  className={STYLES.title}
                  variants={FADE_IN_UP_VARIANTS}
                >
                  <span className="underline-wrap">
                    {NAME_FIRST} {NAME_LAST}
                    <svg className="underline-svg" viewBox="0 0 400 18" preserveAspectRatio="none" aria-hidden="true">
                      <path d={UNDERLINE_PATH_D} fill="none" stroke="#F4F1E8" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                      <ChalkAtRest />
                    </svg>
                  </span>
                </motion.h1>

                <motion.div className={STYLES.roleLine} variants={FADE_IN_UP_VARIANTS}>
                  <span className={STYLES.roleCircle}>
                    <svg className={STYLES.roleCircleSvg} viewBox="0 0 220 70" preserveAspectRatio="none" aria-hidden="true">
                      <path d={ROLE_CIRCLE_PATH_D} fill="none" stroke="#D4B15C" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    <span className={STYLES.roleText}>{ROLE_TEXT}</span>
                  </span>
                </motion.div>

                <motion.p className={STYLES.description} variants={FADE_IN_UP_VARIANTS}>
                  {HERO_DESCRIPTION}
                </motion.p>

                <motion.div
                  className={STYLES.buttonGroup}
                  variants={FADE_IN_UP_VARIANTS}
                >
                    <PrimaryButton href={CTA_DOWNLOAD_CV.href} text={CTA_DOWNLOAD_CV.text} />
                    <SecondaryButton href={CTA_GET_IN_TOUCH.href} text={CTA_GET_IN_TOUCH.text} />
                </motion.div>
              </div>

              {/* Right Side: Image */}
              <motion.div className={STYLES.imageWrapper} variants={FADE_IN_UP_VARIANTS}>
                <div className={STYLES.imageContainer}>
                  <img
                    src={profilePhoto}
                    alt={`Headshot of ${NAME_FIRST} ${NAME_LAST}`}
                    className={STYLES.image}
                  />
                </div>
                <svg className="portrait-frame-svg pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 200 200" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M100,6 C150,4 196,44 194,100 C196,154 152,196 100,194 C48,196 5,152 6,100 C4,46 50,4 100,6 Z" fill="none" stroke="#F4F1E8" strokeWidth="2.5" strokeDasharray="1 9" strokeLinecap="round" />
                </svg>
              </motion.div>
            </motion.div>

            <div>
            <div className={STYLES.tray}>
              <div className={STYLES.trayItem}>
                <svg className={STYLES.traySvg} width="26" height="20" viewBox="0 0 26 20" aria-hidden="true">
                  <path d="M2,16 L8,4 L13,13 L17,7 L24,16" fill="none" stroke="#C9CFC3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Computer Vision
              </div>
              <div className={STYLES.trayItem}>
                <svg className={STYLES.traySvg} width="22" height="20" viewBox="0 0 22 20" aria-hidden="true">
                  <circle cx="4" cy="4" r="2.4" fill="none" stroke="#C9CFC3" strokeWidth="1.6" />
                  <circle cx="18" cy="4" r="2.4" fill="none" stroke="#C9CFC3" strokeWidth="1.6" />
                  <circle cx="11" cy="17" r="2.4" fill="none" stroke="#C9CFC3" strokeWidth="1.6" />
                  <path d="M6,5.5 L9,15 M16,5.5 L13,15 M6.3,4 L15.7,4" stroke="#C9CFC3" strokeWidth="1.4" />
                </svg>
                Diffusion Models
              </div>
              <div className={STYLES.trayItem}>
                <svg className={STYLES.traySvg} width="22" height="20" viewBox="0 0 22 20" aria-hidden="true">
                  <rect x="3" y="3" width="16" height="11" rx="2" fill="none" stroke="#C9CFC3" strokeWidth="1.6" />
                  <path d="M8,17 L14,17 M11,14 L11,17" stroke="#C9CFC3" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                Agentic Systems
              </div>
              <div className={STYLES.trayItem}>
                <svg className={STYLES.traySvg} width="22" height="20" viewBox="0 0 22 20" aria-hidden="true">
                  <path d="M11,2 L11,15 M6,7 L11,2 L16,7" fill="none" stroke="#C9CFC3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3,15 L3,17 L19,17 L19,15" fill="none" stroke="#C9CFC3" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                HPC Systems
              </div>
            </div>

            <svg className={STYLES.swipeDivider} viewBox="0 0 1100 46" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0,23 C120,8 220,38 340,20 C460,4 560,36 680,22 C800,10 900,34 1020,18 C1060,14 1080,20 1100,16" fill="none" stroke="#C9CFC3" strokeWidth="1.4" opacity="0.5" />
            </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroSection);
