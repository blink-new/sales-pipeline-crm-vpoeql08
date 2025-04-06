
import React from 'react'
import { Droppable } from '@hello-pangea/dnd'
import { Stage } from '../types'
import { DealCard } from './DealCard'
import { formatCurrency } from '../lib/utils'

interface StageColumnProps {
  stage: Stage
}

export const StageColumn: React.FC<StageColumnProps> = ({ stage }) => {
  const totalValue = stage.deals.reduce((sum, deal) => sum + deal.value, 0)
  
  return (
    <div className="flex flex-col h-full w-80 bg-gray-50 rounded-lg p-4">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">
            {stage.title}
            <span className="ml-2 text-sm text-gray-500">
              ({stage.deals.length})
            </span>
          </h3>
        </div>
        <div className="text-sm text-gray-500 mt-1">
          {formatCurrency(totalValue)}
        </div>
      </div>

      <Droppable droppableId={stage.id} type="DEAL">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`
              flex-1 min-h-[200px] transition-colors duration-200 rounded-md p-2
              ${snapshot.isDraggingOver ? 'bg-blue-50/50' : 'bg-transparent'}
            `}
          >
            <div className="space-y-2">
              {stage.deals.map((deal, index) => (
                <DealCard key={deal.id} deal={deal} index={index} />
              ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}