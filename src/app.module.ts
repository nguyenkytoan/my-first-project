import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nguyenkytoan:Toan%40JoveAI@cluster0.0i6wvmz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      dbName: 'sample_mflix',
    }),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule { }
