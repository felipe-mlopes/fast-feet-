import { ClockIcon } from "../icons/clock-icon";
import { MoneyBagIcon } from "../icons/money-bag-icon";
import { PhoneIcon } from "../icons/phone-icon";

export function Solutions() {
  return (
    <section
      id="solutions"
      className="flex flex-col gap-8 px-8 pt-20 pb-8 border-b-[1px] md:border-b-0 border-gray-light"
    >
      <div>
        <h2 className="text-3xl text-center text-gray-light">
          Seja um <span className="text-orange-light">parceiro</span> da Fast
          Feet
        </h2>
        <p className="text-lg text-center text-gray-light">
          Tenha a liberdade de entregar quando quiser e aumentar seus ganhos
        </p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center text-black">
        <div className="flex flex-col gap-3 p-4 max-w-56 rounded bg-bluish-gray hover:bg-orange-light">
          <MoneyBagIcon />
          <strong className="">Complemente a sua renda</strong>
          <p>Escolha suas entregas e receba os repasses semanalmente.</p>
        </div>

        <div className="flex flex-col gap-3 p-4 max-w-56 rounded bg-bluish-gray hover:bg-orange-light">
          <ClockIcon />
          <strong className="">Horários flexíveis</strong>
          <p>
            Aceite apenas os pedidos que quiser, sem penalidades. Faça seu
            horário!
          </p>
        </div>

        <div className="flex flex-col gap-3 p-4 max-w-56 rounded bg-bluish-gray hover:bg-orange-light">
          <PhoneIcon />
          <strong className="">Ativação online</strong>
          <p>
            Torne-se um motorista parceiro participando do processo de ativação
            de onde você estiver.
          </p>
        </div>
      </div>
    </section>
  );
}
