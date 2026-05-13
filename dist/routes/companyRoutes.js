"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const companyController_1 = require("../controllers/companyController");
const router = (0, express_1.Router)();
router.get('/', companyController_1.getCompany);
router.put('/', companyController_1.updateCompany);
exports.default = router;
//# sourceMappingURL=companyRoutes.js.map