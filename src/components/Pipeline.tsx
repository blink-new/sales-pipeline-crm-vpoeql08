
import { DragDropContext, DropResult, DragStart } from '@hello-pangea/dnd'
import { StageColumn } from './StageColumn'
import { AddDealDialog } from './AddDealDialog'
import { useDealStore } from '../store/dealStore'
import { useState, useCallback } from 'react'

export function Pipeline() {
  const { stages, moveDeal } = useDealStore()
  const [isDragging, setIsDragging] = useState(false)

  const handleDragStart = useCallback((initial: DragStart) => {
    if (!initial.source) return
    setIsDragging(true)
  }, [])

  const handleDragEnd = useCallback((result: DropResult) => {
    setIsDragging(false)
    
    // Ensure we have valid source and destination
    if (!result.destination || !result.source || !result.draggableId) {
      return
    }

    const { destination, source, draggableId } = result

    // If dropped in the same spot
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    // Ensure the stages exist
    const sourceStage = stages.find(s => s.id === source.droppableId)
    const destStage = stages.find(s => s.id === destination.droppableId)

    if (!sourceStage || !destStage) {
      console.error('Invalid stage in drag operation')
      return
    }

    moveDeal(draggableId, source.droppableId, destination.droppableId)
  }, [moveDeal, stages])

  // If stages are not loaded yet, show loading state
  if (!stages || stages.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
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