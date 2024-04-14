import {
    DndContext,
    useDroppable
} from '@dnd-kit/core';
import {
    SortableContext,
} from '@dnd-kit/sortable';
import { useFormPlaygroundStore } from '../../stores/formPlaygroundStore';

export default function FormPlayground(){
    const { setNodeRef, isOver } = useDroppable({
        id: 'droppable',
      });
    
    return (
        <DndContext>
             <SortableContext items={formElements}>
                <div>
                    {formElements.length == 0 ? (

                    ) : (

                    )}

                </div>

             </SortableContext>
        </DndContext>
    );
};