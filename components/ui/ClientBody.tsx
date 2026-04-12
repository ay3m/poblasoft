"use client";

import { MotionConfig } from "framer-motion";

export default function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <body className="min-h-full flex flex-col antialiased">
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
      <div className="grain-global" aria-hidden="true" />
    </body>
  );
}
