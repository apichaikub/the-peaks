# Install dependencies only when needed
FROM node:alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:alpine AS builder
WORKDIR /app

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL $NEXT_PUBLIC_API_URL

COPY . ./
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build
# Workaround part 1: Create empty files and folders to replicate the structure of the pages in the app
RUN find ./pages \( -type d -exec mkdir -p "/app/translateSrc/{}" \; -o -type f -exec touch "/app/translateSrc/{}" \; \)
# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/i18n.js ./i18n.js
# Workaround part 2: Copy the empty files and folders to the run environment so next-translate can figure out how the pages are laid out.
COPY --from=builder /app/translateSrc .

USER nextjs

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]
