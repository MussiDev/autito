import mongoose from "mongoose";

const TravelSchema = new mongoose.Schema(
    {
        destiny: {
            type: String,
            required: true,
        },
        ubication: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        hour: {
            type: String,
            required: true,
        },
        places: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: false,
            trim: true,
            maxlength: [200, "title cannot be grater than 200 characters"],
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const TravelsModel = mongoose.models.Travel || mongoose.model("Travel", TravelSchema);
