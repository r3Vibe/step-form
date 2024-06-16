import { ReactNode, useState } from "react";

/**
 * A custom React hook for managing a multi-step form.
 *
 * @param {ReactNode[]} steps - An array of React nodes representing each step of the form.
 * @returns {Object} An object containing the current step index, the current step, the array of steps,
 * a boolean indicating if it's the first step, a boolean indicating if it's the last step,
 * a function to go to a specific step, a function to move to the next step, and a function to move to the previous step.
 *
 * @property {number} currentStepIndex - The index of the current step.
 * @property {ReactNode} step - The current step.
 * @property {ReactNode[]} steps - The array of all steps.
 * @property {boolean} isFirstStep - True if it's the first step, false otherwise.
 * @property {boolean} isLastStep - True if it's the last step, false otherwise.
 * @property {Function} goTo - A function to go to a specific step.
 * @property {Function} next - A function to move to the next step.
 * @property {Function} back - A function to move to the previous step.
 */
export const useStepForm = (
  steps: ReactNode[]
): {
  currentStepIndex: number;
  step: ReactNode;
  steps: ReactNode[];
  isFirstStep: boolean;
  isLastStep: boolean;
  goTo: (index: number) => void;
  next: () => void;
  back: () => void;
} => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  /**
   * Moves to the next step of the form.
   * If it's already the last step, it remains on the current step.
   */
  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  /**
   * Moves to the previous step of the form.
   * If it's already the first step, it remains on the current step.
   */
  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  /**
   * Moves to a specific step of the form.
   *
   * @param {number} index - The index of the step to move to.
   */
  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };
};

