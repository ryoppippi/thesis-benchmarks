## Build
```sh
pnpm i
pnpm run build
```

For Bundle size comparison:
```sh
pnpm run build:size
```
This makes the dummy data to be an empty object.

## Bundle Size Result

You can also see the result from GitHub Actions.

### Simpler Schema

[Schemas](./src/simple-schemas/)

| Library | Size (KiB) | Gzip Size (KiB) |
|---------|------------|-----------------|
| arktype | 45.24 (46,327 bytes) | 15.01 (15,368 bytes) |
| typia   | 2.53 (2,589 bytes)   | 1.11 (1,138 bytes)   |
| valibot | 4.01 (4,108 bytes)   | 1.43 (1,463 bytes)   |
| zod     | 52.5 (53,755 bytes)  | 12.44 (12,743 bytes) |

### Large Schema

[Schemas](./src/schemas/)

| Library | Size (KiB) | Gzip Size (KiB) |
|---------|------------|-----------------|
| arktype | 45.85 (46,954 bytes) | 15.22 (15,585 bytes) |
| typia   | 10.8 (11,060 bytes)  | 2.08 (2,132 bytes)   |
| valibot | 6.05 (6,198 bytes)   | 1.9 (1,943 bytes)    |
| zod     | 53.22 (54,500 bytes) | 12.62 (12,927 bytes) |
