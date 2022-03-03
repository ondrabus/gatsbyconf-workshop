import { RichTextElement } from "@kentico/gatsby-kontent-components"
import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"

export default (props: any) =>{
    
    const { elements, system } = props

    return (
    // <StaticQuery
    //     query={graphql`
    //         }`
    //     }
    //     render={
    //         data => {
    //             return (
                    <section
                        id={system.codename}
                        className="bg-white py-8"
                        data-kontent-component-id={system.id}
                        data-kontent-add-button
                        data-kontent-add-button-insert-position="after"
                        data-kontent-add-button-render-position="bottom">
                        <div className="container max-w-5xl mx-auto m-8">
                            <h1
                                className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
                                data-kontent-element-codename="headline"
                            >
                                {elements.headline.value}
                            </h1>
                            <div className="w-full mb-4">
                                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-5/6 sm:w-1/2 p-6" data-kontent-element-codename="text">
                                    <RichTextElement
                                        value={elements.text.value}
                                        resolveDomNode={(domNode: any, domToReact: any) => {
                                            if (domNode.name === "p") {
                                                domNode.attribs.className = "text-gray-600 mb-8";
                                            }
                                        }} />
                                </div>
                                <div className="w-full sm:w-1/2 p-6" data-kontent-element-codename="image">
                                    <img src={elements.image.value[0].url} />
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
    //     }
    // />)}