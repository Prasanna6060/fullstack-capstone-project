import giftModel from "../models/gifts.models.js";


export const filerSearch = async (req, res) => {
    try {
        // Extract query parameters
        const { name, category, condition, age_years } = req.query;
        let query = {};

        // Filter by name using case-insensitive regex if name is provided
        if (name && name.trim() !== '') {
            query.name = { $regex: name, $options: 'i' };
        }

        // Filter by category if category is provided
        if (category && category.trim() !== '') {
            query.category = category;
        }

        // Filter by condition if condition is provided
        if (condition && condition.trim() !== '') {
            query.condition = condition;
        }

        // Filter by age_years using $lte if age_years is provided and is a valid number
        if (age_years && !isNaN(age_years)) {
            query.age_years = { $lte: parseInt(age_years, 10) };
        }

        // Fetch filtered gifts from the database
        const gifts = await giftModel.find(query);
        res.json(gifts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}