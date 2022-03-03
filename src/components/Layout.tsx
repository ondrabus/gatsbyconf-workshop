import React, { PropsWithChildren, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import KontentSmartLink from "@kentico/kontent-smart-link"

import "../styles/index.css"

export default ({ children }: PropsWithChildren<{}>) => {
    useEffect(() => {
        const plugin = KontentSmartLink.initialize({
          queryParam: 'preview-mode',
        })
        return () => {
          plugin.destroy()
        }
      })
      
    return (
        <StaticQuery
            query={graphql`
                {
                    sitePlugin(name: { eq: "@kentico/gatsby-source-kontent" }) {
                        pluginOptions
                    }
                }
            `}
            render={(data) => (
                <div
                    data-kontent-project-id={data.sitePlugin.pluginOptions.projectId}
                    data-kontent-language-codename={data.sitePlugin.pluginOptions.languageCodenames[0]}>
                    <Helmet
                        bodyAttributes={{
                            class: "leading-normal tracking-normal text-white gradient",
                        }}>
                        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
                        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />

                    </Helmet>
                    {children}
                </div>
            )}
        />
    )
}