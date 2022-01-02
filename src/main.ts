
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import * as helmet from 'helmet';
import { CustomValidationPipe } from '@utils/pipes/validation';


import { AppModule } from './app.module';
import { ContextInterceptor } from '@utils/interceptors/context';

const PORT = process.env.PORT || 9001;


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true });


  app.use(helmet());
  app.useGlobalPipes(new CustomValidationPipe());
  app.useGlobalInterceptors(new ContextInterceptor());

  app.enableCors();
  useContainer(app.select(AppModule), { fallback: true, fallbackOnErrors: true });

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Colendi Api Documentation')
    .setDescription('Documentation of the API')
    .setVersion('0.1')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('api-docs', app, swaggerDocument);

  await app.listen(PORT);
}
bootstrap();
