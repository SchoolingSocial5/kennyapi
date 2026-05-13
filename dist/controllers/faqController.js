"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFaq = exports.updateFaq = exports.createFaq = exports.getFaqs = void 0;
const Faq_1 = __importDefault(require("../models/Faq"));
const getFaqs = async (req, res) => {
    try {
        const faqs = await Faq_1.default.find().sort({ createdAt: -1 });
        res.json(faqs);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching FAQs' });
    }
};
exports.getFaqs = getFaqs;
const createFaq = async (req, res) => {
    try {
        const faq = new Faq_1.default(req.body);
        await faq.save();
        res.status(201).json(faq);
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating FAQ' });
    }
};
exports.createFaq = createFaq;
const updateFaq = async (req, res) => {
    try {
        const faq = await Faq_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!faq)
            return res.status(404).json({ message: 'FAQ not found' });
        res.json(faq);
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating FAQ' });
    }
};
exports.updateFaq = updateFaq;
const deleteFaq = async (req, res) => {
    try {
        const faq = await Faq_1.default.findByIdAndDelete(req.params.id);
        if (!faq)
            return res.status(404).json({ message: 'FAQ not found' });
        res.json({ message: 'FAQ deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting FAQ' });
    }
};
exports.deleteFaq = deleteFaq;
//# sourceMappingURL=faqController.js.map