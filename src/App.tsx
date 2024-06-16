import { useState } from "react";
import StepFormBuilder from "./StepFormBuilder";

const FormOne = () => {
  const [name, setName] = useState("");
  return (
    <div style={{ width: "100%" }}>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
const FormTwo = () => {
  const [email, setEmail] = useState("");
  return (
    <div style={{ width: "100%" }}>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

const StepsShow = (props: { current: number; total: number }) => {
  return (
    <div>
      {props.current + 1}/{props.total}
    </div>
  );
};

const ButtonShow = (props: {
  back: () => void;
  next: () => void;
  goTo: (step: number) => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}) => {
  return (
    <div>
      {props.isFirstStep ? null : (
        <button type="button" onClick={props.back}>
          Back
        </button>
      )}
      {props.isLastStep ? (
        <button type="button" onClick={props.next}>
          Submit
        </button>
      ) : (
        <button type="button" onClick={props.next}>
          Next
        </button>
      )}
    </div>
  );
};

function App() {
  return (
    <div>
      <StepFormBuilder
        formdata={[<FormOne />, <FormTwo />]}
        ShowStepsFn={StepsShow}
        ButtonShowFn={ButtonShow}
      />
    </div>
  );
}

export default App;
