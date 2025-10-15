import { CoinbasePaySvg } from 'src/svg/CoinbasePaySvg';
import type { MockCheckoutButtonReact } from 'src/types';

export function MockCheckoutButton({ onClick }: MockCheckoutButtonReact) {
  return (
    <div className="w-64">
      <div className="default-dark flex w-full flex-col gap-2">
        <button
          type="button"
          onClick={onClick}
          className="active:ock-bg-secondary-active ock-border-radius ock-font-family flex w-full cursor-pointer items-center justify-center bg-[#0052FF] px-4 py-3 font-semibold leading-normal hover:bg-[#0045D8]"
        >
          <div className="flex items-center justify-center whitespace-nowrap">
            <div className="mr-2 flex h-5 w-5 shrink-0 items-center justify-center">
              <CoinbasePaySvg />
            </div>
          </div>
          <span className="ock-font-family font-semibold text-gray-50 leading-normal">
            Pay with Crypto
          </span>
        </button>
      </div>
    </div>
  );
}
