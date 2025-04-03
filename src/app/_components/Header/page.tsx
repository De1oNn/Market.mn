"use client"

import { useRouter } from "next/navigation"


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Header = () => {
    const router = useRouter();
    // const product = router.push("/product")


    return (
        <div className="">
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Бүх ангилал</AccordionTrigger>
                <AccordionContent className="">
                    <div className="p-2 bg-[red] w-[10%] gap-8 flex flex-col items-start">
                        <button onClick={() => router.push("/product")}> Эмэгтэй хувцас</button>
                        <button onClick={() => router.push("/product")}> Эмэгтэй хувцас</button>
                        <button onClick={() => router.push("/product")}> Эмэгтэй хувцас</button>
                        <button onClick={() => router.push("/product")}> Эмэгтэй хувцас</button>
                        <button onClick={() => router.push("/product")}> Эмэгтэй хувцас</button>
                    </div>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
    )
}
export default Header;