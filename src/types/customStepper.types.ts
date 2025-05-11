export interface Step {
  name: string;
  iconClass: string;
}

export interface CustomStepperProps {
  active: number;
  onStepClick?: (stepIndex: number) => void;
}
