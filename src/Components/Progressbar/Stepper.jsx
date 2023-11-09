// import { useState } from "react";
import "./stepper.css";
import { MdDone } from "react-icons/md";
const Stepper = () => {
  const steps = ["pending", "In progress", "Complete"];
//   const [currentStep, setCurrentStep] = useState(1);
//   const [complete, setComplete] = useState(false);
  const currentStep = 1
  const complete = false
  return (
    <>
      <div className="flex justify-between ">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
              } `}
          >
            <div className="step text-[10px]">
              {i + 1 < currentStep || complete ? <MdDone size={24} /> : i + 1}
            </div>
            <p className="text-gray-500 text-[10px]">{step}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stepper;