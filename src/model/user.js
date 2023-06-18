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

/**
 * *************************************************
 *        S T A T I C   M E T H O D S
 * *************************************************
 */

// Function to check if any document exits with the given id
schema.static('findById', (value, projection = {}) => {
  return App.Models.User.findOne({ _id: value }, projection)
})

// Function to check if any document exits with the given username
schema.static('findByUsername', (username) => {
  return App.Models.User.findOne({ username })
})

// Function to check if any document exits with the given email
schema.static('findByEmail', (email) => {
  return App.Models.User.findOne({ email })
})

export const UserModel = Model('User', schema)
