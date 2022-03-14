import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RcmongoDataSource} from '../datasources';
import {Message, MessageRelations} from '../models';

export class MessageRepository extends DefaultCrudRepository<
  Message,
  typeof Message.prototype.id,
  MessageRelations
> {
  constructor(@inject('datasources.rcmongo') dataSource: RcmongoDataSource) {
    super(Message, dataSource);
  }
}
