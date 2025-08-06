import { Animal, Treatment, Veterinarian } from '../types';

export const sampleAnimals: Animal[] = [
  {
    id: '1',
    name: 'Max',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: 5,
    weight: 32,
    ownerId: 'owner1'
  },
  {
    id: '2',
    name: 'Whiskers',
    species: 'Cat',
    breed: 'Siamese',
    age: 3,
    weight: 4.5,
    ownerId: 'owner2'
  },
  {
    id: '3',
    name: 'Luna',
    species: 'Horse',
    breed: 'Arabian',
    age: 8,
    weight: 450,
    ownerId: 'owner3'
  }
];

export const sampleVeterinarians: Veterinarian[] = [
  {
    id: 'vet1',
    name: 'Dr. Sarah Johnson',
    specialization: 'Small Animal Medicine',
    clinic: 'Central Veterinary Clinic',
    yearsExperience: 12
  },
  {
    id: 'vet2',
    name: 'Dr. Michael Chen',
    specialization: 'Large Animal Medicine',
    clinic: 'Countryside Animal Hospital',
    yearsExperience: 8
  },
  {
    id: 'vet3',
    name: 'Dr. Emily Rodriguez',
    specialization: 'Emergency Medicine',
    clinic: 'Emergency Vet Services',
    yearsExperience: 15
  }
];

export const sampleTreatments: Treatment[] = [
  {
    id: 't1',
    animalId: '1',
    drugName: 'Amoxicillin',
    dosage: '500mg twice daily',
    administrationMethod: 'Oral',
    startDate: new Date('2024-01-15'),
    endDate: new Date('2024-01-25'),
    outcome: 'success',
    successRate: 95,
    recoveryTime: 10,
    sideEffects: [],
    veterinarianId: 'vet1',
    notes: 'Complete recovery from bacterial infection',
    cost: 45.00
  },
  {
    id: 't2',
    animalId: '2',
    drugName: 'Prednisolone',
    dosage: '5mg daily',
    administrationMethod: 'Oral',
    startDate: new Date('2024-01-20'),
    endDate: new Date('2024-02-05'),
    outcome: 'partial',
    successRate: 70,
    recoveryTime: 16,
    sideEffects: ['Increased appetite', 'Lethargy'],
    veterinarianId: 'vet1',
    notes: 'Inflammation reduced but not completely resolved',
    cost: 32.50
  },
  {
    id: 't3',
    animalId: '3',
    drugName: 'Banamine',
    dosage: '1.1mg/kg IV',
    administrationMethod: 'Intravenous',
    startDate: new Date('2024-02-01'),
    endDate: new Date('2024-02-03'),
    outcome: 'success',
    successRate: 90,
    recoveryTime: 2,
    sideEffects: [],
    veterinarianId: 'vet2',
    notes: 'Effective pain management for colic',
    cost: 125.00
  },
  {
    id: 't4',
    animalId: '1',
    drugName: 'Carprofen',
    dosage: '75mg twice daily',
    administrationMethod: 'Oral',
    startDate: new Date('2024-02-10'),
    outcome: 'ongoing',
    successRate: 0,
    sideEffects: [],
    veterinarianId: 'vet1',
    notes: 'Anti-inflammatory for arthritis management',
    cost: 68.00
  }
];