
import { DragDropContext, DropResult, DragStart } from '@hello-pangea/dnd'
import { StageColumn } from './StageColumn'
import { AddDealDialog } from './AddDealDialog'
import { useDealStore } from '../store/dealStore'
import { useState } from 'react'

export function Pipeline() {
  const { stages, moveDeal } = useDealStore()
  const [isDragging, setIsDragging] = useState(false)

  const handleDragStart = (initial: DragStart) => {
    setIsDragging(true)
  }

  const handleDragEnd = (result: DropResult) => {
    setIsDragging(false)
    
    const { destination, source, draggableId } = result

    // If there's no destination, or the item was dropped in the same spot
    if (!destination || (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )) {
      return
    }

    // Ensure both source and destination stages exist
    const sourceStage = stages.find(s => s.id === source.droppableId)
    const destStage = stages.find(s => s.id === destination.droppableId)
    
    if (!sourceStage || !destStage) {
      console.error('Invalid stage in drag operation')
      return
    }

    // Move the deal
    moveDeal(draggableId, source.droppableId, destination.droppableId)
  }

  return (
    <div className="h-full">
      <div className="md:flex md:items-center md:justify-between mb-6">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Pipeline
          </h2>
        </div>
      </div>

      <DragDropContext 
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div 
          className={`
            flex gap-4 overflow-x-auto pb-4 min-h-[calc(100vh-12rem)]
            ${isDragging ? 'cursor-grabbing' : ''}
          `}
        >
          {stages.map(stage => (
            <div key={stage.id} className="flex flex-col h-full">
              <StageColumn stage={stage} />
              <div className="mt-2">
                <AddDealDialog stage={stage.id} />
              </div>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  )
}