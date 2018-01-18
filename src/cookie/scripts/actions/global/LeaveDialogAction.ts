import Account from "@account";
import { sleep } from "@utils/Time";
import ScriptAction, { ScriptActionResults } from "../ScriptAction";

export default class LeaveDialogAction extends ScriptAction {
  public async process(account: Account): Promise<ScriptActionResults> {
    if (account.isInDialog) {
      account.network.sendMessageFree("LeaveDialogRequestMessage");
      return ScriptAction.processingResult();
    }
    return ScriptAction.doneResult();
  }
}