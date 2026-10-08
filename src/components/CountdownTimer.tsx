import React, { useState, useEffect } from "react";
import { Clock, AlertCircle } from "lucide-react";

// Target deadline: 10 October 2026, 1:00 PM IST (Asia/Kolkata = UTC+5:30)
const TARGET_DEADLINE_ISO = "2026-10-10T13:00:00+05:30";
const TARGET_DEADLINE = new Date(TARGET_DEADLINE_ISO).getTime();

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isClosed: boolean;
}

const calculateTimeLeft = (): TimeLeft => {
  const now = Date.now();
  const diff = TARGET_DEADLINE - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isClosed: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isClosed: false };
};

interface CountdownTimerProps {
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ className = "" }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    // Update timer every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  if (timeLeft.isClosed) {
    return (
      <div className={`w-full max-w-lg mx-auto ${className}`}>
        <div className="bg-[#050907]/80 border border-red-500/40 backdrop-blur-md rounded-xl p-3.5 sm:p-4 text-center shadow-[0_0_20px_rgba(239,68,68,0.18)]">
          <div className="inline-flex items-center justify-center gap-2 text-red-400 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 animate-pulse flex-shrink-0" />
            <span>SUBMISSION DEADLINE CLOSED</span>
          </div>
          <p className="text-[11px] text-muted-foreground mt-1 font-mono">
            PPT Submission Deadline was 10 October 2026, 1:00 PM IST
          </p>
        </div>
      </div>
    );
  }

  const timeUnits = [
    { label: "DAYS", value: formatNumber(timeLeft.days) },
    { label: "HOURS", value: formatNumber(timeLeft.hours) },
    { label: "MINUTES", value: formatNumber(timeLeft.minutes) },
    { label: "SECONDS", value: formatNumber(timeLeft.seconds) },
  ];

  return (
    <div className={`w-full max-w-lg mx-auto ${className}`}>
      <div className="relative bg-[#050907]/80 backdrop-blur-md border border-primary/25 rounded-xl p-3 sm:p-4 shadow-[0_0_20px_rgba(124,255,79,0.12)] overflow-hidden transition-all duration-300 hover:border-primary/40">
        {/* Subtle glowing background accent */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-2/3 h-8 bg-primary/15 blur-lg pointer-events-none rounded-full" />
        
        {/* Header Label */}
        <div className="flex items-center justify-center gap-1.5 mb-2.5 text-center flex-wrap">
          <Clock className="w-3.5 h-3.5 text-primary animate-pulse flex-shrink-0" />
          <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary">
            PPT SUBMISSION DEADLINE
          </span>
          <span className="font-mono text-[10px] sm:text-xs text-muted-foreground font-medium">
            • 10 October 2026 • 1:00 PM
          </span>
        </div>

        {/* Compact Timer Grid */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5 text-center">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="relative flex flex-col items-center justify-center py-1.5 px-1 sm:py-2.5 sm:px-2 rounded-lg bg-primary/5 border border-primary/20 backdrop-blur-sm group hover:border-primary/40 transition-colors"
            >
              <div className="font-mono font-bold text-lg sm:text-2xl text-primary tracking-wider drop-shadow-[0_0_8px_rgba(124,255,79,0.35)]">
                {unit.value}
              </div>
              <div className="font-mono text-[8px] sm:text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mt-0.5">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
