// db.provider.ts
import { Injectable } from '@nestjs/common';
import mongoose, { Model, Connection } from 'mongoose';
import { IUser, UserSchema } from '../database/schemas/user.schema';
import { IAd, AdSchema } from '../database/schemas/ad.schema';

@Injectable()
export class MyDbProvider {
  private connection!: Connection;
  private userModel!: Model<IUser>;
  private adModel!: Model<IAd>;

  public constructor() {
    this.initDbConnection();
  }

  private async initDbConnection() {
    try {
      this.connection = await mongoose.createConnection(process.env.DATABASE_URL!, {
        dbName: 'pekh',
      });

      this.userModel = this.connection.model<IUser>('User', UserSchema);
      this.adModel = this.connection.model<IAd>('Ad', AdSchema);

      console.log('Успішне підключення до MongoDB (База: pekh)');
    } catch (error) {
      console.error('Помилка підключення до MongoDB:', error);
    }
  }

  public users(): Model<IUser> {
    return this.userModel;
  }

  public ads(): Model<IAd> {
    return this.adModel;
  }
}
