import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';   // or the correct adapter

// Get your connection string from env
const connectionString = process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/mydb';

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
  // You can add other options here if needed, e.g. log: ['query']
});

export default prisma;