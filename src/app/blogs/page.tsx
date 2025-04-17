import Card from '@/components/ui/Card';
import CategoryList from '@/components/ui/CategoryList';
import { getPosts } from '@/utils/fetchData'
import React from 'react'

const AllBlogs = async () => {
    const blogs = await getPosts();
    return (
        <div>
            <CategoryList></CategoryList>
            <p className='my-10 text-xl font-[500]'>
                Total : {blogs.length}
            </p>
            <div className='space-y-10'>
                {
                    blogs.slice().reverse().map(ele => {
                        return <div key={ele._id}>
                            <Card data={ele}></Card>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default AllBlogs