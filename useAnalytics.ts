import { useMemo } from 'react';
import { Treatment } from '../types';
import { sampleTreatments } from '../data/sampleData';

export const useAnalytics = (treatments: Treatment[] = sampleTreatments) => {
  return useMemo(() => {
    const completedTreatments = treatments.filter(t => t.outcome !== 'ongoing');
    const successfulTreatments = completedTreatments.filter(t => t.outcome === 'success');
    
    const totalTreatments = completedTreatments.length;
    const successRate = totalTreatments > 0 ? (successfulTreatments.length / totalTreatments) * 100 : 0;
    
    const treatmentsWithRecoveryTime = completedTreatments.filter(t => t.recoveryTime);
    const averageRecoveryTime = treatmentsWithRecoveryTime.length > 0
      ? treatmentsWithRecoveryTime.reduce((sum, t) => sum + (t.recoveryTime || 0), 0) / treatmentsWithRecoveryTime.length
      : 0;
    
    const drugEffectiveness = treatments.reduce((acc, treatment) => {
      if (treatment.outcome === 'ongoing') return acc;
      
      if (!acc[treatment.drugName]) {
        acc[treatment.drugName] = {
          drugName: treatment.drugName,
          successCount: 0,
          totalCount: 0,
          totalRecoveryTime: 0,
          recoveryTimeCount: 0,
          totalCost: 0,
          sideEffectCount: 0
        };
      }
      
      const drug = acc[treatment.drugName];
      drug.totalCount += 1;
      drug.totalCost += treatment.cost;
      
      if (treatment.outcome === 'success') {
        drug.successCount += 1;
      }
      
      if (treatment.recoveryTime) {
        drug.totalRecoveryTime += treatment.recoveryTime;
        drug.recoveryTimeCount += 1;
      }
      
      if (treatment.sideEffects.length > 0) {
        drug.sideEffectCount += 1;
      }
      
      return acc;
    }, {} as Record<string, any>);
    
    const drugStats = Object.values(drugEffectiveness).map((drug: any) => ({
      drugName: drug.drugName,
      successRate: (drug.successCount / drug.totalCount) * 100,
      averageRecoveryTime: drug.recoveryTimeCount > 0 ? drug.totalRecoveryTime / drug.recoveryTimeCount : 0,
      totalUses: drug.totalCount,
      sideEffectRate: (drug.sideEffectCount / drug.totalCount) * 100,
      averageCost: drug.totalCost / drug.totalCount
    }));
    
    const mostEffectiveDrug = drugStats.reduce((best, current) => 
      current.successRate > best.successRate ? current : best, 
      drugStats[0] || { drugName: 'N/A', successRate: 0 }
    );
    
    const totalCost = treatments.reduce((sum, t) => sum + t.cost, 0);
    const treatmentsWithSideEffects = treatments.filter(t => t.sideEffects.length > 0);
    const sideEffectRate = treatments.length > 0 ? (treatmentsWithSideEffects.length / treatments.length) * 100 : 0;
    
    return {
      totalTreatments,
      successRate,
      averageRecoveryTime,
      mostEffectiveDrug: mostEffectiveDrug.drugName,
      totalCost,
      sideEffectRate,
      drugStats
    };
  }, [treatments]);
};