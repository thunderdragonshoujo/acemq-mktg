import { type SchemaTypeDefinition } from 'sanity'
import { customerStories } from '../schema/customer-stories'
import { blogs } from '../schema/blogs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogs, customerStories],
}
