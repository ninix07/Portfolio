import { motion, Variants } from "framer-motion";
import {
  SECTION_TITLE,
  SECTION_TITLE_GRADIENT,
  SECTION_SUBTITLE,
  ANIMATION_DURATION_DEFAULT,
  ANIMATION_DURATION_STAGGER,
  ANIMATION_DURATION_ITEM,
  ANIMATION_EASE,
  VIEWPORT_ONCE,
  VIEWPORT_AMOUNT_DEFAULT,
  VIEWPORT_AMOUNT_STAGGER,
  STYLES,
  getSortedTimelineEvents,
  getTimelineIcon,
  type TimelineEvent,
} from "./constants";
import { GraduationCap } from "lucide-react";
const JourneySection = () => {
    const timelineEvents = getSortedTimelineEvents();
    return (
        <section id="experience" className={STYLES.section}>
            <div className={STYLES.container}>
                <motion.div
                    className={STYLES.titleWrapper}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: VIEWPORT_ONCE, amount: VIEWPORT_AMOUNT_DEFAULT }}
                    transition={{ duration: ANIMATION_DURATION_DEFAULT }}
                >
                    <h2 className={STYLES.title}>
                        {SECTION_TITLE}{" "}
                        <span className={STYLES.gradientText}>
                            {SECTION_TITLE_GRADIENT}
                        </span>
                    </h2>
                    <p className={STYLES.subtitle}>{SECTION_SUBTITLE}</p>
                </motion.div>

                <div className={STYLES.timelineWrapper}>
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className={STYLES.timelineLine}></div>
                        
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: VIEWPORT_ONCE, amount: VIEWPORT_AMOUNT_STAGGER }}
                            variants={{ visible: { transition: { staggerChildren: ANIMATION_DURATION_STAGGER } } }}
                        >
                            {timelineEvents.map((item, index) => (
                                <TimelineItem key={`${item.type}-${index}`} item={item} isLeft={index % 2 !== 0} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Sub-components ---
interface TimelineItemProps {
    item: TimelineEvent;
    isLeft: boolean;
}

const TimelineItem = ({ item, isLeft }: TimelineItemProps) => {
    const itemVariants: Variants = {
        hidden: { opacity: 0, x: isLeft ? -40 : 40 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: ANIMATION_DURATION_ITEM, ease: ANIMATION_EASE } 
        },
    };
    
    const Icon = getTimelineIcon(item.type);
    const isExperience = item.type === 'experience';

    return (
        <motion.div className="relative mb-12" variants={itemVariants}>
            <div className={`flex items-start ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                {/* Content Card */}
                <div className={STYLES.card.wrapper}>
                    <div className={STYLES.card.base}>
                        <p className={STYLES.card.period}>{item.period}</p>
                        <h4 className={STYLES.card.title}>
                            {isExperience ? item.title : item.degree}
                        </h4>
                        <p className={STYLES.card.subtitle}>
                            {isExperience ? item.company : item.institution}
                        </p>
                        {isExperience ? (
                            <ul className={STYLES.card.description}>
                                {item.description?.map((desc, i) => <li key={i}>{desc}</li>)}
                            </ul>
                        ) : (
                            <div>
                                <p className={STYLES.card.details}>{item.details}</p>
                                <div className={STYLES.card.cgpa}>
                                    <span className={STYLES.card.cgpaHighlight}> CGPA: {item.cgpa}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* Center Dot */}
                <div className={STYLES.timelineDot.wrapper}>
                    <div className={STYLES.timelineDot.circle}>
                        <Icon className={STYLES.timelineDot.icon} />
                    </div>
                </div>
                <div className="hidden md:block md:w-5/12"></div>
            </div>
        </motion.div>
    );
};

export default JourneySection;