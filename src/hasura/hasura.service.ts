import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLClient } from 'graphql-request';

@Injectable()
export class HasuraService extends GraphQLClient {
  constructor(@Inject(ConfigService) private readonly config: ConfigService) {
    super(config.get('HASURA_GRAPHQL_ENDPOINT'), {
      headers: {
        'x-hasura-admin-secret': config.get('HASURA_GRAPHQL_ADMIN_SECRET'),
      },
    });
  }
}
