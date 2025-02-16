import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from '../../database/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async createUser(data: Partial<IUser>): Promise<IUser> {
    const newUser = new this.userModel(data);
    return await newUser.save();
  }

  async findAll(): Promise<IUser[]> {
    return await this.userModel.find().exec();
  }

  async findById(id: string): Promise<IUser | null> {
    return await this.userModel.findById(id).exec();
  }

  async updateUser(id: string, updateData: Partial<IUser>): Promise<IUser | null> {
    return await this.userModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }

  async deleteUser(id: string): Promise<IUser | null> {
    return await this.userModel.findByIdAndDelete(id).exec();
  }
}
