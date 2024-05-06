import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { z } from 'zod';

export const postSchema = sqliteTable('posts', {
  id: integer('id').primaryKey(),
  desc: text('desc').notNull(),
  name: text('name').notNull(),
  image_url: text('image_url').notNull(),
});

export const PostValidation = z.object({
  name: z.string().min(1),
  desc: z.string().min(1),
});