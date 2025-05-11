import { useState } from 'react';
import { Button } from '@mantine/core';
import colors from '../styles/colors';

interface BottomActionBarProps {
  selectedCard: {
    title: string;
    price: number;
    description: string;
  };
  onBack: () => void;
  onContinue: () => void;
}

export function BottomActionBar({ selectedCard, onBack, onContinue }: BottomActionBarProps) {
  const [continueButtonColor, setContinueButtonColor] = useState<string>(colors.primaryBlue);
  const [continueButtonHoverColor] = useState<string>(colors.blueHover);

  const [backButtonColor, setBackButtonColor] = useState<string>(colors.secondaryGray);
  const [backButtonHoverColor] = useState<string>(colors.borderGray);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-darkGray border-t border-borderGray p-4 z-50 animate-slideUp">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        
        <div className="flex justify-between items-start lg:flex-col lg:items-start">
          <h3 className="text-md font-semibold">
            {selectedCard.title} - <span className="font-normal">{selectedCard.description}</span>
          </h3>
          <p className="text-xl font-bold text-primaryBlue mt-0 lg:mt-1">
            ${selectedCard.price}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:flex lg:items-center lg:gap-4">
          <Button
            onClick={onBack}
            style={{ backgroundColor: backButtonColor, color: 'white' }}
            className="w-full lg:w-32"
            onMouseEnter={() => setBackButtonColor(backButtonHoverColor)}
            onMouseLeave={() => setBackButtonColor(colors.secondaryGray)}
          >
            Back
          </Button>
          <Button
            onClick={onContinue}
            style={{ backgroundColor: continueButtonColor, color: 'white' }}
            className="w-full lg:w-32 flex items-center justify-center"
            onMouseEnter={() => setContinueButtonColor(continueButtonHoverColor)}
            onMouseLeave={() => setContinueButtonColor(colors.primaryBlue)}
          >
            Continue
            <i className="pi pi-arrow-right text-white text-md ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
