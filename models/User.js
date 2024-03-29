import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    // Campos obligatorios
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50
    },
    username: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 20,
      unique: true
    },
    email: {
      type: String,
      required: true,
      maxLength: 50,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minLength: 6
    },
    // Campo obligatorio y con enum
    profile: {
      type: String,
      required: true,
      enum: ['personal', 'profesional'],
      default: 'personal'
    },
    // Campos opcionales
    profilePic: {
      type: String,
      default: ''
    },
    followers: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }],
      default: []
    },
    following: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }],
      default: []
    },
    labels: {
      type: [String],
      default: []
    },
    /* labels: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Label'
      }],
      default: []
    }, */
    address: {
      street: {
        type: String,
        minLength: 3,
        maxLength: 255
      },
      zipCode: {
        type: Number,
        min: 1000,
        max: 52999,
        maxLength: 5
      },
      city: {
        type: String,
        minLength: 3,
        maxLength: 50
      },
      country: {
        type: String,
        enum: ['España']
      }
    },
    resetToken: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('User', UserSchema)
export default User
