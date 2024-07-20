import React from 'react'

const BlogPostItem = () => {
  return (
    <div className='w-full  bg-blue-700 border py-3 px-3 rounded-md shadow-xl hover:shadow-richblack-600 transition-all delay-75 hover:scale-105'>
    <table className="no-border w-full">
      <tbody className=''>
        <tr className='w-full  border-b-[1px] '>
          <td className='text-xl font-bold w-[90%] py-2 '>iPhone SE 4 Rumored to Use Same Rear Chassis as iPhone 16</td>
          <td className='w-[10%] text-center '>2024-07-19</td>
        </tr>
        
        <tr>
          <td className='text-richblack-50 w-[90%] py-2'>Amazon Prime Day took place earlier this week, and it introduced huge discounts on a wide variety of Apple products, including AirPods Max, MacBook Pro, and iPad Pro. Even though Prime Day has ended, we're still tracking quite a few of these record low prices…</td>
          <td className='w-[10%] text-center '>
            <button className='bg-richblack-500  px-5 py-1 hover:bg-richblack-200
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