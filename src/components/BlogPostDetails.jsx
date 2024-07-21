import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import noImageFound from '../components/assests/NoImage.png'

const BlogPostDetails = () => {

  const location = useLocation();
  console.log(location.state);

  const [currPostData,setCurrPostData] = useState(location.state.currPostArray[location.state.postId.replace("post","")]);
  console.log(currPostData);

  return (
    <div className='min-h-screen  border-t-2 border-white  '>
        {
            currPostData  ? (
                <div className='md:w-10/12 w-11/12 mx-auto py-5'>
                    <h1 className='text-center md:text-3xl text-xl font-bold text-blue-25 '>{currPostData.title}</h1>
                    <div className='mx-auto w-1/3 h-1 bg-richblack-500 my-3'></div>
                    
                    <div className='flex justify-center'><p className='text-richblack-100'>Published by : {" "} 
                    <span className='font-medium text-brown-5'>{ currPostData.author}
                    </span> 
                    <br className='md:hidden block'/>
                    {" "} On : {" "}
                    <span className='font-bold text-brown-5'>{currPostData.publishedAt.substr(0,10)}
                    </span></p>
                    </div>

                    <div className='w-10/12  mx-auto mt-5 rounded-lg border '>
                        {
                          currPostData.urlToImage!=null ? (
                            <img src={currPostData.urlToImage} className='mx-auto'></img>
                          )  :
                          <img src={noImageFound} className='mx-auto'></img>
                        }
                    </div>

                    <p className='text-white w-10/12 mx-auto mt-7'>{currPostData.content}  </p>

                </div>  
            ) 
            :
            (
                <p>No Details Found</p>
            )
        }
    </div>
  )
}

export default BlogPostDetails