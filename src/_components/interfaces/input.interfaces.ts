interface Message {
    id: string
    content: string
    isUser: boolean
    timestamp: Date
    attachments?: Attachment[]
  }
  
  interface Attachment {
    file: File
    preview?: string
    type: 'image' | 'video' | 'audio' | 'document'
  }

  export type {Message, Attachment}