import React from 'react'
import blogs from '../components/Allblogs.js'
import Title from '../components/Title.js'

function BlogsPage() {
    return (
        <div className="">
            <div className="">
                <Title title={'Blogs'}></Title>
                </div>
                <div className="Blogspage">
                {
                    blogs.map((blog) => {
                        return (
                            <div className="blog" key={blog.id}>
                                <div className="blog-content">
                                    <img src={blog.image} alt="" />
                                    <a href={blog.link} className="blog-link">{blog.title}</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BlogsPage
