
export interface Deal {
  id: string
  title: string
  value: number
  stage: string
  probability: number
  company: string
  contact: string
  createdAt: Date
  updatedAt: Date
}

export interface Stage {
  id: string
  title: string
  deals: Deal[]
}

export type DealStore = {
  stages: Stage[]
  addDeal: (deal: Omit<Deal, 'id' | 'createdAt' | 'updatedAt'>) => void
  moveDeal: (dealId: string, fromStage: string, toStage: string) => void
  updateDeal: (dealId: string, deal: Partial<Deal>) => void
  deleteDeal: (dealId: string) => void
}