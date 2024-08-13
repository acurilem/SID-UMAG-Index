FROM node:18.18-alpine3.18 as installer

WORKDIR /app

COPY package*.json ./

RUN npm install
# STAGE 1 -> Nuxt build
FROM node:18.18-alpine3.18 as builder

WORKDIR /app

COPY --from=installer /app/node_modules ./node_modules

COPY . .

ARG NUXT_SESSION_SESSION_STORAGE_OPTIONS_OPTIONS_URL=redis://localhost:6379

ENV IS_BUILDING=building

RUN npx nuxi build

# STAGE 2 -> Nuxt entrypoint
FROM node:18.18-alpine3.18

WORKDIR /app

COPY --from=builder /app/.output ./.output

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

ENTRYPOINT [ "node", ".output/server/index.mjs" ]