import { Schema } from 'mongoose';
import mongoose from '../database';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
 
 name: {
    type: String,
    require: true

 },
 email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true
 },
 password: {
    type: String,
    require: true,
    select: false
 },
 createdAt: {
    type: Date,
    default: Date.now
 }
});

interface Password {
   type: string,
   require: true,
   select: false
}

const User = mongoose.model('Use', UserSchema);

export default User;