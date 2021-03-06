const Blog = require("./models/blog");

async function findAllBlogs() {
    return new Promise((resolve, reject) => { 
        Blog.find((err, datas) => { 
            if (err) reject({isOk:false,error:err});
            resolve({ isOk: true, datas: datas });
        })
    }) 
}

async function findBlogById(id) { 
    return new Promise((resolve, reject) => { 
        Blog.findById(id, (err, data) => { 
            if (err) return reject({ isOk: false, error: err });
            resolve({isOk:true,data:data})
        })
    })
}

async function addBlog(title, body) { 
    var blog = new Blog;
    blog.title = title;
    blog.body = body;
    return new Promise((resolve, reject) => { 
        blog.save((err, data) => { 
            if (err) return reject({ isOk: false, error: err });
            resolve({isOk:true,data:data})
        })
    })
    
}

module.exports = {
    findAllBlogs,
    findBlogById,
    addBlog
}
