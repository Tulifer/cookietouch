import ObjectEffect from "./ObjectEffect";

export default class ObjectEffectString extends ObjectEffect {

  public value: string;

  constructor(actionid = 0, value = "") {
    super(actionid);
    this.value = value;
  }
}
