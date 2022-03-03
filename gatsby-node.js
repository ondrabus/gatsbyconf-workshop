const { graphql } = require("gatsby")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    
    return new Promise((resolve, reject) => {
        const landingPageTemplate = path.resolve('./src/templates/LandingPageTemplate.tsx');
        
        graphql(`
            // TODO: add graphQL query that fetches all landing pages
        `).then(result => {
            if (result.errors) {
                console.log(result.errors);
                reject(result.errors);
            }

            // TODO: multilingual paths generation
            
            // createPage({
            //     path: ,
            //     component: ,
            //     context: {
            //         id: 
            //     }
            // })

            resolve();
        });
    })
}