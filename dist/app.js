"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const companyRoutes_1 = __importDefault(require("./routes/companyRoutes"));
const serviceRoutes_1 = __importDefault(require("./routes/serviceRoutes"));
const faqRoutes_1 = __importDefault(require("./routes/faqRoutes"));
const emailTemplateRoutes_1 = __importDefault(require("./routes/emailTemplateRoutes"));
const notificationTemplateRoutes_1 = __importDefault(require("./routes/notificationTemplateRoutes"));
const projectRoutes_1 = __importDefault(require("./routes/projectRoutes"));
const blogRoutes_1 = __importDefault(require("./routes/blogRoutes"));
const jobRoutes_1 = __importDefault(require("./routes/jobRoutes"));
const tutorialRoutes_1 = __importDefault(require("./routes/tutorialRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use((0, helmet_1.default)({
    crossOriginResourcePolicy: false,
}));
const allowedOrigins = [
    'http://localhost:3002',
    'http://127.0.0.1:3002',
    'https://kennytechstudios.com',
    'https://www.kennytechstudios.com'
];
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps or curl requests)
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Request Logger with Time
app.use((req, res, next) => {
    const startTime = new Date().toISOString();
    console.log(`[${startTime}] ${req.method} ${req.originalUrl} - Request Received`);
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} [${res.statusCode}] - ${duration}ms`);
    });
    next();
});
// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Kenny Tech API is running' });
});
// Routes
app.use('/api/auth', authRoutes_1.default);
app.use('/api/company', companyRoutes_1.default);
app.use('/api/services', serviceRoutes_1.default);
app.use('/api/faq', faqRoutes_1.default);
app.use('/api/email-templates', emailTemplateRoutes_1.default);
app.use('/api/notification-templates', notificationTemplateRoutes_1.default);
app.use('/api/projects', projectRoutes_1.default);
app.use('/api/blogs', blogRoutes_1.default);
app.use('/api/jobs', jobRoutes_1.default);
app.use('/api/tutorials', tutorialRoutes_1.default);
// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'Error',
        message: err.message || 'Internal Server Error',
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map