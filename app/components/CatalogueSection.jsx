"use client";
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";


export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            catagory: "BEDROOM SETUP",
            description:
                "Create your perfect sanctuary with our stylish and comfortable bedroom setups.",
            title: "Cossy Bedroom Setup",
            image: "/image/badroom.jpg",
        },
        {
            id: "02",
            catagory: "KITCHEN SETUP",
            description:
                "Transform your kitchen with our efficient and beautiful setups for a delightful cooking experience.",
            title: "Neat & Clean Kitchen",
            image: "/image/kitchen1.jpg",
        },
        {
            id: "03",
            catagory: "DRAWING SETUP",
            description:
                "Design inspiring drawing rooms perfect for creativity and professional work.",
            title: "Family Drowing Room",
            image: "/image/drowing.jpg",
        },
        {
            id: "04",
            catagory: "LIVING SETUP",
            description:
                "Elevate your living area with our stylish and cozy setups for relaxation and entertainment.",
            title: "Clean Family Room",
            image: "/image/living.jpg",
        },
    ]

    return (
        <div className="grid gap-8 divide-gray-300 lg:divide- lg:gap-8 lg:grid-cols-4 md:grid-cols-2">
            {items.map((item) => (
                <div key={item.id} className="relative overflow-hidden group">
                    <div>
                        <Image src={item.image} width={380} height={100} alt="item img" className="w-full " />
                    </div>
                    <div className="absolute top-0 p-8 m-12 bg-white bg-opacity-60 backdrop-blur">
                        <div className="flex justify-between pb-4 ">
                            <p className="text-sm">{item.catagory}</p>
                            <span className="text-sm ">{item.id}</span>
                        </div>
                        <a className="block text-xl font-semibold" href="">{item.title}</a>
                        <p className="py-4 text-gray-500">{item.description}</p>
                        <a className="inline-flex items-center font-medium" href="">See Details <TbArrowNarrowRight className="ml-2 text-xl " /></a>
                    </div>

                    <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 bg-zinc-100">
                        <span className="">
                            {item.id}
                        </span>
                        <p className="tracking-wider  ">{item.catagory} </p>

                    </div>
                </div>
            ))}
        </div>
    )
}