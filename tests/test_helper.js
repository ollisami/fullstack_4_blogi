const Blog = require('../models/blog')

const initialBlogs= [
    {
        title: "Test",
        author: "Testi Testaaja",
        url: "test",
        likes: 10
    },
    {
        title: "Matti test",
        author: "Matti Mattinen",
        url: "mattimattinen",
        likes: 1
    },
    {
        title: "test no likes",
        author: "MR no likes",
        url: "likesmissing"
    },
    {
        author: "Title and url missing",
        likes: 1
    },
]

const nonExistingId = async () => {
  const blog = new Blog({ title: 'willremovethissoon' })
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
    initialBlogs, nonExistingId, blogsInDb
}