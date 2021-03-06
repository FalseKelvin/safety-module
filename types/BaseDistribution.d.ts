/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction} from 'ethers';
import {Contract, ContractTransaction, Overrides, CallOverrides} from '@ethersproject/contracts';
import {BytesLike} from '@ethersproject/bytes';
import {Listener, Provider} from '@ethersproject/providers';
import {FunctionFragment, EventFragment, Result} from '@ethersproject/abi';

interface BaseDistributionInterface extends ethers.utils.Interface {
  functions: {
    'EMISSION_MANAGER()': FunctionFragment;
    'REVISION()': FunctionFragment;
    '_assets(address)': FunctionFragment;
    'claimRewards(address,tuple[])': FunctionFragment;
    'configureAssets(tuple[])': FunctionFragment;
    'getUnclaimedRewards(address,tuple[])': FunctionFragment;
    'getUserAssetData(address,address)': FunctionFragment;
    'initialize(address)': FunctionFragment;
    'userPositionUpdate(address,address,uint256,uint256)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'EMISSION_MANAGER', values?: void): string;
  encodeFunctionData(functionFragment: 'REVISION', values?: void): string;
  encodeFunctionData(functionFragment: '_assets', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'claimRewards',
    values: [
      string,
      {
        underlyingAsset: string;
        stakedByUser: BigNumberish;
        totalStaked: BigNumberish;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'configureAssets',
    values: [
      {
        emissionPerSecond: BigNumberish;
        totalStaked: BigNumberish;
        underlyingAsset: string;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'getUnclaimedRewards',
    values: [
      string,
      {
        underlyingAsset: string;
        stakedByUser: BigNumberish;
        totalStaked: BigNumberish;
      }[]
    ]
  ): string;
  encodeFunctionData(functionFragment: 'getUserAssetData', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'initialize', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'userPositionUpdate',
    values: [string, string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: 'EMISSION_MANAGER', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'REVISION', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: '_assets', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'configureAssets', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUnclaimedRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUserAssetData', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userPositionUpdate', data: BytesLike): Result;

  events: {
    'AssetConfigUpdated(address,uint256)': EventFragment;
    'AssetIndexUpdated(address,uint256)': EventFragment;
    'UserIndexUpdated(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AssetConfigUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AssetIndexUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UserIndexUpdated'): EventFragment;
}

export class BaseDistribution extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BaseDistributionInterface;

  functions: {
    EMISSION_MANAGER(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    REVISION(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    _assets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      emissionPerSecond: BigNumber;
      lastUpdateTimestamp: BigNumber;
      index: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    claimRewards(
      user: string,
      stakes: {
        underlyingAsset: string;
        stakedByUser: BigNumberish;
        totalStaked: BigNumberish;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    configureAssets(
      assetsNewConfig: {
        emissionPerSecond: BigNumberish;
        totalStaked: BigNumberish;
        underlyingAsset: string;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getUnclaimedRewards(
      user: string,
      stakes: {
        underlyingAsset: string;
        stakedByUser: BigNumberish;
        totalStaked: BigNumberish;
      }[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getUserAssetData(
      user: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    initialize(emissionManager: string, overrides?: Overrides): Promise<ContractTransaction>;

    userPositionUpdate(
      underlyingAsset: string,
      user: string,
      stakedByUser: BigNumberish,
      totalStaked: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  EMISSION_MANAGER(overrides?: CallOverrides): Promise<string>;

  REVISION(overrides?: CallOverrides): Promise<BigNumber>;

  _assets(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    emissionPerSecond: BigNumber;
    lastUpdateTimestamp: BigNumber;
    index: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
  }>;

  claimRewards(
    user: string,
    stakes: {
      underlyingAsset: string;
      stakedByUser: BigNumberish;
      totalStaked: BigNumberish;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  configureAssets(
    assetsNewConfig: {
      emissionPerSecond: BigNumberish;
      totalStaked: BigNumberish;
      underlyingAsset: string;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getUnclaimedRewards(
    user: string,
    stakes: {
      underlyingAsset: string;
      stakedByUser: BigNumberish;
      totalStaked: BigNumberish;
    }[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserAssetData(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;

  initialize(emissionManager: string, overrides?: Overrides): Promise<ContractTransaction>;

  userPositionUpdate(
    underlyingAsset: string,
    user: string,
    stakedByUser: BigNumberish,
    totalStaked: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  staticCall: {
    EMISSION_MANAGER(overrides?: CallOverrides): Promise<string>;

    REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    _assets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      emissionPerSecond: BigNumber;
      lastUpdateTimestamp: BigNumber;
      index: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    claimRewards(
      user: string,
      stakes: {
        underlyingAsset: string;
        stakedByUser: BigNumberish;
        totalStaked: BigNumberish;
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    configureAssets(
      assetsNewConfig: {
        emissionPerSecond: BigNumberish;
        totalStaked: BigNumberish;
        underlyingAsset: string;
      }[],
      overrides?: Overrides
    ): Promise<void>;

    getUnclaimedRewards(
      user: string,
      stakes: {
        underlyingAsset: string;
        stakedByUser: BigNumberish;
        totalStaked: BigNumberish;
      }[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserAssetData(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(emissionManager: string, overrides?: Overrides): Promise<void>;

    userPositionUpdate(
      underlyingAsset: string,
      user: string,
      stakedByUser: BigNumberish,
      totalStaked: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  filters: {
    AssetConfigUpdated(asset: null, emission: null): EventFilter;

    AssetIndexUpdated(asset: null, index: null): EventFilter;

    UserIndexUpdated(user: null, asset: null, index: null): EventFilter;
  };

  estimateGas: {
    EMISSION_MANAGER(): Promise<BigNumber>;
    REVISION(): Promise<BigNumber>;
    _assets(arg0: string): Promise<BigNumber>;
    claimRewards(
      user: string,
      stakes: {
        underlyingAsset: string;
        stakedByUser: BigNumberish;
        totalStaked: BigNumberish;
      }[]
    ): Promise<BigNumber>;
    configureAssets(
      assetsNewConfig: {
        emissionPerSecond: BigNumberish;
        totalStaked: BigNumberish;
        underlyingAsset: string;
      }[]
    ): Promise<BigNumber>;
    getUnclaimedRewards(
      user: string,
      stakes: {
        underlyingAsset: string;
        stakedByUser: BigNumberish;
        totalStaked: BigNumberish;
      }[]
    ): Promise<BigNumber>;
    getUserAssetData(user: string, asset: string): Promise<BigNumber>;
    initialize(emissionManager: string): Promise<BigNumber>;
    userPositionUpdate(
      underlyingAsset: string,
      user: string,
      stakedByUser: BigNumberish,
      totalStaked: BigNumberish
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    EMISSION_MANAGER(): Promise<PopulatedTransaction>;
    REVISION(): Promise<PopulatedTransaction>;
    _assets(arg0: string): Promise<PopulatedTransaction>;
    claimRewards(
      user: string,
      stakes: {
        underlyingAsset: string;
        stakedByUser: BigNumberish;
        totalStaked: BigNumberish;
      }[]
    ): Promise<PopulatedTransaction>;
    configureAssets(
      assetsNewConfig: {
        emissionPerSecond: BigNumberish;
        totalStaked: BigNumberish;
        underlyingAsset: string;
      }[]
    ): Promise<PopulatedTransaction>;
    getUnclaimedRewards(
      user: string,
      stakes: {
        underlyingAsset: string;
        stakedByUser: BigNumberish;
        totalStaked: BigNumberish;
      }[]
    ): Promise<PopulatedTransaction>;
    getUserAssetData(user: string, asset: string): Promise<PopulatedTransaction>;
    initialize(emissionManager: string): Promise<PopulatedTransaction>;
    userPositionUpdate(
      underlyingAsset: string,
      user: string,
      stakedByUser: BigNumberish,
      totalStaked: BigNumberish
    ): Promise<PopulatedTransaction>;
  };
}
