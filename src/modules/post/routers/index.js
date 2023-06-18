import { Router } from 'express'
import PostController from '../controller/index.js'
import { authorize } from '../../../middleware/authorizer.js'
const postController = new PostController()
const router = Router()

router.get('/ping', (_req, res) => {
  return res.success({ message: 'Hello from posts route' })
})

router.post('/', authorize.bind(), postController.CreatePost.bind())

router.get('/', postController.GetPosts.bind())

router.get('/:id', postController.GetPost.bind())

// router.put('/:id', postController.UpdatePost.bind())

// router.delete('/:id', postController.DeletePost.bind())

export const postRouter = router
