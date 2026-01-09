// src/lib/db/adapter.ts

import {config} from 'dotenv';
import {PrismaClient} from '@prisma/client';
import {PrismaNeon} from '@prisma/adapter-neon';
import {neonConfig} from '@neondatabase/serverless';
import ws from 'ws';

config();

neonConfig.webSocketConstructor = ws;

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaNeon({connectionString});
const prisma = new PrismaClient({adapter});

export default prisma;
