import {DndContext} from '@dnd-kit/core';

export default function CreateForm () {
    return (
        <DndContext>

        </DndContext>
    );
}



export default function CreateForm({ formType = 'add', form }: Props) {
    const { pathname } = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();
    const isDemo = pathname === '/demo';
    const queryClient = useQueryClient();
  
    const [isPreview, setIsPreview] = useState(false);
  
    const [formName, setFormName] = useState(form?.name ?? '');
    const [activeButton, setActiveButton] =
      useState<FormElementButtonProps | null>(null);
    const [isDropped, setIsDropped] = useState(false);