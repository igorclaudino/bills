import { HttpException, HttpStatus } from '@nestjs/common';

export class RecordNotFoundException extends HttpException {
  constructor(field: string) {
    super(`This record (${field}) wasn't found`, HttpStatus.NOT_FOUND);
  }
}
