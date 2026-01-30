import { CarouselDemo } from "@/components/CarouselDemo";
import DialogDemo from "@/components/DialogDemo.jsx";
import {DrawerDemo }from "@/components/DrawerDemo.jsx";
import { SheetDemo } from "@/components/SheetDemo.jsx";
const Hero = () => {
    return (
        <>
            <h1 className="font-roboto">
                Welcome to Hero Section
            </h1>
            <button className="bg-amber-400 text-black p-5" 
            // onClick={() => alert("hii")}
            >
                Click Me
            </button>
             {/* dialog demo by using shadcn ui  */}
           <h3>
            this is dialog demo by using shadcn ui
           </h3>
            <section className="font-roboto">
                <DialogDemo />
            </section>
           <h3>
            this is DrawerDemo by using shadcn ui
           </h3>
            <section className="font-roboto">
                <DrawerDemo />
            </section>
           <h3>
            this is CarouselDemo by using shadcn ui
           </h3>
            <section className="font-roboto">
                <CarouselDemo />
            </section>
           <h3>
            this is SheetDemmo by using shadcn ui
           </h3>
            <section className="font-roboto">
                <SheetDemo />
            </section>
        </>
    )
}
export default Hero  