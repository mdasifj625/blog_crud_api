import requestValidator from '../../../helper/request.validator.js'
import UpdatePostDTO from '../dto/update.post.dto.js'

export default async function _UpdatePost(req, res) {
  try {
    const { errors, value } = await requestValidator(UpdatePostDTO, req.body)
    if (errors) {
      return res.unprocessableEntity({ errors })
    }

    const { title, description } = value
    const postId = req.params.id

    // Update Post Document
    const post = await App.Models.Post.findOneAndUpdate(
      { _id: postId },
      {
        title,
        description,
      },
      { new: true }
    )

    return res.success({
      message: App.Messages.Post.Success.Updated,
      items: post,
    })
  } catch (err) {
    Logger.error(err)
  }
}
