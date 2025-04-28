# Install dependencies only when needed
FROM node:20-alpine3.18 AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile || yarn install --frozen-lockfile

# If using npm with a `package-lock.json`, comment out above and use below instead
# COPY package.json package-lock.json ./
# RUN npm ci

# Rebuild the source code only when needed
FROM node:20-alpine3.18 AS builder
ARG NEXT_ENVIRONMENT
ENV NODE_ENV $NEXT_ENVIRONMENT
ENV NEXT_PUBLIC_ENV $NEXT_ENVIRONMENT
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Copy đúng file env theo biến môi trường
COPY .env.production .env
ENV NODE_OPTIONS="--max-old-space-size=2048"
RUN yarn build

# If using npm, comment out above and use below instead
# RUN npm run build

# Production image, copy only necessary files
FROM node:20-alpine3.18 AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Copy standalone Next.js build
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
