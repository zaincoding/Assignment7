"use client";

import { useEffect,useState } from "react";

import Image from "next/image";



interface interFa{
    id: number;
    title: string;
    price: number;
    description: string;
    category:string;
    image:string;
    rating:{
        rate:number;
        count:number;
    }
}

const  ClientSide = () => {

    const [data, setData] = useState<interFa[]>([])
    const [loading, setloading] = useState(false)

    useEffect(() =>{
        async function getData(){
            const response =  await fetch('https://fakestoreapi.com/products')

            const ParsedResponse: interFa[] = await response.json()

            console.log("Information",ParsedResponse)

            setData(ParsedResponse)


            
        }
        getData();
    }, [])

    useEffect(() =>{
      setloading(true);
      setTimeout(() => setloading(false), 5000);


    }, [])
  return (
    <div >
        <p className="text-center text-[50px] font-bold text-[#206917]">Client Side Rendering</p>

        {loading? (<p className="text-[25px] font-medium grid justify-center items-center">&quot;Wait Data is loading...&quot;</p>) : (

        <div className="md:grid md:grid-cols-3  mx-auto gap-[70px] ml-[10px]">
        {data.map((Data) =>
        <div key={Data.id} className="border border-black  bg-slate-300 font-medium ">
            <p>ID: {Data.id}</p>
            <p className="text-[22px] ">Title: {Data.title}</p>
            <p className="text-[22px]  text-[#fc3a3a]">Price: {Data.price}</p>
            <p><Image src={Data.image} alt="product image" width={300} height={300}/></p>
            <p>description: {Data.description}</p>
            <p>Category: {Data.category}</p>
            <p className="text-[#3356f0]">Rating: {Data.rating.rate} {Data.rating.count}</p>

         </div>
        )}
        </div>
        )}
    </div>
  )
}

export default ClientSide;