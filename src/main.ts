import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configurar opciones de CORS para múltiples orígenes
  app.enableCors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:9000'], // Permitir solicitudes desde estos orígenes
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });
  await app.listen(3000);
}
bootstrap();
