export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'approved',
        type: 'boolean',
        description: "Comments wont show on the site without approval"
      },
      {
        name: "email",
        type: "string",
      },
      {
        name: "comment",
        type: "text",
      },
      {
        name: "post",
        type: "reference",
        to: [{ type: "post" }]
      }
    ]
  }
  