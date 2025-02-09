import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  private messages: { id: number; content: string }[] = []; // Додаємо явний тип

  getMessages() {
    return this.messages;
  }

  getMessageById(id: number) {
    return this.messages.find(msg => msg.id === id);
  }

  createMessage(content: string) {
    const newMessage = { id: Date.now(), content };
    this.messages.push(newMessage);
    return newMessage;
  }

  updateMessage(id: number, content: string) {
    const message = this.messages.find(msg => msg.id === id);
    if (message) {
      message.content = content;
      return message;
    }
    return null;
  }

  deleteMessage(id: number) {
    this.messages = this.messages.filter(msg => msg.id !== id);
    return { deleted: true };
  }
}
