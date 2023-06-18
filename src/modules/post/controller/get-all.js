export default async function _GetPosts(req, res) {
  try {
    // Create Post Document
    const posts = await App.Models.Post.find()

    return res.success({
      message: App.Messages.Post.Success.GetAll,
      items: posts,
    })
  } catch (err) {
    Logger.error(err)
  }
}
