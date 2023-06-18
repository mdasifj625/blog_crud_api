export default async function _DeletePost(req, res) {
  try {
    const postId = req.params.id

    // Delete Post Document
    await App.Models.Post.deleteOne({ _id: postId })

    return res.success({
      message: App.Messages.Post.Success.Deleted,
    })
  } catch (err) {
    Logger.error(err)
  }
}
