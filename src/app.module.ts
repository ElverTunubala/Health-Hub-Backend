import { PatientRoutineModule } from './patients_routines/patientroutine.module';
import { Routine_tipsModule } from './routine_tips/routine_tips.module';
import { ResponsesModule } from './responses/responses.module';
import { RoutinesModule } from './routines/routines.module';
import { Routine_typesModule } from './routine_types/routine_types.module';
import { CommentsModule } from './comments/comments.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PatientRoutineModule,
    Routine_tipsModule,
    ResponsesModule,
    RoutinesModule,
    Routine_typesModule,
    CommentsModule,
    AuthModule,
    RolesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Rlwl2023.',
      database: 'health_database',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
