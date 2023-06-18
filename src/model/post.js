import { Schema, model as Model } from 'mongoose'

const schema = new Schema(
  {
    title: { type: String, sparse: true },
    description: { type: String, sparse: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', select: false },
  },
  {
    autoIndex: true,
    versionKey: false,
    timestamps: true,
  }
)

export const PostModel = Model('Post', schema)
