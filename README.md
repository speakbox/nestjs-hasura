<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">NestJS Hasura</h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

## Installation

```bash
npm install @speakbox/nestjs-hasura
```

## Usage

Import the module and the service in your NestJS application:

```typescript
import { Module } from '@nestjs/common';
import { HasuraModule, HasuraService } from '@speakbox/nestjs-hasura';

@Module({
  imports: [HasuraModule],
  providers: [HasuraService],
})
export class AppModule {}
```

### Using the service

```typescript
import { Inject, Injectable } from "@nestjs/common";
import { HasuraService } from '@speakbox/nestjs-hasura';

@Injectable()
export class ExampleService {
  constructor(
    @Inject(HasuraService) private readonly hasura: HasuraService,
  ) {}
  
  exampleRequest() {
    return this.hasura.request(
      gql`query SomeQuery($id: bigint!) {
        some_resource_by_pk(id: $id) {
          id
          name
        }
      }`,
      { id: 1}
    );
  }
}
```

For more information on how to use the service, please refer to the [NestJS Documentation](https://docs.nestjs.com/providers).

### Environment variables

This package relies on environment variables to configure Hasura:

```bash
# Hasura API endpoint
HASURA_GRAPHQL_ENDPOINT=https://hasura.example.com/v1/graphql

# Hasura API Admin Secret
HASURA_GRAPHQL_ADMIN_SECRET=my-secret
```

## Change Log

See [Changelog](CHANGELOG.md) for more information.

## Contributing

Contributions welcome! See [Contributing](CONTRIBUTING.md).

## Author

**Valentin Prugnaud [@valentinprgnd](https://twitter.com/valentinprgnd)**

## License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
