import React from 'react'

const BlogPostItem = ({data}) => {
  return (
    <div className='w-full  bg-blue-700 border py-3 px-3 rounded-md shadow-xl hover:shadow-richblack-600 transition-all delay-75 hover:scale-105'>
    <table className="no-border w-full">
      <tbody className=''>
        <tr className='w-full  border-b-[1px] '>
          <td className='text-xl font-bold w-[90%] py-2 '>{data.title}</td>
          <td className='w-[10%] text-center '>{data.publishedAt.substr(0,10)}</td>
        </tr>
        
        <tr>
          <td className='text-richblack-50 w-[90%] py-2'>{data.description}</td>
          <td className='w-[10%] text-center '>   
            <button className='bg-richblack-500  px-5 py-1 hover:bg-richblack-200 mt-2
            hover:text-richblack-600
             transition-all delay-75 rounded-md font-bold hover:scale-105'>View</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default BlogPostItem