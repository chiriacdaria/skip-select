import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useEffect, useState } from 'react';
import type { CustomCardProps } from '../types/customCard.types';
import colors from '../styles/colors';

export function CustomCard({
  badgeText,
  title,
  description,
  price,
  size,
  allowedOnRoad,
  isSelected,
  onCardClick,
}: CustomCardProps) {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [borderColor, setBorderColor] = useState<string>(colors.secondaryGray);

  const buttonText = isSelected ? 'Selected' : 'Select This Skip';
  const buttonBgColor = isSelected ? colors.primaryBlue : colors.secondaryGray;
  const buttonHoverBgColor = isSelected ? colors.blueHover : colors.borderGray; 

  useEffect(() => {
    import(`../images/${size}-yarder-skip.jpg`)
      .then((module) => {
        setImageSrc(module.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, [size]);

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      style={{
        backgroundColor: colors.darkGray,
        border: `1px solid ${isSelected ? colors.primaryBlue : borderColor}`,
        boxShadow: isSelected ? `0 0 15px ${colors.shadowBlue}` : 'none',
        transition: 'border-color 0.3s ease', // smooth transition for border color
      }}
      onMouseEnter={() => setBorderColor(colors.primaryBlue)} 
      onMouseLeave={() => setBorderColor(colors.borderGray)} 
      onClick={onCardClick} 
    >
      {imageSrc && (
        <div className="w-full h-48 overflow-hidden rounded-lg relative">
          <Image
            src={imageSrc}
            alt={`${size} Yard Skip`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
          <Badge
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              zIndex: 1,
              backgroundColor:colors.primaryBlue,
              fontSize: '1rem',
              padding: '14px 10px',
              borderRadius: '14px',
              textTransform: 'none',
            }}
          >
            {badgeText} Yards
          </Badge>
         {!allowedOnRoad && (
          <Badge
            color="black"
            variant="filled"
            style={{
              position: 'absolute',
              bottom: 12,
              left: 12,
              zIndex: 1,
              fontSize: '0.8rem',
              padding: '14px 10px',
              display: 'flex',
              borderRadius: '8px',
              alignItems: 'center',
              textTransform: 'none',
            }}
          >
            <i className="pi pi-exclamation-triangle text-md mr-2 text-yellow-500" />
            <span className="text-yellow-500">Not Allowed On The Road</span>
          </Badge>
     )}
        </div>
      )}

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={700} style={{ color: 'white' }} size="xl">
          {title} Yard Skip
        </Text>
      </Group>

      <Text size="sm" c="dimmed" style={{ textAlign: 'left', color: 'white', marginBottom: '16px' }}>
        {description} day hire
      </Text>

      <Text fw={700} style={{ color: colors.primaryBlue }} size="xl">
        ${price}
      </Text>

      <Button
        fullWidth
        mt="md"
        radius="md"
        style={{
          backgroundColor: buttonBgColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px 16px',
          transition: 'all 0.3s ease', // smooth transition for hover
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = buttonHoverBgColor}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = buttonBgColor}
        variant="filled"
      >
        <span>{buttonText}</span>
        {!isSelected && <i className="pi pi-arrow-right text-white text-md ml-2" />}
      </Button>
    </Card>
  );
}
