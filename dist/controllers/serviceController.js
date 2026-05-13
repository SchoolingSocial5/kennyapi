"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteService = exports.updateService = exports.createService = exports.getServices = void 0;
const Service_1 = __importDefault(require("../models/Service"));
const getServices = async (req, res) => {
    try {
        const services = await Service_1.default.find().sort({ createdAt: -1 });
        res.json(services);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching services' });
    }
};
exports.getServices = getServices;
const createService = async (req, res) => {
    try {
        const service = new Service_1.default(req.body);
        await service.save();
        res.status(201).json(service);
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating service' });
    }
};
exports.createService = createService;
const updateService = async (req, res) => {
    try {
        const service = await Service_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!service)
            return res.status(404).json({ message: 'Service not found' });
        res.json(service);
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating service' });
    }
};
exports.updateService = updateService;
const deleteService = async (req, res) => {
    try {
        const service = await Service_1.default.findByIdAndDelete(req.params.id);
        if (!service)
            return res.status(404).json({ message: 'Service not found' });
        res.json({ message: 'Service deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting service' });
    }
};
exports.deleteService = deleteService;
//# sourceMappingURL=serviceController.js.map