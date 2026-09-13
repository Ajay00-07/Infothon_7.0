import { useEffect, useState, useMemo } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// System 1: Portal Energy Field Particle Interface
interface PortalParticleSpec {
  id: number;
  layer: 0 | 1 | 2; // 0: Background (slow/dim), 1: Midground (standard), 2: Foreground (fast/bright)
  angle: number;
  initialDist: number;
  targetDist: number;
  size: number;
  startAttract: number;
  absorbTime: number;
  baseOpacity: number;
  color: string;
  hasTrail: boolean;
  driftX: number;
  driftY: number;
  speedFactor: number;
}

// System 2: Distant Atmospheric Falling Particle Interface
interface FallingParticleSpec {
  id: number;
  layer: 0 | 1 | 2; // 0: Far (dim), 1: Mid (medium), 2: Near (bright)
  x: number; // Viewport X percentage (0% to 100%)
  startY: number; // Viewport Y offset percentage (-20% to 100%)
  size: number;
  duration: number; // 15s to 30s
  delay: number;
  baseOpacity: number;
  driftX: number; // 5px - 15px horizontal sway
  hasTrail: boolean;
  hasPulse: boolean;
}

// System 3: Roaming Energy Circles Interface
interface RoamingCircleSpec {
  id: number;
  radiusX: number;
  radiusY: number;
  duration: number;
  clockwise: boolean;
  tiltAngle: number;
}

// Sub-component for individual Portal Attraction Particle with Cursor Gravity
const AttractionParticle = ({
  spec,
  scrollYProgress,
  mousePos,
}: {
  spec: PortalParticleSpec;
  scrollYProgress: MotionValue<number>;
  mousePos: { x: number; y: number };
}) => {
  const scatterX = Math.cos(spec.angle) * spec.initialDist;
  const scatterY = Math.sin(spec.angle) * spec.initialDist;

  const targetX = Math.cos(spec.angle) * spec.targetDist;
  const targetY = Math.sin(spec.angle) * spec.targetDist;

  const endScroll = Math.min(0.75, spec.absorbTime * 2);

  const posX = useTransform(
    scrollYProgress,
    [0, spec.startAttract, endScroll],
    [scatterX, targetX, 0]
  );

  const posY = useTransform(
    scrollYProgress,
    [0, spec.startAttract, endScroll],
    [scatterY, targetY, 0]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, spec.startAttract, endScroll - 0.08, endScroll, 0.9],
    [spec.baseOpacity, spec.baseOpacity, 1, 0, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [endScroll - 0.08, endScroll],
    [1, 1.8]
  );

  const cursorGravityX = mousePos.x * (spec.layer === 2 ? 0.4 : 0.2);
  const cursorGravityY = mousePos.y * (spec.layer === 2 ? 0.4 : 0.2);

  return (
    <motion.div
      style={{
        x: posX,
        y: posY,
        opacity,
        scale,
      }}
      className={`absolute flex items-center justify-center pointer-events-none ${
        spec.layer === 0 ? "z-0" : spec.layer === 1 ? "z-10" : "z-20"
      }`}
    >
      <motion.div
        animate={{
          y: [0, spec.driftY + cursorGravityY, 0],
          x: [0, spec.driftX + cursorGravityX, 0],
        }}
        transition={{
          duration: 5 + (spec.id % 4) * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center"
      >
        {spec.hasTrail && (
          <div
            style={{ height: `${spec.size * 3}px` }}
            className="w-[1px] bg-gradient-to-t from-[#7CFF4F]/50 to-transparent mb-[-1px]"
          />
        )}
        <div
          style={{
            width: `${spec.size}px`,
            height: `${spec.size}px`,
            backgroundColor: spec.color,
          }}
          className={`rounded-full ${
            spec.layer === 2
              ? "shadow-[0_0_10px_#7CFF4F]"
              : "shadow-[0_0_4px_rgba(124,255,79,0.4)]"
          }`}
        />
      </motion.div>
    </motion.div>
  );
};

// Sub-component for Distant Falling Atmospheric Particles
const DistantFallingParticle = ({
  spec,
  scrollYProgress,
}: {
  spec: FallingParticleSpec;
  scrollYProgress: MotionValue<number>;
}) => {
  const scrollOffsetY = useTransform(scrollYProgress, [0, 0.6], [0, 100]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <motion.div
      style={{
        left: `${spec.x}%`,
        top: `${spec.startY}%`,
        opacity: scrollOpacity,
        y: scrollOffsetY,
      }}
      className="absolute pointer-events-none z-0"
    >
      <motion.div
        animate={{
          y: ["0vh", "110vh"],
          x: [0, spec.driftX, 0],
          opacity: spec.hasPulse
            ? [
                spec.baseOpacity * 0.4,
                spec.baseOpacity,
                spec.baseOpacity * 1.5,
                spec.baseOpacity * 0.4,
              ]
            : [spec.baseOpacity * 0.6, spec.baseOpacity, spec.baseOpacity * 0.6],
        }}
        transition={{
          y: {
            duration: spec.duration,
            repeat: Infinity,
            ease: "linear",
            delay: spec.delay,
          },
          x: {
            duration: spec.duration * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: {
            duration: spec.hasPulse ? 3.5 : 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="relative flex flex-col items-center justify-center"
      >
        {spec.hasTrail && (
          <div className="w-[1px] h-4 bg-gradient-to-t from-[#7CFF4F]/40 to-transparent mb-[-1px]" />
        )}
        <div
          style={{
            width: `${spec.size}px`,
            height: `${spec.size}px`,
          }}
          className={`rounded-full ${
            spec.layer === 2
              ? "bg-[#7CFF4F]/80 shadow-[0_0_6px_#7CFF4F]"
              : spec.layer === 1
              ? "bg-[#9DFF70]/50 shadow-[0_0_3px_rgba(157,255,112,0.3)]"
              : "bg-[#6EE7A0]/30"
          }`}
        />
      </motion.div>
    </motion.div>
  );
};

// Sub-component for Independent 3D Roaming Energy Circles
const RoamingCircle = ({
  spec,
  scrollYProgress,
  mousePos,
}: {
  spec: RoamingCircleSpec;
  scrollYProgress: MotionValue<number>;
  mousePos: { x: number; y: number };
}) => {
  // Scroll convergence: tightens orbital radius & absorbs into portal at 85%-100% scroll
  const radiusMult = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.85, 0.95],
    [1, 0.75, 0.35, 0.08, 0]
  );

  const scrollOpacity = useTransform(
    scrollYProgress,
    [0, 0.6, 0.85, 0.95],
    [1, 1, 1, 0]
  );

  const trailOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.6, 0.85],
    [0.4, 1, 0]
  );

  // Subtle Mouse Repulsion Shift
  const mouseShiftX = mousePos.x * 0.3;
  const mouseShiftY = mousePos.y * 0.3;

  return (
    <motion.div
      style={{
        scale: radiusMult,
        opacity: scrollOpacity,
        rotateZ: spec.tiltAngle,
        width: spec.radiusX * 2,
        height: spec.radiusY * 2,
        x: mouseShiftX,
        y: mouseShiftY,
      }}
      className="absolute pointer-events-none flex items-center justify-center z-15"
    >
      <motion.div
        animate={{ rotate: spec.clockwise ? 360 : -360 }}
        transition={{ duration: spec.duration, repeat: Infinity, ease: "linear" }}
        className="w-full h-full relative flex items-center justify-start pointer-events-none"
      >
        {/* Roaming Energy Node with 3D Depth Outer Ring & Glowing Core */}
        <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
          {/* Fading Trailing Arc */}
          <motion.div
            style={{ opacity: trailOpacity }}
            className="absolute right-full w-10 md:w-14 h-1 bg-gradient-to-l from-[#7CFF4F] to-transparent rounded-full opacity-65"
          />
          {/* Outer Energy Circle (14px) */}
          <div className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border border-[#7CFF4F] bg-[#7CFF4F]/10 shadow-[0_0_12px_#7CFF4F] flex items-center justify-center">
            {/* Center Energy Point (3px) */}
            <div className="w-1 h-1 rounded-full bg-[#7CFF4F] shadow-[0_0_6px_#7CFF4F]" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Sub-component for 3 Large, Thin, Irregular SVG Outer Energy Loops
const IrregularEnergyLoop = ({
  radius,
  duration,
  clockwise,
  tiltX = 0,
  tiltY = 0,
  dashArray,
  strokeWidth = 1.5,
  baseOpacity = 0.5,
  breathDelay = 0,
  collapseStart = 0.3,
  collapseEnd = 0.85,
  scrollYProgress,
}: {
  radius: number;
  duration: number;
  clockwise: boolean;
  tiltX?: number;
  tiltY?: number;
  dashArray: string;
  strokeWidth?: number;
  baseOpacity?: number;
  breathDelay?: number;
  collapseStart?: number;
  collapseEnd?: number;
  scrollYProgress: MotionValue<number>;
}) => {
  // Staggered Sequential Scroll Collapse
  const scale = useTransform(
    scrollYProgress,
    [0, collapseStart, collapseEnd],
    [1, 0.75, 0.04]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, collapseStart, collapseEnd],
    [baseOpacity, baseOpacity * 0.6, 0]
  );

  const size = radius * 2;
  const viewBoxSize = size + 40;
  const center = viewBoxSize / 2;

  return (
    <motion.div
      style={{
        scale,
        opacity,
        rotateX: tiltX,
        rotateY: tiltY,
        width: size,
        height: size,
      }}
      className="absolute pointer-events-none flex items-center justify-center z-5"
    >
      {/* Ripple Breathing animation with staggered delay */}
      <motion.div
        animate={{
          scale: [1, 1.035, 1],
          opacity: [1, 0.82, 1],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: breathDelay,
        }}
        className="w-full h-full relative flex items-center justify-center"
      >
        {/* Continuous Asynchronous Rotation Loop */}
        <motion.div
          animate={{ rotate: clockwise ? 360 : -360 }}
          transition={{ duration, repeat: Infinity, ease: "linear" }}
          className="w-full h-full relative flex items-center justify-center"
        >
          <svg
            viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
            className="w-full h-full overflow-visible drop-shadow-[0_0_10px_#7CFF4F]"
          >
            <defs>
              <linearGradient
                id={`loopGrad-${radius}-${clockwise ? "cw" : "ccw"}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#7CFF4F" stopOpacity="0.9" />
                <stop offset="45%" stopColor="#9DFF70" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#7CFF4F" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Base Irregular Broken Loop Circle */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={`url(#loopGrad-${radius}-${clockwise ? "cw" : "ccw"})`}
              strokeWidth={strokeWidth}
              strokeDasharray={dashArray}
              strokeLinecap="round"
            />

            {/* Circumferential Energy Flow Pulse Arc along loop */}
            <motion.circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke="#7CFF4F"
              strokeWidth={strokeWidth + 0.8}
              strokeDasharray={`100 ${Math.max(100, 2 * Math.PI * radius - 100)}`}
              strokeLinecap="round"
              animate={{ strokeDashoffset: [0, clockwise ? -2 * Math.PI * radius : 2 * Math.PI * radius] }}
              transition={{
                duration: duration * 0.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="opacity-90 drop-shadow-[0_0_12px_#7CFF4F]"
            />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const HeroScene = () => {
  const { scrollYProgress } = useScroll();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 12;
      setMousePos({ x, y });
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    setIsMobile(window.innerWidth < 768);

    window.addEventListener("mousemove", handleMouseMove);

    const t1 = setTimeout(() => setStage(1), 300);
    const t2 = setTimeout(() => setStage(2), 800);
    const t3 = setTimeout(() => setStage(3), 1500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // 4-PHASE SCROLL TRANSFORMATION FOR CENTRAL PORTAL
  const portalScale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 0.95],
    [1, 1.04, 0.6, 0.15, 0.04]
  );
  const portalOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.6, 0.85],
    [1, 1, 0.8, 0]
  );
  const portalTranslateY = useTransform(
    scrollYProgress,
    [0, 0.5, 0.9],
    [0, -20, -50]
  );

  const borderPulseOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.5, 0.7],
    [0.35, 0.95, 0.1]
  );

  const burstScale = useTransform(
    scrollYProgress,
    [0.45, 0.7],
    [0.8, 1.9]
  );
  const burstOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.58, 0.7],
    [0, 0.85, 0]
  );

  // SYSTEM 1: Portal Energy Field Particles (42 desktop, 20 mobile)
  const portalParticleCount = isMobile ? 20 : 42;
  const portalParticles = useMemo<PortalParticleSpec[]>(() => {
    const colors = ["#7CFF4F", "#9DFF70", "#6EE7A0"];
    return Array.from({ length: portalParticleCount }).map((_, i) => {
      const layer: 0 | 1 | 2 = i % 5 === 0 ? 2 : i % 3 === 0 ? 0 : 1;
      const angle = (i / portalParticleCount) * 2 * Math.PI + (i % 7) * 0.12;
      const initialDist = 200 + (i % 8) * 32;
      const targetDist = 160 + (i % 4) * 12;
      const isBright = i % 6 === 0;
      const size = isBright ? 4 : layer === 2 ? 3 : layer === 0 ? 1.5 : 2.5;
      const startAttract = 0.01 + (i % 5) * 0.012;
      const absorbTime = 0.18 + (i % 10) * 0.018;
      const speedFactor = layer === 2 ? 1.3 : layer === 0 ? 0.75 : 1.0;

      return {
        id: i,
        layer,
        angle,
        initialDist,
        targetDist,
        size,
        startAttract,
        absorbTime,
        baseOpacity: layer === 0 ? 0.35 : layer === 2 ? 0.9 : 0.6,
        color: colors[i % colors.length],
        hasTrail: i % 7 === 0,
        driftX: ((i % 5) - 2) * 5,
        driftY: (((i * 3) % 5) - 2) * 5,
        speedFactor,
      };
    });
  }, [portalParticleCount]);

  // SYSTEM 2: Distant Falling Atmospheric Particles (28 desktop, 12 mobile)
  const fallingParticleCount = isMobile ? 12 : 28;
  const fallingParticles = useMemo<FallingParticleSpec[]>(() => {
    return Array.from({ length: fallingParticleCount }).map((_, i) => {
      const layer: 0 | 1 | 2 = i % 5 === 0 ? 2 : i % 3 === 0 ? 0 : 1;
      const x = (i * 3.4 + (i % 7) * 7.8) % 96 + 2;
      const startY = -15 + ((i * 13) % 45);
      const duration = 15 + (i % 5) * 3.5;
      const delay = (i % 7) * 1.2;
      const baseOpacity =
        layer === 0 ? 0.18 : layer === 1 ? 0.35 : 0.5;

      return {
        id: i,
        layer,
        x,
        startY,
        size: layer === 2 ? 2.5 : layer === 1 ? 2.0 : 1.2,
        duration,
        delay,
        baseOpacity,
        driftX: ((i % 5) - 2) * 5,
        hasTrail: i % 7 === 0,
        hasPulse: i % 5 === 0,
      };
    });
  }, [fallingParticleCount]);

  // SYSTEM 3: 2–3 Independent Roaming Energy Circles (3 desktop, 2 mobile)
  const roamingCircles = useMemo<RoamingCircleSpec[]>(() => {
    const specs: RoamingCircleSpec[] = [
      { id: 1, radiusX: 260, radiusY: 190, duration: 24, clockwise: true, tiltAngle: 0 },
      { id: 2, radiusX: 190, radiusY: 130, duration: 16, clockwise: false, tiltAngle: 15 },
    ];
    if (!isMobile) {
      specs.push({
        id: 3,
        radiusX: 220,
        radiusY: 150,
        duration: 20,
        clockwise: true,
        tiltAngle: -25,
      });
    }
    return specs;
  }, [isMobile]);

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#050907]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-primary/20 bg-primary/5 opacity-40" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#050907]">
      {/* Subtle Moving Green Grid Background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(124, 255, 79, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(124, 255, 79, 0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Atmospheric Breathing Radial Green Glow */}
      <motion.div
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.25, 0.38, 0.25],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-[650px] h-[650px] md:w-[900px] md:h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 255, 79, 0.16) 0%, rgba(124, 255, 79, 0.03) 45%, transparent 70%)",
        }}
      />

      {/* Periodic Expanding Circular Energy Wave */}
      {stage >= 2 && (
        <motion.div
          animate={{
            scale: [0.5, 1.9],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
            repeatDelay: 4.5,
            ease: "easeOut",
          }}
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] md:w-[540px] md:h-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7CFF4F]/40 pointer-events-none"
        />
      )}

      {/* SYSTEM 2: DISTANT ATMOSPHERIC FALLING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {fallingParticles.map((spec) => (
          <DistantFallingParticle
            key={spec.id}
            spec={spec}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>

      {/* Main Portal Container: UPRIGHT & VISUALLY STABLE */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        style={{
          y: portalTranslateY,
          scale: portalScale,
          opacity: portalOpacity,
        }}
      >
        <div className="relative w-[520px] h-[520px] md:w-[780px] md:h-[780px] flex items-center justify-center">
          {/* 3 LARGE, THIN, IRREGULAR SVG OUTER ENERGY LOOPS */}
          {stage >= 1 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Loop 1: Inner Energy Loop (~180px) */}
              <IrregularEnergyLoop
                radius={isMobile ? 130 : 180}
                duration={12}
                clockwise={true}
                tiltX={0}
                tiltY={0}
                dashArray="60 20 110 30"
                strokeWidth={1.5}
                baseOpacity={0.55}
                breathDelay={0}
                collapseStart={0.35}
                collapseEnd={0.85}
                scrollYProgress={scrollYProgress}
              />

              {/* Loop 2: Middle Energy Loop (~250px) */}
              <IrregularEnergyLoop
                radius={isMobile ? 180 : 250}
                duration={20}
                clockwise={false}
                tiltX={8}
                tiltY={0}
                dashArray="80 30 140 40"
                strokeWidth={1.2}
                baseOpacity={0.45}
                breathDelay={0.15}
                collapseStart={0.3}
                collapseEnd={0.75}
                scrollYProgress={scrollYProgress}
              />

              {/* Loop 3: Outer Energy Loop (~340px) */}
              <IrregularEnergyLoop
                radius={isMobile ? 240 : 340}
                duration={30}
                clockwise={true}
                tiltX={18}
                tiltY={10}
                dashArray="40 25 120 40 90 20"
                strokeWidth={1.0}
                baseOpacity={0.35}
                breathDelay={0.3}
                collapseStart={0.25}
                collapseEnd={0.65}
                scrollYProgress={scrollYProgress}
              />
            </div>
          )}

          {/* SYSTEM 3: 2–3 INDEPENDENT ROAMING ENERGY CIRCLES */}
          {stage >= 1 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-15">
              {roamingCircles.map((spec) => (
                <RoamingCircle
                  key={spec.id}
                  spec={spec}
                  scrollYProgress={scrollYProgress}
                  mousePos={mousePos}
                />
              ))}
            </div>
          )}

          {/* SYSTEM 1: PORTAL ENERGY FIELD PARTICLES */}
          <div className="absolute inset-0 flex items-center justify-center">
            {portalParticles.map((spec) => (
              <AttractionParticle
                key={spec.id}
                spec={spec}
                scrollYProgress={scrollYProgress}
                mousePos={mousePos}
              />
            ))}
          </div>

          {/* ABSORPTION MICRO-BURST WAVE */}
          <motion.div
            style={{
              scale: burstScale,
              opacity: burstOpacity,
            }}
            className="absolute w-[360px] h-[360px] md:w-[480px] md:h-[480px] rounded-full border border-primary/50 shadow-[0_0_30px_#7CFF4F] pointer-events-none"
          />

          {/* CENTRAL INFOTHON 7.0 PORTAL BADGE (MUST REMAIN 100% STRAIGHT & UN-ROTATED) */}
          <motion.div
            style={{ x: mousePos.x * 0.4, y: mousePos.y * 0.4 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            {/* Outer Upright Portal Frame Border */}
            {stage >= 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{ opacity: borderPulseOpacity }}
                className="absolute w-[360px] h-[360px] md:w-[480px] md:h-[480px] rounded-full border border-primary/35 shadow-[0_0_40px_rgba(124,255,79,0.22)] flex items-center justify-center"
              >
                {/* Dash Ticks along border */}
                <div className="absolute inset-0 rounded-full border border-dashed border-primary/25" />
              </motion.div>
            )}

            {/* Moving Luminous Arc Sweep around border (does NOT rotate portal body) */}
            {stage >= 2 && (
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                viewBox="0 0 400 400"
                className="absolute w-[380px] h-[380px] md:w-[500px] md:h-[500px] pointer-events-none drop-shadow-[0_0_15px_#7CFF4F]"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="190"
                  fill="none"
                  stroke="url(#portalScanGradient)"
                  strokeWidth="3"
                  strokeDasharray="140 1050"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="portalScanGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#7CFF4F" stopOpacity="1" />
                    <stop offset="100%" stopColor="#7CFF4F" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </motion.svg>
            )}

            {/* Inner Stationary Hexagonal Geometry (NEVER ROTATES) */}
            {stage >= 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full border border-primary/25 shadow-[0_0_20px_rgba(124,255,79,0.12)] flex items-center justify-center"
              >
                <div className="w-full h-full rounded-3xl border border-primary/15 rotate-45" />
                <div className="w-full h-full rounded-3xl border border-primary/15 -rotate-45 absolute" />
              </motion.div>
            )}

            {/* Straight Central INFOTHON 7.0 Title Badge (PERFECTLY HORIZONTAL & READABLE) */}
            {stage >= 2 && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-44 h-44 md:w-64 md:h-64 rounded-3xl border border-primary/40 bg-[#050907]/85 shadow-[0_0_45px_rgba(124,255,79,0.28)] backdrop-blur-md flex flex-col items-center justify-center p-4"
              >
                <div className="w-32 h-32 md:w-48 md:h-48 border border-primary/60 rounded-2xl flex flex-col items-center justify-center bg-primary/5 p-2 text-center">
                  <span className="font-mono text-[9px] md:text-[11px] font-semibold text-primary/80 tracking-[0.25em] mb-1">
                    WELCOME TO
                  </span>
                  <span className="font-mono text-sm md:text-xl font-extrabold text-primary tracking-[0.3em] drop-shadow-[0_0_12px_#7CFF4F]">
                    INFOTHON 7.0
                  </span>
                  
                  {/* Minimal Futuristic Separator Line */}
                  <div className="w-10 h-[1.5px] bg-gradient-to-r from-transparent via-primary/50 to-transparent my-2" />

                  {/* Futuristic Digital Status Indicator: ● ONLINE */}
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                    className="flex items-center justify-center gap-1.5"
                  >
                    {/* Soft Pulsing Status Dot */}
                    <motion.div
                      animate={{
                        scale: [1, 1.35, 1],
                        opacity: [0.45, 1, 0.45],
                        boxShadow: [
                          "0 0 4px #7CFF4F",
                          "0 0 10px #7CFF4F",
                          "0 0 4px #7CFF4F",
                        ],
                      }}
                      transition={{
                        duration: 2.0,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-1.5 h-1.5 rounded-full bg-[#7CFF4F]"
                    />

                    {/* Clean Geometric "ONLINE" Label */}
                    <span className="font-mono text-[9px] md:text-[11px] font-light text-primary/75 tracking-[0.38em] uppercase drop-shadow-[0_0_6px_rgba(124,255,79,0.4)] pl-0.5">
                      ONLINE
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Digital Telemetry HUD Overlay */}
          {stage >= 3 && (
            <>
              <motion.div
                animate={{ opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 font-mono text-[9px] text-primary/70 tracking-widest hidden sm:block pointer-events-none"
              >
                01 // INFOTHON_GATEWAY
              </motion.div>
              <motion.div
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 4.5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 font-mono text-[9px] text-primary/70 tracking-widest hidden sm:block pointer-events-none"
              >
                07 // ROAMING_NODES_ACTIVE
              </motion.div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroScene;