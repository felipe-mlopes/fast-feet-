import { registerRecipient } from "@/data/actions/recipients";

import { Button } from "@/components/global/button";
import { Header } from "@/components/global/header";
import { FormRecipient } from "@/components/recipient/form-recipient";

export default function Recipient() {
  return (
    <div className="p-6 min-h-screen space-y-16">
      <Header />
      <main className="min-h-screen">
        <FormRecipient action={registerRecipient}>
          <Button content="Registar o destinatário" type="submit" />
        </FormRecipient>
      </main>
    </div>
  );
}
