"use client";

import { useStatusSteps } from "@/view/ui-logic/hooks/use-status-steps";

interface StatusStepsProps {
  currentStatus: string;
}

export function StatusSteps({ currentStatus }: StatusStepsProps) {
  const { steps, currentStep } = useStatusSteps(currentStatus);

  return (
    <div className="flex justify-between">
      {steps?.map((step, i) => (
        <div
          key={i}
          className={`step-item ${
            steps.map((_, idx) => idx)[i] <= currentStep && "active"
          } ${steps.map((_, idx) => idx)[i] < currentStep && "complete"} `}
        >
          <div className="step" />
          <strong className="pt-2 uppercase text-[0.625rem] text-ligth-slate-gray">
            {step}
          </strong>
        </div>
      ))}
    </div>
  );
}
