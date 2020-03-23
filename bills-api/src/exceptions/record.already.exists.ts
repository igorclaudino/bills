import { HttpException, HttpStatus } from '@nestjs/common';

export class RecordAlreadyExistsException extends HttpException {
  constructor(field: string) {
    super(`This record (${field}) already exists`, HttpStatus.CONFLICT);
  }
}
