import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: String,
    bio: String,
    travels: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Travel",
        },
    ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
