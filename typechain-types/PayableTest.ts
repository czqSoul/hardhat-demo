/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface PayableTestInterface extends utils.Interface {
  functions: {
    "getBalance()": FunctionFragment;
    "getRanddomBalance(address)": FunctionFragment;
    "pay()": FunctionFragment;
    "transfer()": FunctionFragment;
    "transfer2(address)": FunctionFragment;
    "transfer3()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getBalance"
      | "getRanddomBalance"
      | "pay"
      | "transfer"
      | "transfer2"
      | "transfer3"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRanddomBalance",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "pay", values?: undefined): string;
  encodeFunctionData(functionFragment: "transfer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transfer2",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "transfer3", values?: undefined): string;

  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRanddomBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer3", data: BytesLike): Result;

  events: {};
}

export interface PayableTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PayableTestInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRanddomBalance(
      _a: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pay(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transfer(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transfer2(
      _account: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transfer3(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getBalance(overrides?: CallOverrides): Promise<BigNumber>;

  getRanddomBalance(
    _a: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pay(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transfer(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transfer2(
    _account: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transfer3(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getRanddomBalance(
      _a: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pay(overrides?: CallOverrides): Promise<void>;

    transfer(overrides?: CallOverrides): Promise<void>;

    transfer2(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transfer3(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getRanddomBalance(
      _a: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pay(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transfer(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transfer2(
      _account: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transfer3(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRanddomBalance(
      _a: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pay(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transfer(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transfer2(
      _account: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transfer3(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}