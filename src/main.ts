import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from "helmet";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Sound example')
    .setDescription('Sounds API')
    .setVersion('1.0')
    .addTag('sounds')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  app.use(helmet());
  await app.listen(3000);
}
bootstrap();
