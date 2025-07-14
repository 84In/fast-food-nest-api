import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = new ConfigService();
  const logger = new Logger('Bootstrap');
  logger.log(
    `Server started on port: ${configService.get<number>('PORT') || 3000}`,
  );
  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);
  // await app.listen(process.env.PORT ?? 3000);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
