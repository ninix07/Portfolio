import { memo } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useAvailability } from "@/hooks/useAvailability";

import {
  NAME_FIRST,
  NAME_LAST,
  SUBTITLE_ITEMS,
  HERO_DESCRIPTION,
  SOCIAL_LINKS,
  CTA_DOWNLOAD_CV,
  CTA_GET_IN_TOUCH,
  STAGGER_CONTAINER_VARIANTS,
  FADE_IN_UP_VARIANTS,
  STYLES,
  type SocialLink
} from "./heroConstants";

// =========================================
// MEMOIZED SUB-COMPONENTS
// =========================================

const PrimaryButton = memo(({ href, text, icon: Icon }: { href: string; text: string; icon?: React.ElementType }) => (
  <a
    href={href}
    target={href.startsWith('#') ? '_self' : '_blank'}
    rel="noopener noreferrer"
    className={STYLES.primaryButton}
  >
    {Icon && <Icon className="mr-2 h-5 w-5" />}
    {text}
  </a>
));

const SecondaryButton = memo(({ href, text }: { href: string; text: string }) => (
    <a href={href} className={STYLES.secondaryButton}>
        {text}
    </a>
));

const SocialIconLink = memo(({ href, label, icon: Icon }: SocialLink) => (
  <motion.a
    key={label}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={STYLES.socialLink}
    whileHover={{ y: -3 }}
    transition={{ duration: 0.2 }}
  >
    <Icon className="h-8 w-8" />
  </motion.a>
));

// =========================================
// MAIN COMPONENT
// =========================================

const HeroSection = () => {
  const { status, isAvailable } = useAvailability();
  return (
    <section className={STYLES.section}>
      <div className={STYLES.container}>
        <motion.div
          className={STYLES.grid}
          variants={STAGGER_CONTAINER_VARIANTS}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side: Content */}
          <div className={STYLES.contentWrapper}>
            <motion.h1
              className={STYLES.title}
              variants={FADE_IN_UP_VARIANTS}
            >
              {NAME_FIRST}{" "}
              <span className={STYLES.gradientText}>
                {NAME_LAST}
              </span>
            </motion.h1>

            <motion.div className={STYLES.subtitle} variants={FADE_IN_UP_VARIANTS}>
                <TypeAnimation
                    sequence={SUBTITLE_ITEMS}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </motion.div>

            <motion.p className={STYLES.description} variants={FADE_IN_UP_VARIANTS}>
              {HERO_DESCRIPTION}
            </motion.p>
            
            <motion.div
              className={STYLES.buttonGroup}
              variants={FADE_IN_UP_VARIANTS}
            >
                <PrimaryButton href={CTA_DOWNLOAD_CV.href} text={CTA_DOWNLOAD_CV.text} icon={CTA_DOWNLOAD_CV.icon} />
                <SecondaryButton href={CTA_GET_IN_TOUCH.href} text={CTA_GET_IN_TOUCH.text} />
            </motion.div>

            <motion.div
              className={STYLES.socialGroup}
              variants={FADE_IN_UP_VARIANTS}
            >
              {SOCIAL_LINKS.map((link) => (
                <SocialIconLink {...link} key={link.label} />
              ))}
            </motion.div>
          </div>

          {/* Right Side: Image */}
          <motion.div className={STYLES.imageWrapper} variants={FADE_IN_UP_VARIANTS}>
            <div className="relative">
              <div className={STYLES.imageSpinner}></div>
              <div className={STYLES.imageContainer}>
                <img
                  src={profilePhoto}
                  alt={`Headshot of ${NAME_FIRST} ${NAME_LAST}`}
                  className={STYLES.image}
                />
              </div>
            </div>
            {/* <div className={STYLES.hireBadge}>
              {isAvailable && (
                <span className="relative flex h-3 w-3">
                  <span className={STYLES.hireBadgePing}></span>
                  <span className={STYLES.hireBadgeDot}></span>
                </span>
              )}
              <span className="text-slate-200">{status}</span>
            </div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(HeroSection);