import { type NextPage } from "next";
import Navbar from "~/component/ui/navbar";
import { BellRing, Check } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../component/ui/card"
import DayWiseCard from "~/component/dayWiseCard";


const availabilty: NextPage = () => {
    // const { data } = api.getCurrentUser.getAll.useQuery();
    // console.log(data);
    // const dateHourArray = [
    //     { hrs:}
    // ]
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#e9e9e9] to-[#eea9fdd2]">
                <Card className="m-20">
                    <CardHeader>
                        <CardTitle>Availabilty Hours</CardTitle>
                        <CardDescription>Mark your hours when you are avaialble for meetings</CardDescription>
                    </CardHeader>
                    <CardContent >
                        {weekday.map((day, index) => (
                            <DayWiseCard name={day} key={index} />
                        ))}

                    </CardContent>
                </Card>

            </main>
        </>
    );
};

export default availabilty;