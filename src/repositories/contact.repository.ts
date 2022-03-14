import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RcmongoDataSource} from '../datasources';
import {Contact, ContactRelations} from '../models';

export class ContactRepository extends DefaultCrudRepository<
  Contact,
  typeof Contact.prototype.id,
  ContactRelations
> {
  constructor(
    @inject('datasources.rcmongo') dataSource: RcmongoDataSource,
  ) {
    super(Contact, dataSource);
  }
}
