export interface Sealife {
  id: number;
  name: string;
  scientificName: string;
  description: string;
  habitat: string;
  diet: string;
  conservationStatus: ConservationStatus;
  imageUrl: string;
  funFact: string;
}

export type ConservationStatus = 
  | 'Least Concern'
  | 'Vulnerable'
  | 'Endangered'
  | 'Critically Endangered'
  | 'Extinct in Wild'
  | 'Data Deficient'
  | 'Varies by species';

export interface ModalProps {
  species: Sealife | null;
  onClose: () => void;
}

export interface CardProps {
  species: Sealife;
  onClick: () => void;
}