import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema; 
export default {
   User : mongoose.model('User', { firstName: String ,lastName: String}),
   Post : mongoose.model('Post', { title: String ,description: String, user: { type: Schema.Types.ObjectId, ref: 'User', required:true }})
}
