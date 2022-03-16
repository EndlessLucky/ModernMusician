import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cors = require('cors');

async function bootstrap() {
  const PORT = process.env.PORT || 3001;
  const app = await NestFactory.create(AppModule);
  app.use(cors({
    origin: '*'
  }));
  // app.enableCors();
  await app.listen(PORT);
}
bootstrap();
