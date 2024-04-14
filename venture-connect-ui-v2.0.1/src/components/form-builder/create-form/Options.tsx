import { PlusIcon } from "lucide-react";

interface Props {
    type: string;
    id: string;
  }
export default function Options ({ type, id }: Props){
    return (
        <ul>
            <li>
                <Button>
                <PlusIcon />
                <span>Add option</span>
                </Button>
            </li>
        </ul>

    );

}