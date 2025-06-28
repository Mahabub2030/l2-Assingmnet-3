"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.Genre = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
var Genre;
(function (Genre) {
    Genre["FICTION"] = "FICTION";
    Genre["NON_FICTION"] = "NON_FICTION";
    Genre["SCIENCE"] = "SCIENCE";
    Genre["HISTORY"] = "HISTORY";
    Genre["BIOGRAPHY"] = "BIOGRAPHY";
    Genre["FANTASY"] = "FANTASY";
})(Genre || (exports.Genre = Genre = {}));
const bookSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, enum: Object.values(Genre), required: true },
    isbn: { type: String, required: true, unique: true },
    description: { type: String },
    copies: { type: Number, required: true, min: 0 },
    available: { type: Boolean, default: true },
}, { timestamps: true });
// Instance method to update availability
bookSchema.methods.updateAvailability = function () {
    this.available = this.copies > 0;
    return this.save();
};
exports.Book = mongoose_1.default.model("Book", bookSchema);
