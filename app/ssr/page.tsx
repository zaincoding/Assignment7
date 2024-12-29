
interface product{
  id:number;
  name: string;
  type: string;
  avaliable: string;
}

 async function PostData(){

    const storetData =  await fetch('https://simple-books-api.glitch.me/books/')
    const ParsedData:product[] = await storetData.json()

    return( ParsedData)
}



const Post = async() => {
    const posts = await PostData()

    return (
    <div>
                <h1 className="text-center md:text-[50px] text-[20px] font-bold text-[#206917]">Server Side Rendering</h1>

    
    <div className="grid md:grid-cols-3 gap-5 justify-items-center text-center text-[22px] leading-10  mt-5">
        
        {posts.map((info, index) => 
        <div className="w-[350px] h-[200px] bg-slate-200 border border-black">
        <div  key={index} className="mt-[10px]">
        <p>UserId: {info.id}</p>
        <p>name: {info.name}</p>
        <p>Type: {info.type}</p>
        <p>Avaliable: {info.avaliable}</p>
        </div>
        </div>

        )
        }
        
    </div>
    </div>
  )
}

export default Post;