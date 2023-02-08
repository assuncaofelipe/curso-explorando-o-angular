import { UniqueIdService } from './unique-id.services';

describe('UniqueIdService', () => {
  it('#generateUniqueIdWithPrefix should generate id when called with prefix', () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix();
    expect(id).toContain('app-');
  });



});


