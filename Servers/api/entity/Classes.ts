import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./User";
import { IStudent } from "./Student";

export interface IClasses extends Document {
    className: string;
    schoolName: string;
    student: any;
    deleted: boolean;
    createdBy: IUser | string;
    updatedBy: string;
    deletedBy: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    transform: any;
    urlPlus?: string;
}

// Create Schema
const ClassesSchema: Schema = new Schema({
    className: {
        type: String,
        required: false,
    },
    schoolName: {
        type: String,
        required: false,
    },
    student: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Student',
    },
    deleted: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    updatedBy: {
        type: mongoose.Types.ObjectId,
    },
    deletedBy: {
        type: mongoose.Types.ObjectId,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
    deletedAt: {
        type: Date,
    },
    urlPlus: {
        type: String,
        required: false,
    },
});
ClassesSchema.method("transform", function () {
    const obj = this.toObject();

    //Rename fields
    obj.id = obj._id;
    // delete obj._id;

    return obj;
});

export const Classes = mongoose.model<IClasses>("Classes", ClassesSchema);
