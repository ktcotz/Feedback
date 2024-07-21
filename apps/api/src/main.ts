import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { config } from './swagger/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/docs', app, document);
  await app.listen(configService.get<number>('API_PORT_SERVER') || 3000);
}
bootstrap();
