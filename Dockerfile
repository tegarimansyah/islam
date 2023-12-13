FROM node:18-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app
COPY ./src /app/src
COPY ./.vitepress /app/.vitepress
COPY ./package.json pnpm-lock.yaml /app/

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM caddy:2-alpine
COPY --from=base /app/.vitepress/dist /usr/share/caddy