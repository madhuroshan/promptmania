import { Schema, model, models } from "mongoose";
import User from "./user";

const promptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: User,
  },
  prompt: {
    type: String,
    required: [true, "Prompt is reuired"],
  },
  tag: {
    type: String,
    required: [true, "tag is reuired"],
  },
});

const Prompt = models.Prompt || model("Prompt", promptSchema);
export default Prompt;
