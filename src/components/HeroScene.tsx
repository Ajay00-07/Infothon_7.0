import { motion, useScroll, useTransform } from "framer-motion";

const HeroScene = () => {
  const { scrollYProgress } = useScroll();

  const topAngle = useTransform(scrollYProgress, [0.15, 0.5, 0.75], [0, -45, -90]);
  const bottomAngle = useTransform(scrollYProgress, [0.15, 0.5, 0.75], [0, 45, 90]);
  const leftAngle = useTransform(scrollYProgress, [0.15, 0.5, 0.75], [0, 45, 90]);
  const rightAngle = useTransform(scrollYProgress, [0.15, 0.5, 0.75], [0, -45, -90]);

  const cubeRotateX = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [25, 15, 5, 0]);
  const cubeRotateY = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [-25, -15, -5, 0]);
  const cubeRotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 45]);
  const cubeScale = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 0.9, 0.75]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0.3, 0.6, 0.9]);
  const containerOpacity = useTransform(scrollYProgress, [0.85, 1], [1, 0.3]);

  const faceSize = typeof window !== "undefined" && window.innerWidth < 768 ? 80 : 140;

  const faceClasses = "absolute border border-primary/40 backdrop-blur-sm bg-primary/5";

  return (
    <>
      {/* Clip wrapper — prevents cube faces from causing horizontal scroll */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ opacity: containerOpacity }}
        >
          {/* Glow backdrop */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
              opacity: glowOpacity,
            }}
          />

          {/* 3D Cube */}
          <div style={{ perspective: "800px" }}>
            <motion.div
              style={{
                width: faceSize,
                height: faceSize,
                transformStyle: "preserve-3d",
                rotateX: cubeRotateX,
                rotateY: cubeRotateY,
                rotateZ: cubeRotateZ,
                scale: cubeScale,
                marginLeft: -faceSize / 2,
                marginTop: -faceSize / 2,
              }}
              className="relative"
            >
              {/* Front face */}
              <div
                className={faceClasses}
                style={{
                  width: faceSize,
                  height: faceSize,
                  transform: `translateZ(${faceSize / 2}px)`,
                  boxShadow: "0 0 30px hsl(var(--primary) / 0.2), inset 0 0 30px hsl(var(--primary) / 0.05)",
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-primary font-display text-xs tracking-widest opacity-60">
                  7.0
                </div>
              </div>

              {/* Back face */}
              <div
                className={faceClasses}
                style={{
                  width: faceSize,
                  height: faceSize,
                  transform: `translateZ(-${faceSize / 2}px) rotateY(180deg)`,
                }}
              />

              {/* Top face */}
              <motion.div
                className={faceClasses}
                style={{
                  width: faceSize,
                  height: faceSize,
                  transformOrigin: "bottom center",
                  rotateX: topAngle,
                  top: -faceSize,
                  left: 0,
                  boxShadow: "0 0 20px hsl(var(--primary) / 0.15)",
                }}
              />

              {/* Bottom face */}
              <motion.div
                className={faceClasses}
                style={{
                  width: faceSize,
                  height: faceSize,
                  transformOrigin: "top center",
                  rotateX: bottomAngle,
                  top: faceSize,
                  left: 0,
                  boxShadow: "0 0 20px hsl(var(--primary) / 0.15)",
                }}
              />

              {/* Left face */}
              <motion.div
                className={faceClasses}
                style={{
                  width: faceSize,
                  height: faceSize,
                  transformOrigin: "right center",
                  rotateY: leftAngle,
                  top: 0,
                  left: -faceSize,
                  boxShadow: "0 0 20px hsl(var(--primary) / 0.15)",
                }}
              />

              {/* Right face */}
              <motion.div
                className={faceClasses}
                style={{
                  width: faceSize,
                  height: faceSize,
                  transformOrigin: "left center",
                  rotateY: rightAngle,
                  top: 0,
                  left: faceSize,
                  boxShadow: "0 0 20px hsl(var(--primary) / 0.15)",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HeroScene;