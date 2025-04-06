
import React from 'react'
import { Draggable } from '@hello-pangea/dnd'
import { Deal } from '../types'
import { formatCurrency } from '../lib/utils'

interface DealCardProps {
  deal: Deal
  index: number
}

export const DealCard: React.FC<DealCardProps> = ({ deal, index }) => {
  return (
    <Draggable draggableId={deal.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`
            bg-white p-4 rounded-lg shadow-sm border border-gray-200
            ${snapshot.isDragging ? 'shadow-lg ring-2 ring-blue-500/50' : ''}
            transition-shadow duration-200 hover:shadow-md
          `}
        >
          <div className="space-y-2">
            <div className="font-medium text-gray-900">{deal.title}</div>
            <div className="text-sm text-gray-500">{deal.company}</div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-900">
                {formatCurrency(deal.value)}
              </span>
              <span className="text-gray-500">
                {deal.probability}% probability
              </span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}