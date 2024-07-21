import { DocumentBuilder } from '@nestjs/swagger';

export const config = new DocumentBuilder()
  .setTitle('Feedback API')
  .setDescription(
    'API for feedback application. Includes modern solutions, for learning purposes. Created by ktcotz.',
  )
  .setVersion('v1.0')
  .addTag('Feedback')
  .build();
