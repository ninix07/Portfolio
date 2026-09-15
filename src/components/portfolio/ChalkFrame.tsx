import { EDGE_WOBBLE_H, EDGE_WOBBLE_V } from "./heroConstants";

interface ChalkFrameProps {
  variant?: "card" | "button";
  stroke?: string;
}

// Four independent hand-drawn strokes, one per edge — see the comment on
// EDGE_WOBBLE_H/V in heroConstants.ts for why this replaced a single
// stretched path.
const ChalkFrame = ({ variant = "card", stroke = "#F4F1E8" }: ChalkFrameProps) => {
  const size = variant === "button" ? "chalk-frame-thin" : "chalk-frame-thick";
  return (
    <>
      <svg className={`card-edge edge-top ${size}`} viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
        <path d={EDGE_WOBBLE_H} fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <svg className={`card-edge edge-bottom ${size}`} viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
        <path d={EDGE_WOBBLE_H} fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <svg className={`card-edge edge-left ${size}`} viewBox="0 0 10 200" preserveAspectRatio="none" aria-hidden="true">
        <path d={EDGE_WOBBLE_V} fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <svg className={`card-edge edge-right ${size}`} viewBox="0 0 10 200" preserveAspectRatio="none" aria-hidden="true">
        <path d={EDGE_WOBBLE_V} fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default ChalkFrame;
