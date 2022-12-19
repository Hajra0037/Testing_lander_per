import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export const CustomReactMarkdown = ({ children }) => {
    return (
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={children} />
    )
}
