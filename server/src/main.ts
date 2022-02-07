import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function start() {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule, { cors: true });

    const config = await new DocumentBuilder()
      .setTitle('shop-app')
      .setDescription('REST API Documentation')
      .setVersion('1.0.0')
      .addTag('DVIJ_IT')
      .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(PORT, () =>
      console.log(`Server started on port = ${PORT}`),
    );
  } catch (e) {
    console.log(e);
  }
}
start();
