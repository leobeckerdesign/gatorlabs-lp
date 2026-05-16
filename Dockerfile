# syntax=docker/dockerfile:1.7

FROM node:22-alpine AS builder
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate
WORKDIR /app
COPY package.json pnpm-workspace.yaml ./
RUN pnpm install --no-frozen-lockfile
COPY . .
RUN pnpm build

FROM nginx:1.27-alpine AS runtime
RUN apk add --no-cache wget
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=15s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -q -O - http://127.0.0.1/healthz || exit 1
CMD ["nginx", "-g", "daemon off;"]
