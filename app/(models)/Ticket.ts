import mongoose, { Schema } from "mongoose";

const mongodbUri = process.env.MONGODB_URI ? process.env.MONGODB_URI : "";
mongoose.connect(mongodbUri);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
    {
       title: String,
       description: String,
       category: String,
       priority: Number,
       progress: Number,
       status: String,
       active: Boolean
    },
    {
        timestamps: true,
    }
);
const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket