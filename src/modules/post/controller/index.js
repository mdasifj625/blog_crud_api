import _CreatePost from './create.js'
import _GetPosts from './get-all.js'
import _GetPost from './get.js'
import _UpdatePost from './update.js'
import _DeletePost from './delete.js'

export default class AuthController {
  CreatePost = _CreatePost
  GetPosts = _GetPosts
  GetPost = _GetPost
  UpdatePost = _UpdatePost
  DeletePost = _DeletePost
}
