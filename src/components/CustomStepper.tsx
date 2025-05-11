import 'primeicons/primeicons.css';
import type { CustomStepperProps, Step } from '../types/customStepper.types'; 
import { steps } from '../data/steps';

export function CustomStepper({ active, onStepClick }: CustomStepperProps) {
  const actualIndex = steps.findIndex((s) => s.name === 'Select Skip');

  return (
    <div className="w-full overflow-x-auto mb-6">
      <div className="w-max mx-auto flex items-center px-4"> 
        {steps.map((step: Step, index) => {
          const isBeforeOrAtActual = index <= actualIndex;
          const isActive = index <= active;

          const textColor = isBeforeOrAtActual ? 'text-white' : 'text-basicGray';
          const iconColor = isActive ? 'text-primaryBlue' : 'text-basicGray';
          const cursor = isBeforeOrAtActual ? 'cursor-pointer' : 'cursor-not-allowed';
          const hoverEffect = isBeforeOrAtActual ? 'hover:text-primaryBlue' : '';

          return (
            <div key={step.name} className="flex items-center whitespace-nowrap">
              <button
                disabled={!isBeforeOrAtActual}
                onClick={() => isBeforeOrAtActual && onStepClick?.(index)}
                className={`flex items-center transition-colors ${cursor} ${hoverEffect} ${iconColor}`}
              >
                <i className={`${step.iconClass} text-xl`} />
                <span className={`ml-2 font-semibold text-md ${textColor}`}>{step.name}</span>
              </button>

              {index < steps.length - 1 && (
                <div
                  className={`w-16 h-px mx-4 ${
                    index + 1 < active ? 'bg-primaryBlue' : 'bg-secondaryGray'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

