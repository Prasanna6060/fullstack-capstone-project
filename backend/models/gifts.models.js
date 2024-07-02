import mongoose from "mongoose";

const giftSchema = new mongoose.Schema({
    
            id: Number,
            name: String,
            category: String,
            condition: String,
            posted_by: Number,
            zipcode: Number,
            date_added: Number,
            age_days: Number,
            age_years: Date,
            description: String,
            image: String
        
})

const giftModel = mongoose.model("gift", giftSchema)

export default giftModel;