import { PhysiciansModule } from './physicians/physicians.module';
import { Routine_typesModule } from './routine_types/routine_types.module';
import { Patients_routinesModule } from './patients_routines/patients_routines.module';
import { CommentsModule } from './comments/comments.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';

import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PhysiciansModule,
    Routine_typesModule,
    Patients_routinesModule,
    CommentsModule,
    AuthModule,
    RolesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'riwi',
      database: 'health_database',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule { }
