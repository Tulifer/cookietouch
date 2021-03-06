import Message from "./Message";

export default class EnabledChannelsMessage extends Message {
  public channels: number[];
  public disallowed: number[];

  constructor(channels: number[], disallowed: number[]) {
    super();
    this.channels = channels;
    this.disallowed = disallowed;

  }
}
