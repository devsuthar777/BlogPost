
const {apiConnector} = require('../apiConnector');
const {BLOG_POST} = require('../apis');
const {data} = require('./blogPostDetails')

export const retriveAllPost =  async (setAllPost,setTotalPost,setCurrPostList,setCurrPageNumber) => {
    try
    {
        
        //const result = await apiConnector("GET",BLOG_POST.RETRIEVE_LIST);
       
        const result = {data};
        if(result.data.status==="ok")
        {
            let allPostList= result?.data?.articles != undefined ? result?.data?.articles : [];
            let totalPost = result?.data?.totalResults != undefined ? result?.data?.totalResults : 0;
            setAllPost(allPostList);
            setTotalPost(allPostList.length);
            
            if(totalPost!=0  && totalPost>5)
                {
                    setCurrPostList(allPostList.slice(0,5));
                    setCurrPageNumber(1);
                }
            else if(totalPost!=0  && totalPost<=5)
                {
                    setCurrPostList(allPostList);
                    setCurrPageNumber(1);
                }
            else
            {
                setCurrPostList([]);
            }

        }
    }
    catch(error)
    {
        console.log(error);

        
        
    }

}


