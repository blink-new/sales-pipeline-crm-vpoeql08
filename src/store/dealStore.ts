
import { create } from 'zustand'
import { DealStore, Deal, Stage } from '../types'
import { generateId } from '../lib/utils'

const initialStages: Stage[] = [
  { id: 'lead', title: 'Lead', deals: [] },
  { id: 'contact', title: 'Contact Made', deals: [] },
  { id: 'proposal', title: 'Proposal', deals: [] },
  { id: 'negotiation', title: 'Negotiation', deals: [] },
  { id: 'closed', title: 'Closed Won', deals: [] },
]

export const useDealStore = create<DealStore>((set) => ({
  stages: initialStages,
  
  addDeal: (dealData) => set((state) => {
    const newDeal: Deal = {
      ...dealData,
      id: generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    
    return {
      stages: state.stages.map(stage => 
        stage.id === dealData.stage
          ? { ...stage, deals: [...stage.deals, newDeal] }
          : stage
      )
    }
  }),

  moveDeal: (dealId, fromStage, toStage) => set((state) => {
    const deal = state.stages
      .find(s => s.id === fromStage)
      ?.deals.find(d => d.id === dealId)

    if (!deal) return state

    const updatedDeal = { ...deal, stage: toStage, updatedAt: new Date() }

    return {
      stages: state.stages.map(stage => {
        if (stage.id === fromStage) {
          return { ...stage, deals: stage.deals.filter(d => d.id !== dealId) }
        }
        if (stage.id === toStage) {
          return { ...stage, deals: [...stage.deals, updatedDeal] }
        }
        return stage
      })
    }
  }),

  updateDeal: (dealId, updates) => set((state) => ({
    stages: state.stages.map(stage => ({
      ...stage,
      deals: stage.deals.map(deal => 
        deal.id === dealId
          ? { ...deal, ...updates, updatedAt: new Date() }
          : deal
      )
    }))
  })),

  deleteDeal: (dealId) => set((state) => ({
    stages: state.stages.map(stage => ({
      ...stage,
      deals: stage.deals.filter(deal => deal.id !== dealId)
    }))
  })),
}))