


 async function PostData(){

    const storetData =  await fetch('https://simple-books-api.glitch.me/books/')
    const ParsedData = await storetData.json()

    return( ParsedData)
}



const Post = async() => {
    let posts = await PostData()
    console.log(posts)
  return (
    <div>
                <h1 className="text-center md:text-[50px] text-[20px] font-bold text-[#206917]">Server Side Rendering</h1>

    
    <div className="grid md:grid-cols-3 gap-5 justify-items-center text-center text-[22px] leading-10  mt-5">
        
        {posts.map((zain:any) => 
        <div className="w-[350px] h-[200px] bg-slate-200 border border-black">
        <div className="mt-[10px]">
        <p>UserId: {zain.id}</p>
        <p>name: {zain.name}</p>
        <p>Type: {zain.type}</p>
        <p>Avaliable: {zain.avaliable}</p>
        </div>
        </div>

        )
        }
        
    </div>
    </div>
  )
}

export default Post;