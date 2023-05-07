import { type NextPage } from "next";
import Navbar from "~/component/ui/navbar";

const availabilty: NextPage = () => {
    // const { data } = api.getCurrentUser.getAll.useQuery();
    // console.log(data);


    return (
        <>
            <Navbar />

            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">

                Hi
            </main>
        </>
    );
};

export default availabilty;