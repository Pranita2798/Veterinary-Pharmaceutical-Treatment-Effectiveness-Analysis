export interface Animal {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  weight: number;
  ownerId: string;
}

export interface Treatment {
  id: string;
  animalId: string;
  drugName: string;
  dosage: string;
  administrationMethod: string;
  startDate: Date;
  endDate?: Date;
  outcome: 'success' | 'partial' | 'failure' | 'ongoing';
  successRate: number;
  recoveryTime?: number; // in days
  sideEffects: string[];
  veterinarianId: string;
  notes?: string;
  cost: number;
}

export interface Veterinarian {
  id: string;
  name: string;
  specialization: string;
  clinic: string;
  yearsExperience: number;
}

export interface TreatmentAnalytics {
  totalTreatments: number;
  successRate: number;
  averageRecoveryTime: number;
  mostEffectiveDrug: string;
  totalCost: number;
  sideEffectRate: number;
}

export interface DrugEffectiveness {
  drugName: string;
  successRate: number;
  averageRecoveryTime: number;
  totalUses: number;
  sideEffectRate: number;
  averageCost: number;
}