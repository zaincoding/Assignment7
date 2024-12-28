import Link from 'next/link';



const page = () => {
  return (
    <div>
<div className='grid justify-items-center'>
    <p className='font-medium md:text-[50px] my-10 text-[#19631f] '>Client & Server Side Rendering.</p>

<ul className='grid md:grid-cols-2 gap-14 md:w-[1000px] h-[40px] text-center 
text-[22px] '>
   <li className='bg-blue-300 rounded-2xl'><Link href="./csr">Client Side Rendering</Link></li>
    <li className='bg-blue-300 rounded-2xl'><Link href="./ssr">Server Side Rendering</Link></li>
</ul>

    </div>
    </div>

  )
}

export default page