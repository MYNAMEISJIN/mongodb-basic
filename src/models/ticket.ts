import mongoose, {Schema} from "mongoose"


if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL environment variable is not defined.");
}
mongoose.connect(process.env.MONGODB_URL);//데이터 베이스 연결.
mongoose.Promise = global.Promise;

const ticketSchema = new  Schema( // 스키마 만들기 (타입을 만들어준다.) 대이터베이스 타입
    {
        title: String,
        description: String,
        category: String,
        priority: Number,
        progress: Number,
        status: String,
        active: Boolean,
    },
    {
        timestamps: true
    }
)
const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema)
                //기존에 있으면 이거        // 없으면 스키마 만들기

export default Ticket;