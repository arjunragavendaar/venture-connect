import {
    CalendarDays,
    CalendarRange,
    CheckSquare,
    ChevronDownCircle,
    Clock,
    Heading,
    ListTodo,
    PencilLine,
    Text,
    ToggleRight,
    Type,
    GanttChart
    } from 'lucide-react';

const elementGroups = [
    {
        title: 'Layout Elements',
        elements : [
            {
                text: "Heading",
                Icon: Heading,
            },
            {
                text: 'Description',
                Icon: PencilLine,
            },
        ],
    },
    {
        title: 'Text Elements',
        elements: [
            { text: 'Single Line',
              Icon: Type,
            },
            {
                text: 'Multi-line',
                Icon: GanttChart,
            },
            {

            }
        ],

    }
];

export default function FormElements (){
    return (
        <div></div>
    );
}