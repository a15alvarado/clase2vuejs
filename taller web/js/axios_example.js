/*axios.get("https://jsonplaceholder.typicode.com/posts/7").then(result=>{
    console.log(result);
    const postid= result.data.id
    console.log("post",result);
    
    axios.get("https://jsonplaceholder.typicode.com/comments/"+postid)
    .then((result)=>{
        console.log("comentario",result);
        }).catch((error)=>{
            console.log(error);      
        });
}).catch((error)=>{
    console.log(error);  
});*/

async function getdata(){
    try {
        const post = await axios.get("https://jsonplaceholder.typicode.com/posts/7")
    //id del post
    const postid= post.data.id
    console.log("post",post);
    //id del post para comentarios
    const comment=await axios.get("https://jsonplaceholder.typicode.com/comments/"+postid)
    console.log("comentario",comment);

    } catch (error) {
        console.log(error);
        
    }
}
getdata();