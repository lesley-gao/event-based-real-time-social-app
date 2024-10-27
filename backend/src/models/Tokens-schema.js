import mongoose, {Schema} from "mongoose";


const tokensSchema = new Schema(
    {
        userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true},
        token: {type: String, required: true, unique: true},
        location: {
            type: {type: String, default: "Point"},
            coordinates: {type: [Number], required: true, index: "2dsphere"}
        }
    },
    {timestamps: true}
);

const Token = mongoose.model("Token", tokensSchema);
export default Token;