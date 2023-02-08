import { Injectable } from "@angular/core";
import { IconPrefix, prefix } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class UniqueIdService {

  private numberOfGeneratedIds = 0;

  public generateUniqueIdWithPrefix(prefix: IconPrefix): string {
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
    return uuidv4();
  }
}

