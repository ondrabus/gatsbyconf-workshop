import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
            dangerouslySetInnerHTML={{
                __html: `

                    document.addEventListener("scroll", function () {
                        var scrollpos = window.scrollY;
                        var header = document.getElementById("header");
                        var navcontent = document.getElementById("nav-content");
                        var brandname = document.getElementById("brandname");
                        var toToggle = document.querySelectorAll(".toggleColour");

                        /*Apply classes for slide in bar*/
                        scrollpos = window.scrollY;

                        if (scrollpos > 10) {
                        header.classList.add("bg-white");
                        //Use to switch toggleColour colours
                        for (var i = 0; i < toToggle.length; i++) {
                            toToggle[i].classList.add("text-gray-800");
                            toToggle[i].classList.remove("text-white");
                        }
                        header.classList.add("shadow");
                        navcontent.classList.remove("bg-gray-100");
                        navcontent.classList.add("bg-white");
                        } else {
                        header.classList.remove("bg-white");
                        //Use to switch toggleColour colours
                        for (var i = 0; i < toToggle.length; i++) {
                            toToggle[i].classList.add("text-white");
                            toToggle[i].classList.remove("text-gray-800");
                        }

                        header.classList.remove("shadow");
                        navcontent.classList.remove("bg-white");
                        navcontent.classList.add("bg-gray-100");
                        }
                    });
                `}} />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
