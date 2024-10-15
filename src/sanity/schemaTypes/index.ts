import { type SchemaTypeDefinition } from 'sanity'
import { customerStories } from '../schema/customer-stories'
import home from '../schema/home'
import { blogs } from '../schema/blogs'
import { mqservices } from '../schema/mq-services'
import support from '../schema/support'
import rabbitmq from '../schema/rabbitmq'
import fips from '../schema/fips'
import contact from '../schema/contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogs, customerStories, home, mqservices, support, rabbitmq, fips, contact],
}
