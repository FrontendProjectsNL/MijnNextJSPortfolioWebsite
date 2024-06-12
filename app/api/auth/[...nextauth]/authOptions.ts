import { AuthOptions, NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';

import type { Adapter } from 'next-auth/adapters';
import prisma from '@/prisma/prisma';

export const authOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [],
} satisfies NextAuthOptions;
