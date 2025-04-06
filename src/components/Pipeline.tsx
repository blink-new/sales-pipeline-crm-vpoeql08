
import { DragDropContext, DropResult } from '@hello-pangea/dnd'
import { StageColumn } from './StageColumn'
import { AddDealDialog } from './AddDealDialog'
import { useDealStore } from '../store/dealStore'

export function Pipeline() {
  const { stages, moveDeal } = useDealStore()

  const handleDragEnd = (result: DropResult) => {
    if (!result) return

    const { destination, source, draggableId } = result

    if (!destination || !source || !draggableId) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    moveDeal(draggableId, source.droppableId, destination.droppableId)
  }

  if (!stages || stages.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">No stages available</p>
      </div>
    )
  }

  return (
    <div>
      <div className="md:flex md:items-center md:justify-between mb-6">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Pipeline
          </h2>
        </div>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {stages.map(stage => (
            <div key={stage.id} className="flex flex-col">
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