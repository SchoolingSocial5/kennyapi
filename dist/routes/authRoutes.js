"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const router = express_1.default.Router();
router.post('/register', authController_1.register);
router.post('/login', authController_1.login);
router.get('/users', authController_1.getUsers);
router.delete('/users/:id', authController_1.deleteUser);
router.get('/staffs', authController_1.getStaffs);
router.put('/users/bulk-status', authController_1.bulkUpdateUserStatus);
router.put('/users/:id', authController_1.updateUser);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map