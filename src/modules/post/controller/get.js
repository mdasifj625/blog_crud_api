export default async function _GetPost(req, res) {
  try {
    const postId = req.params.id

    // Get Single Post Document
    const post = await App.Models.Post.findOne({
      _id: postId,
    })
    return res.success({
      message: App.Messages.Post.Success.Get,
      items: post,
    })
  } catch (err) {
    Logger.error(err)
  }
}
