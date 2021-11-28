import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from "helmet";
// import { AllExceptionsFilter } from './exceptions/all-exceptions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const httpAdapter = app.getHttpAdapter();
  // app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.enableCors();
  app.use(helmet());
  await app.listen(3000);
}
bootstrap();
