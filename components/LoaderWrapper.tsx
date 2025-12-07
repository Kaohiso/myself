"use client";

import { useState } from "react";
import Loader from "@/components/Loader";

export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {showLoader && <Loader onFinish={() => setShowLoader(false)} />}
      {children}
    </>
  );
}
