import { useStepForm } from "./hooks/useStepForm";

export default function StepFormBuilder({
  formdata,
  ShowStepsFn,
  ButtonShowFn,
}: {
  formdata: any[];
  ShowStepsFn: any;
  ButtonShowFn: any;
}) {
  const {
    step,
    currentStepIndex,
    steps,
    isFirstStep,
    isLastStep,
    back,
    next,
    goTo,
  } = useStepForm(formdata);

  const stepData = { current: currentStepIndex, total: steps.length };
  const buttonData = { back, next, goTo, isFirstStep, isLastStep };

  return (
    <form className="step-form">
      <ShowStepsFn {...stepData} />
      {step}
      <ButtonShowFn {...buttonData} />
    </form>
  );
}
