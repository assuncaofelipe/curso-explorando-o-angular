import { Injectable } from "@angular/core";
import { prefix } from "@fortawesome/free-solid-svg-icons";
import { uuidv } from "uuid";

@Injectable()
export class UniqueIdService {

  private numberOfGeneratedIds = 0;

  public generateUniqueIdWithPrefix(): string {
    if (!prefix) {
      throw Error('Prefix can not be empty');
    }
    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  private generateUniqueId(): string {
    return uuidv();
  }
}
