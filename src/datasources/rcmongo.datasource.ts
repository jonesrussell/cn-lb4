import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'rcmongo',
  connector: 'mongodb',
  url: 'mongodb://mongodb.jonesrussell42.xyz:27017/portfolio-app',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class RcmongoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'rcmongo';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.rcmongo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
