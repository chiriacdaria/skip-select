import { useState, useEffect } from 'react';
import { CustomCard } from './CustomCard';
import { BottomActionBar } from './BottomActionBar';
import type { CardData } from '../types/card.types';

export function SkipCardGrid({ data }: { data: CardData[] }) {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const handleCardClick = (card: CardData) => {
    setSelectedCard(card); 
  };

  const handleBack = () => {
    console.log('Back...');
  };

  const handleContinue = () => {
    console.log('Continuing...');
  };

  useEffect(() => {
    if (data.length > 0) {
      setSelectedCard(data[0]); 
    }
  }, [data]);
  
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((card) => (
          <CustomCard
            key={card.id}
            badgeText={`${card.size}`} 
            title={`${card.size} Yard Skip`}
            description={`${card.hire_period_days} day hire period`}
            price={card.price_before_vat}
            size={card.size}
            allowedOnRoad={card.allowed_on_road}
            isSelected={selectedCard?.id === card.id}
            onCardClick={() => handleCardClick(card)} 
          />
        ))}
      </div>

      {selectedCard && (
        <BottomActionBar
          selectedCard={{
            title: `${selectedCard.size} Yard Skip`,
            description: `${selectedCard.hire_period_days} day hire period`,
            price: selectedCard.price_before_vat,
          }}
          onBack={handleBack}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
}
