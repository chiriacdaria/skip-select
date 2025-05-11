import { CustomStepper } from '../components/CustomStepper';
import { SkipCardGrid } from '../components/SkipCardGrid';
import { cardData } from '../data/cardData'; 

export default function SelectSkip() {
  const currentStep = 2;
  
  return (
    <div className="bg-backgroundGray text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <header className="bg-backgroundGray text-white">
          <CustomStepper active={currentStep} />
        </header>

        <main className="max-w-7xl mx-auto px-4 pb-32">
          <h1 className="font-bold text-center mb-4 text-2xl">Choose Your Skip Size</h1>
          <p className="text-center mb-8 text-lightGray">Select the skip size that best suits your needs</p>

          <SkipCardGrid data={cardData} />
        </main>
      </div>
    </div>
  );
}
