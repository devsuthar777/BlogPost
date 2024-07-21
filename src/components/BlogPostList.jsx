import React, { useEffect, useState } from 'react'
import BlogPostItem from './BlogPostItem'
import { retriveAllPost } from './services/operations/blogPostList';
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const BlogPostList = () => {
 
   const [allPost,setAllPost] = useState([]);
   const [totalPost,setTotalPost] = useState(0);
   const [currPostList,setCurrPostList] = useState([]);
   const [currPageNumber,setCurrPageNumber] = useState(0);

   const navigate = useNavigate();

    useEffect(()=>{
        console.log("hello");
         retriveAllPost(setAllPost,setTotalPost,setCurrPostList,setCurrPageNumber);
       
    },[]);


    function lefPaginationHandler( ){
        if(currPageNumber==1) return;
        else if(currPageNumber-1!=1)
            {
                setCurrPageNumber(currPageNumber-1);
                setCurrPostList(allPost.slice((currPageNumber-2)*5,(currPageNumber-1)*5));
                console.log("ifPrev",allPost.slice((currPageNumber-2)*5,(currPageNumber-1)*5));
            }
        else{
                setCurrPageNumber(currPageNumber-1);
                setCurrPostList( totalPost.length>=5 ? allPost.slice(0,5) : allPost.slice(0,totalPost)  );
                console.log("elsePrev",totalPost.length>=5 ? allPost.slice(0,5) : allPost.slice(0,totalPost));

            }
    }

    function righPaginationHandler(){
        if(currPageNumber==Math.ceil(totalPost/5)) return;
        else if(currPageNumber+1!=Math.ceil(totalPost/5))
            {
                setCurrPageNumber(currPageNumber+1);
                setCurrPostList(allPost.slice((currPageNumber)*5,(currPageNumber)*5+5));
                console.log("ifNext",allPost.slice((currPageNumber)*5,(currPageNumber)*5+5));
            }
        else{
                setCurrPageNumber(currPageNumber+1);
                setCurrPostList(allPost.slice((currPageNumber)*5,totalPost));
                console.log("elseNext",allPost.slice((currPageNumber)*5,totalPost));
            }
    }

    function navigateToPost(event){

        console.log(event.currentTarget.id);
        navigate('/post/:pageId='+currPageNumber+"postId="+event.currentTarget.id,
            {state:{postId:event.currentTarget.id,currPostArray:currPostList}});
        
    }

  return (
    totalPost==0 ? (
    <div className='h-screen w-screen flex'>
        <div class="loader mx-auto my-auto"></div>
    </div>
    ) :
    (<div  className='w-11/12 h-full text-white mx-auto py-3 flex flex-col gap-7 '>
        <div className='w-full my-2 h-11  bg-blue-500 flex items-center px-5 justify-around'>
        <p className='md:block hidden '>Total Pages: {Math.ceil(totalPost/5)}</p>
        <div className='flex items-center justify-between gap-3 mx-auto md:mr-0'>
            <div className='flex items-center transition-all delay-100  hover:cursor-pointer hover:font-bold ' 
            onClick={lefPaginationHandler}><MdArrowLeft className='text-2xl'/>
            <p>Prev</p>
            </div>
            <p className='border-l border-l-white border-r px-3'> {currPageNumber} of {Math.ceil(totalPost/5)}</p>
            <div className='flex items-center transition-all delay-100  hover:cursor-pointer hover:font-bold ' 
            onClick={righPaginationHandler}
            > 
            <p>Next</p> <MdArrowRight className='text-2xl'/> 
            </div>
        </div>

         </div>
        {
            currPostList.length ===0 ? (<p className='text-xl text-center'>No Post Found</p>) : (
            
            currPostList.map((data,index)=>{
                  return  <BlogPostItem data={data} key={index} postId={index} navigateToPost={navigateToPost}/>
                })
            
            )
        }
   
    </div>)
  )
}

export default BlogPostList