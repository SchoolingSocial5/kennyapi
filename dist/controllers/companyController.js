"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCompany = exports.getCompany = void 0;
const Company_1 = __importDefault(require("../models/Company"));
const getCompany = async (req, res) => {
    try {
        let company = await Company_1.default.findOne();
        if (!company) {
            // Create a default one if it doesn't exist
            company = await Company_1.default.create({
                name: 'Kenny Tech Studios',
                domain: 'kennytech.com',
                email: 'info@kennytech.com',
                phoneNumber: '',
                address: '',
                bankName: '',
                accountName: '',
                accountNumber: ''
            });
        }
        res.status(200).json(company);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getCompany = getCompany;
const updateCompany = async (req, res) => {
    try {
        let company = await Company_1.default.findOne();
        if (company) {
            company = await Company_1.default.findByIdAndUpdate(company._id, req.body, { new: true });
        }
        else {
            company = await Company_1.default.create(req.body);
        }
        res.status(200).json(company);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.updateCompany = updateCompany;
//# sourceMappingURL=companyController.js.map