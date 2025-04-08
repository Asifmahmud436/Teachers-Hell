import Navbar from "../components/Navbar";
import Teachers from "../components/Teachers";

export default function Home(){
    return(
        <>
            
            <Navbar/>
            <div className="bg-[url('/c4.jpg')] bg-cover bg-center w-screen h-[720px]">
            </div>
            <Teachers/>
        </>
    )
}