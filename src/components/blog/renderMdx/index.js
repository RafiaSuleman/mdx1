'use client'
import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'


const mdxComponents = {
  Image 
}
const RenderMdx = ({ blog}) => {
    
    const MDXContent = useMDXComponent(blog.body.code)

  return (
    <div className='  font-in prose sm:prose-base md:prose-lg max-w-max
                      prose-blockquote:bg-purple-500/20 
                      prose-blockquote:p-2
                      prose-blockquote:px-6
                      prose-blockquote:border-purple-500
                      prose-blockquote:not-italic
                      prose-blockquote:rounded-r-lg 

                      prose-li:marker:text-blue-500

                      dark:prose-invert
                      dark:prose-blockquote:border-accentDark
                      dark:prose-blockquote:bg-accentDark/20
                      dark:prose-li:marker:text-accentDark 

                      first-letter:text-3xl
                      sm:first-letter:text-5xl'>
        <MDXContent  components={mdxComponents}/> 
    </div>
  )
}

export default RenderMdx
