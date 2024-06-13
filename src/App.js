import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div className="">
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        👍🏻
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
        💕
      </StepMessage>
    </div>
  );
}

const Steps = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(() => !isOpen);
  };

  const handlePrevious = () => {
    step > 1 && setStep((step) => (step -= 1));
  };

  const handleNext = () => {
    step < 3 && setStep((step) => (step += 1));
  };

  return (
    <>
      <div onClick={handleClose} className="close">
        &times;
      </div>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage>
            <h3>{`Step: ${step}`}</h3>
            <p>{messages[step - 1]}</p>
          </StepMessage>
          <div className="buttons">
            <Button bgColor={"#7950f2"} onClick={handlePrevious}>
              <span>👈🏻</span>
              <div>Previous</div>
            </Button>
            <Button bgColor={"#7950f2"} onClick={handleNext}>
              <div>Next</div>
              <span>👉🏻</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

const StepMessage = ({ messages, step, children }) => {
  return (
    <div className="message">
      <div>{step}</div>
      {children}
    </div>
  );
};

const Button = ({ onClick, bgColor, children }) => {
  return (
    <button
      className="buttons"
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
