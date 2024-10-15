import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
// export const structure: StructureResolver = (S) =>
//   S.list()
//     .title('Content')
//     .items(S.documentTypeListItems())

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton for mq-services Page
      S.listItem()
        .title('MQ Services Page')
        .schemaType('mq-services')
        .child(
          S.document()
            .schemaType('mq-services')
            .documentId('mq-services') // Ensure a single 'mq-services' document
        ),
      // Singleton for support Page
      S.listItem()
        .title('Support Page')
        .schemaType('support')
        .child(
          S.document()
            .schemaType('support')
            .documentId('support') // Ensure a single 'support' document
        ),
      // Singleton for rabbitmq Page
      S.listItem()
        .title('RabbitMQ Page')
        .schemaType('rabbitmq')
        .child(
          S.document()
            .schemaType('rabbitmq')
            .documentId('rabbitmq') // Ensure a single 'rabbitmq' document
        ),
        S.listItem()
        .title('Home Page')
        .schemaType('home')
        .child(
          S.document()
            .schemaType('home')
            .documentId('home') // Ensure a single 'home' document
        ),
        S.listItem()
        .title('Fips Page')
        .schemaType('fips')
        .child(
          S.document()
            .schemaType('fips')
            .documentId('fips') // Ensure a single 'fips' document
        ),
        S.listItem()
        .title('Contact Page')
        .schemaType('contact')
        .child(
          S.document()
            .schemaType('contact')
            .documentId('contact') // Ensure a single 'contact' document
        ),
      // Include other documents (exclude these to prevent listing them twice)
      ...S.documentTypeListItems().filter(item => 
        !["home", 'rabbitmq', 'support', 'mq-services', "fips", "contact"].includes(item.getId())
      ),
    ]);