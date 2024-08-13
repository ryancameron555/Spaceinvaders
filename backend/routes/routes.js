const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    highscore: { type: Number, default: 0 },
});

const User = mongoose.model('User', userSchema);
