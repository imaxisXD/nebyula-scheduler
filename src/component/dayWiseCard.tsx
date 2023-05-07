import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/component/ui/select";

interface DayWiseCardProps {
    name: string;
}

function DayWiseCard({ name }: DayWiseCardProps) {
    const [avail, setAvail] = useState("");

    function handleChange(value: string) {
        setAvail(value);
    }

    return (
        <div className={`items-center space-x-4 rounded-md border p-2 w-full m-1 ${avail === `true` ? `bg-green-50` : ``}`}>
            <h3 className="text-md font-medium inline-block ml-4">
                {name}
            </h3>
            <div className="flex flex-wrap flex-row justify-around">
                <div className="text-sm text-muted-foreground cursor-pointer m-1">
                    <label htmlFor="fromTime">From: </label>
                    <input type="time" name="fromTime" id="fromTime" className="cursor-pointer rounded-md border border-input bg-transparent px-3 py-2 ring-offset-background" />
                </div>
                <div className="text-sm text-muted-foreground cursor-pointer m-1">
                    <label htmlFor="toTime">To: </label>
                    <input type="time" name="toTime" id="toTime" className="cursor-pointer rounded-md border border-input bg-transparent px-3 py-2 ring-offset-background" />
                </div>
                <div className="text-sm cursor-pointer m-1">
                    <div className="text-sm text-muted-foreground">
                        <Select onValueChange={handleChange}>
                            <SelectTrigger>
                                <SelectValue placeholder="Available" />
                                <SelectContent position="popper">
                                    <SelectItem value="true">Yes</SelectItem>
                                    <SelectItem value="false">No</SelectItem>
                                </SelectContent>
                            </SelectTrigger>
                        </Select>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DayWiseCard;