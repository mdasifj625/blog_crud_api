import { Schema, model as Model } from 'mongoose'
import bcrypt from 'bcrypt'
import { Role } from '../core/constants/roles.js'

const schema = new Schema(
  {
    username: { type: String, unique: true, sparse: true },
    firstName: { type: String, sparse: true },
    lastName: { type: String, sparse: true },

    email: { type: String, unique: true, sparse: true },
    password: { type: String, select: false },
    accountType: {
      type: String,
      enum: [Role.USER, Role.ADMIN],
      default: Role.USER,
    },

    isActive: { type: Boolean, default: true },
  },
  {
    autoIndex: true,
    versionKey: false,
    timestamps: true,
  }
)

// Before Save Hook
schema.pre('save', async function () {
  // Hash password
  const { password } = this
  if (this.isModified('password')) {
    const hash = bcrypt.hashSync(password, App.Config.SALT_ROUNDS)
    this.password = hash
  }
})

export const UserModel = Model('User', schema)
