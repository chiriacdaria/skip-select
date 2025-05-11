export interface CustomCardProps {
  badgeText: string;
  title: string;
  description: string;
  price: number;
  size: number;
  allowedOnRoad: boolean;
  isSelected: boolean;
  onCardClick: () => void;
}
