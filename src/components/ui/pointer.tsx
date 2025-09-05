"use client";

import { useEffect, useState } from "react";

interface PointerProps {
  children?: React.ReactNode;
}

export function Pointer({ children }: PointerProps): JSX.Element {
  // Disable custom pointer completely, just return children
  return <>{children}</>;
} 