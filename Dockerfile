FROM node:20-slim as builder


ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app


ADD ./package.json /app/package.json
ADD ./pnpm-lock.yaml /app/pnpm-lock.yaml
RUN pnpm install --frozen-lockfile

ADD ./ /app/

RUN pnpm build && pnpm prune --prod

FROM node:20-slim

WORKDIR /app

COPY --from=builder /app/node_modules/ ./node_modules/
COPY --from=builder /app/dist/ ./

EXPOSE 3000

CMD [ "node", "main" ]