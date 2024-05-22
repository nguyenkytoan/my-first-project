import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ unique: true, required: false })
    name: string;

    @Prop({ required: false })
    email?: string;

    @Prop({ required: true })
    password: string
}

export const UserSchema = SchemaFactory.createForClass(User);