import requestValidator from '../../../helper/request.validator.js'
import CreatePostDTO from '../dto/create.post.dto.js'

export default async function _CreatePost(req, res) {
  try {
    const { errors, value } = await requestValidator(CreatePostDTO, req.body)
    if (errors) {
      return res.unprocessableEntity({ errors })
    }

    const { title, description } = value

    // Create Post Document
    const post = new App.Models.Post({
      title,
      description,
      createdBy: req.user._id,
    })

    await post.save()

    return res.created({
      message: App.Messages.Post.Success.Created,
      items: post,
    })
  } catch (err) {
    Logger.error(err)
  }
}
