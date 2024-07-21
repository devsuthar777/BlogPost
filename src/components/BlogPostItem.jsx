import React from 'react'

const BlogPostItem = ({data,key,navigateToPost,postId}) => {
  return (
    <div  id={`post${postId}`} onClick={navigateToPost} className='w-full  bg-blue-700 border hover:cursor-pointer py-3 px-3 rounded-md shadow-xl hover:shadow-richblack-600 transition-all delay-75 hover:scale-105'>
    <table className="no-border w-full">
      <tbody className=''>
        <tr className='w-full  border-b-[1px]  flex flex-col md:table-row'>
          <td className='text-xl font-bold md:w-[90%] w-[100%] py-2 md:text-left text-center'>{data.title}</td>
          <td className='md:w-[10%] w-[100%] text-center text-sm'>{data.publishedAt.substr(0,10)}</td>
        </tr>
        
        <tr>
          <td className='text-richblack-50 w-[100%] ' colSpan={2}>{data.description}</td>
                 </tr>
      </tbody>
    </table>
    </div>
  )
}

export default BlogPostItem