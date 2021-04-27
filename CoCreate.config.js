module.exports = {
    config: {
        apiKey: "c2b08663-06e3-440c-ef6f-13978b42883a",
        securityKey: "f26baf68-e3a9-45fc-effe-502e47116265",
        organization_Id: "5de0387b12e200ea63204d6c",
        host: "server.cocreate.app:8088"
    },
 
    sources: [
        // {
        //     path: "./src/blog.html",
        //     collection: "files",
        //     document_id: "",
        //     key: "html",
        //     data:{
        //         name: "Blog",
        //     }
        // },
        {
            path: "./src/blog.html",
            collection: "files",
            document_id: "60887864117c640e7596300c",
            key: "html",
            data:{
                name: "Blog",
            }
        },
        {
            path: "./src/blog-post.html",
            collection: "files",
            document_id: "60887864117c640e7596300d",
            key: "html",
            data:{
                name: "Blog post",
            }
        },
        {
            path: "./src/discuss.html",
            collection: "files",
            document_id: "60887864117c640e7596300e",
            key: "html",
            data:{
                name: "Discuss",
            }
        },
        {
            path: "./src/discussion.html",
            collection: "files",
            document_id: "60887864117c640e7596300f",
            key: "html",
            data:{
                name: "Discussion",
            }
        },
        {
            path: "./src/product-list.html",
            collection: "files",
            document_id: "60887864117c640e75963010",
            key: "html",
            data:{
                name: "Product List",
            }
        },
        {
            path: "./src/product.html",
            collection: "files",
            document_id: "60887864117c640e75963011",
            key: "html",
            data:{
                name: "Product",
            }
        },
        {
            path: "./src/university.html",
            collection: "files",
            document_id: "60887864117c640e75963012",
            key: "html",
            data:{
                name: "University",
            }
        },
        {
            path: "./src/university-item.html",
            collection: "files",
            document_id: "60887864117c640e75963013",
            key: "html",
            data:{
                name: "University Item",
            }
        },
        // {
        //     path: "./src/navbar.html",
        //     collection: "components",
        //     document_id: "60395ef42b3ac232657040fd",
        //     key: "html",
        //     data:{
        //         name: "CoCreateJS Doc Navbar",
        //     }
        // },
    ],
   
    crud: [
        {
            collection: "routes",
            document_id: "60887864117c640e75963004",
            data:{
                collection: "files",
                document_id: "60887864117c640e7596300c",
                name: "html",
                domains: ["cocreate.app", "server.cocreate.app", "ws.cocreate.app"],
                route: "/blog",
            }
        },
        {
            collection: "routes",
            document_id: "60887864117c640e75963005",
            data:{
                collection: "files",
                document_id: "60887864117c640e7596300d",
                name: "html",
                domains: ["cocreate.app", "server.cocreate.app", "ws.cocreate.app"],
                route: "/blog-post",
            }
        },
        {
            collection: "routes",
            document_id: "60887864117c640e75963006",
            data:{
                collection: "files",
                document_id: "60887864117c640e7596300e",
                name: "html",
                domains: ["cocreate.app", "server.cocreate.app", "ws.cocreate.app"],
                route: "/discuss",
            }
        },
        {
            collection: "routes",
            document_id: "60887864117c640e75963007",
            data:{
                collection: "files",
                document_id: "60887864117c640e7596300f",
                name: "html",
                domains: ["cocreate.app", "server.cocreate.app", "ws.cocreate.app"],
                route: "/discussion",
            }
        },
        {
            collection: "routes",
            document_id: "60887864117c640e75963008",
            data:{
                collection: "files",
                document_id: "60887864117c640e75963010",
                name: "html",
                domains: ["cocreate.app", "server.cocreate.app", "ws.cocreate.app"],
                route: "/product-list",
            }
        },
        {
            collection: "routes",
            document_id: "60887864117c640e75963009",
            data:{
                collection: "files",
                document_id: "60887864117c640e75963011",
                name: "html",
                domains: ["cocreate.app", "server.cocreate.app", "ws.cocreate.app"],
                route: "/product",
            }
        },
        {
            collection: "routes",
            document_id: "60887864117c640e7596300a",
            data:{
                collection: "files",
                document_id: "60887864117c640e75963012",
                name: "html",
                domains: ["cocreate.app", "server.cocreate.app", "ws.cocreate.app"],
                route: "/university",
            }
        },
        {
            collection: "routes",
            document_id: "60887864117c640e7596300b",
            data:{
                collection: "files",
                document_id: "60887864117c640e75963013",
                name: "html",
                domains: ["cocreate.app", "server.cocreate.app", "ws.cocreate.app"],
                route: "/university-item",
            }
        }
    ],
    
    extract: {
        directory: "./src/",
        extensions: [
            "js",
            "css",
            "html"
        ],
        ignores: [
            "node_modules",
            "vendor",
            "bower_components",
            "archive"
        ],
    }
}
