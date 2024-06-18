import { useEffect, useState } from "react";

export function useStatusSteps(currentStatus: string) {
    const steps = ["aguardando", "retirado", "entregue"];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const status = ["WAITING", "PICKN_UP", "DONE"];
    const whichStep = status.findIndex((item) => item === currentStatus);

    setCurrentStep(whichStep);
  }, [currentStatus]);

  return {
    steps,
    currentStep
  }
}