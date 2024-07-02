import giftModel from "../models/gifts.models.js";

export const getAllGifts = async (req, res) => {
    try {
        const gifts = await giftModel.find();
        res.status(200).send(gifts);
    } catch (error) {
        res.status(500).send({ message: "Error fetching gifts", error: error.message });
    }
}

export const getGiftById = async (req, res) => {
    try {
        const id = req.params.id;
        const gift = await giftModel.findOne({ id });
        if (!gift) {
            return res.status(404).send({ message: "Gift not found" });
        }
        res.status(200).send(gift);
    } catch (error) {
        res.status(500).send({ message: "Error fetching gift", error: error.message });
    }
}
