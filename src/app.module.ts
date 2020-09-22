import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PDFModule } from 'nestjs-pdf';
// import { PdfConfigService } from './pdf-config/pdf-config.service';
// import { PdfGeneratorController } from './pdf-generator/pdf-generator.controller';
import { PdfGeneratorModule } from './pdf-generator/pdf-generator.module';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // PDFModule.registerAsync({
    //   useClass: PdfConfigService
    // }),
    PdfGeneratorModule,
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: 'db',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
