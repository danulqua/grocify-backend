import { ApiProperty } from '@nestjs/swagger';

export class ImageUploadDTO {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}
