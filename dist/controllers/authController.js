"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkUpdateUserStatus = exports.updateUser = exports.getStaffs = exports.deleteUser = exports.getUsers = exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = __importDefault(require("../models/User"));
const paginationHelper_1 = require("../utils/paginationHelper");
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }
        const userExists = await User_1.default.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const salt = await bcryptjs_1.default.genSalt(10);
        const hashedPassword = await bcryptjs_1.default.hash(password, salt);
        const user = await User_1.default.create({
            name,
            email,
            password: hashedPassword,
        });
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            status: user.status,
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide email and password' });
        }
        const user = await User_1.default.findOne({ email });
        if (user && (await bcryptjs_1.default.compare(password, user.password || ''))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                status: user.status,
            });
        }
        else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.login = login;
const getUsers = async (req, res) => {
    try {
        const query = { status: 'user' };
        const result = await (0, paginationHelper_1.paginate)(User_1.default, req, query);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getUsers = getUsers;
const deleteUser = async (req, res) => {
    try {
        const user = await User_1.default.findByIdAndDelete(req.params.id);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.deleteUser = deleteUser;
const getStaffs = async (req, res) => {
    try {
        const query = { status: { $in: ['staff', 'admin'] } };
        const result = await (0, paginationHelper_1.paginate)(User_1.default, req, query);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getStaffs = getStaffs;
const updateUser = async (req, res) => {
    try {
        const { name, email, status, position } = req.body;
        const user = await User_1.default.findByIdAndUpdate(req.params.id, { name, email, status, position }, { new: true });
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.updateUser = updateUser;
const bulkUpdateUserStatus = async (req, res) => {
    try {
        const { ids, status } = req.body;
        if (!ids || !Array.isArray(ids) || !status) {
            return res.status(400).json({ message: 'Invalid bulk parameters' });
        }
        await User_1.default.updateMany({ _id: { $in: ids } }, { $set: { status } });
        res.json({ message: `Successfully updated ${ids.length} user statuses` });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.bulkUpdateUserStatus = bulkUpdateUserStatus;
//# sourceMappingURL=authController.js.map