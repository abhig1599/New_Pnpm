FROM node:20-alpine as base

RUN apk add --no-cache libc6-compat
RUN apk update


FROM base AS builder
WORKDIR /app

ENV APP_NAME=web

RUN npm install -g turbo

COPY . .

RUN turbo prune --scope=web --docker


FROM base as installer
WORKDIR /app
ENV APP_NAME=web

RUN npm install -g pnpm
RUN npm install -g turbo

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN turbo run build --filter=web
FROM base AS runner
WORKDIR /app
ENV APP_NAME=web


RUN npm install -g pnpm


COPY --from=installer /app .

CMD pnpm --filter "${APP_NAME}" run start
