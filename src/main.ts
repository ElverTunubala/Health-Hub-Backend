import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,//ignora un atributo de mas del dto
    forbidNonWhitelisted: true, // envia un alerta si en el request se envia un atributo de mas
  })) // para que las validaciones del dto quede de manera global

  // Configurar opciones de CORS para múltiples orígenes
  app.enableCors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:9000'], // Permitir solicitudes desde estos orígenes
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });
  await app.listen(3000);
}
bootstrap();
