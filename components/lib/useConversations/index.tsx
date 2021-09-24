import { ProfilePhoto } from "../useUser";
import { Message } from "../useMessages";

export type ConversationParticipant = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  profilePhoto: ProfilePhoto;
};

export type ConversationParticipantsMap = {
  [id: number]: ConversationParticipant;
};

export type Conversation = {
  id: number;
  description: string;
  participants: Array<ConversationParticipant>;
  lastMessage: Message;
};
