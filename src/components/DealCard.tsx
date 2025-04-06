
import React from 'react'
import { Draggable } from '@hello-pangea/dnd'
import { Deal } from '../types'
import { formatCurrency } from '../lib/utils'
import { MoreHorizontal, Building2, User } from 'lucide-react'

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
            group relative p-4 mb-3 bg-white rounded-lg shadow-sm border border-gray-200
            hover:shadow-md transition-all duration-200
            ${snapshot.isDragging ? 'shadow-lg rotate-3' : ''}
          `}
        >
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <MoreHorizontal className="w-4 h-4 text-gray-500" />
            </button>
          </div>
          
          <h3 className="font-medium text-gray-900 mb-2">{deal.title}</h3>
          
          <div className="text-lg font-semibold text-gray-900 mb-3">
            {formatCurrency(deal.value)}
          </div>
          
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Building2 className="w-4 h-4" />
              <span>{deal.company}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{deal.contact}</span>
            </div>
          </div>
          
          <div className="mt-3 flex items-center gap-2">
            <div 
              className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden"
            >
              <div 
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${deal.probability}%` }}
              />
            </div>
            <span className="text-sm text-gray-500">{deal.probability}%</span>
          </div>
        </div>
      )}
    </Draggable>
  )
}