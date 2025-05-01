/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AccPnl = {
  __typename?: 'AccPnl';
  date: Scalars['DateTime']['output'];
  in: Scalars['Float']['output'];
  inOut: Scalars['Float']['output'];
  out: Scalars['Float']['output'];
  pnl: Scalars['Float']['output'];
  positionCount: Scalars['Int']['output'];
  taskCount: Scalars['Int']['output'];
  traderCount: Scalars['Int']['output'];
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String']['output'];
};

export type Action = {
  __typename?: 'Action';
  args: Scalars['String']['output'];
  blockNumber: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  orderInBlock: Scalars['Int']['output'];
  positionId: Scalars['Int']['output'];
};

export type AddUserInput = {
  address: Scalars['String']['input'];
};

export type BotBackwardDetails = {
  __typename?: 'BotBackwardDetails';
  endedAt?: Maybe<Scalars['DateTime']['output']>;
  follower: Follower;
  followerAddress: Scalars['String']['output'];
  followerContract: Contract;
  followerContractId: Scalars['Int']['output'];
  followerEndedBlock?: Maybe<Scalars['Int']['output']>;
  followerStartedBlock?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  leaderAddress: Scalars['String']['output'];
  leaderCollateralBaseline: Scalars['Int']['output'];
  leaderContract: Contract;
  leaderContractId: Scalars['Int']['output'];
  leaderEndedBlock?: Maybe<Scalars['Int']['output']>;
  leaderStartedBlock?: Maybe<Scalars['Int']['output']>;
  plan: Plan;
  planId: Scalars['Int']['output'];
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  status: BotStatus;
  strategy: Strategy;
  strategyId: Scalars['Int']['output'];
};

export type BotConnection = {
  __typename?: 'BotConnection';
  edges: Array<BotEdge>;
  pageInfo: BotPageInfo;
};

export type BotCount = {
  __typename?: 'BotCount';
  botCount: Scalars['Int']['output'];
  date: Scalars['DateTime']['output'];
};

export type BotDetails = {
  __typename?: 'BotDetails';
  endedAt?: Maybe<Scalars['DateTime']['output']>;
  follower: Follower;
  followerAddress: Scalars['String']['output'];
  followerContract: Contract;
  followerContractId: Scalars['Int']['output'];
  followerEndedBlock?: Maybe<Scalars['Int']['output']>;
  followerStartedBlock?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  leaderAddress: Scalars['String']['output'];
  leaderCollateralBaseline: Scalars['Int']['output'];
  leaderContract: Contract;
  leaderContractId: Scalars['Int']['output'];
  leaderEndedBlock?: Maybe<Scalars['Int']['output']>;
  leaderStartedBlock?: Maybe<Scalars['Int']['output']>;
  planId: Scalars['Int']['output'];
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  status: BotStatus;
  strategy: Strategy;
  strategyId: Scalars['Int']['output'];
};

export type BotEdge = {
  __typename?: 'BotEdge';
  cursor: Scalars['Int']['output'];
  node: BotForwardDetails;
};

export type BotForwardDetails = {
  __typename?: 'BotForwardDetails';
  endedAt?: Maybe<Scalars['DateTime']['output']>;
  follower: Follower;
  followerAddress: Scalars['String']['output'];
  followerContract: Contract;
  followerContractId: Scalars['Int']['output'];
  followerEndedBlock?: Maybe<Scalars['Int']['output']>;
  followerStartedBlock?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  leaderAddress: Scalars['String']['output'];
  leaderCollateralBaseline: Scalars['Int']['output'];
  leaderContract: Contract;
  leaderContractId: Scalars['Int']['output'];
  leaderEndedBlock?: Maybe<Scalars['Int']['output']>;
  leaderStartedBlock?: Maybe<Scalars['Int']['output']>;
  missions: Array<MissionForwardDetails>;
  planId: Scalars['Int']['output'];
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  status: BotStatus;
  strategy: Strategy;
  strategyId: Scalars['Int']['output'];
};

export type BotPageInfo = {
  __typename?: 'BotPageInfo';
  endCursor?: Maybe<Scalars['Int']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
};

export enum BotStatus {
  Created = 'Created',
  Dead = 'Dead',
  Live = 'Live',
  Stop = 'Stop'
}

export type CancelOrderAfterTimeoutInput = {
  address: Scalars['String']['input'];
  contractId: Scalars['Int']['input'];
  index: Scalars['Int']['input'];
};

export type ChangeUserTagInput = {
  address: Scalars['String']['input'];
  tag: Scalars['String']['input'];
};

export type CloseTradeInput = {
  address: Scalars['String']['input'];
  contractId: Scalars['Int']['input'];
  index: Scalars['Int']['input'];
  pairIndex: Scalars['Int']['input'];
};

export type Contract = {
  __typename?: 'Contract';
  address: Scalars['String']['output'];
  backendUrl?: Maybe<Scalars['String']['output']>;
  chainId: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isTestnet: Scalars['Boolean']['output'];
  status: ContractStatus;
};

export type ContractExecutionResult = {
  __typename?: 'ContractExecutionResult';
  address: Scalars['String']['output'];
  contractId: Scalars['Int']['output'];
  index: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export enum ContractStatus {
  Dead = 'Dead',
  Live = 'Live'
}

export type CreateBotAndStrategyInput = {
  followerContractId: Scalars['Int']['input'];
  leaderAddress: Scalars['String']['input'];
  leaderCollateralBaseline: Scalars['Int']['input'];
  leaderContractId: Scalars['Int']['input'];
  planId: Scalars['Int']['input'];
  strategy: CreateStrategyInput;
};

export type CreateBotInput = {
  followerAddress: Scalars['String']['input'];
  followerContractId: Scalars['Int']['input'];
  leaderAddress: Scalars['String']['input'];
  leaderCollateralBaseline: Scalars['Int']['input'];
  leaderContractId: Scalars['Int']['input'];
  planId: Scalars['Int']['input'];
  strategyId: Scalars['Int']['input'];
};

export type CreatePlanInput = {
  description: Scalars['String']['input'];
  scheduledEnd: Scalars['DateTime']['input'];
  scheduledStart: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
};

export type CreateStrategyInput = {
  collateralBaseline: Scalars['Int']['input'];
  lifeTime: Scalars['Float']['input'];
  maxCollateral: Scalars['Float']['input'];
  maxLeverage: Scalars['Int']['input'];
  minCollateral: Scalars['Float']['input'];
  minLeverage: Scalars['Int']['input'];
  params: Scalars['String']['input'];
  ratio: Scalars['Float']['input'];
  strategyKey: Scalars['String']['input'];
};

export type ExportFilter = {
  closePositionCountsByPnlSnapshotKind: Scalars['String']['input'];
  maxR2: Scalars['Float']['input'];
  maxSlope: Scalars['Float']['input'];
  minR2: Scalars['Float']['input'];
  minSlope: Scalars['Float']['input'];
  recentTradedDays: Scalars['Int']['input'];
};

export type ExportFilterV2 = {
  maxSlope: Scalars['Float']['input'];
  minSlope: Scalars['Float']['input'];
  r2MinsByPnlSnapshotKind: Scalars['String']['input'];
};

export type ExportFilterV3 = {
  maxCount: Scalars['Float']['input'];
  maxSize: Scalars['Float']['input'];
  minCount: Scalars['Float']['input'];
  minR2: Scalars['Float']['input'];
  minSize: Scalars['Float']['input'];
};

export type ExportFilterV5 = {
  m: Scalars['Int']['input'];
  minR2: Scalars['Float']['input'];
  minScore: Scalars['Float']['input'];
  n: Scalars['Float']['input'];
  window: Scalars['Int']['input'];
};

export type Follower = {
  __typename?: 'Follower';
  accountIndex: Scalars['Int']['output'];
  address: Scalars['String']['output'];
  publicKey: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type FollowerActionDetails = {
  __typename?: 'FollowerActionDetails';
  action: Action;
  actionId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  taskId: Scalars['Int']['output'];
};

export type FollowerDetail = {
  __typename?: 'FollowerDetail';
  accountIndex: Scalars['Int']['output'];
  address: Scalars['String']['output'];
  contractId: Scalars['Int']['output'];
  ethBalance?: Maybe<Scalars['String']['output']>;
  pnlSnapshots: Array<PnlSnapshot>;
  publicKey: Scalars['String']['output'];
  usdcBalance?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type FollowerPendingOrder = {
  __typename?: 'FollowerPendingOrder';
  address: Scalars['String']['output'];
  index: Scalars['Int']['output'];
  params: Scalars['String']['output'];
};

export type FollowerTrade = {
  __typename?: 'FollowerTrade';
  address: Scalars['String']['output'];
  index: Scalars['Int']['output'];
  mission?: Maybe<Mission>;
  params: Scalars['String']['output'];
};

export type GetUserByAddressInput = {
  address: Scalars['String']['input'];
};

export type GetUserTransactionCountsInput = {
  address: Scalars['String']['input'];
  contractId: Scalars['Int']['input'];
  endedAt?: InputMaybe<Scalars['DateTime']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Log = {
  __typename?: 'Log';
  checked: Scalars['Boolean']['output'];
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  severity: LogSeverity;
  summary: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
};

export enum LogSeverity {
  Alert = 'Alert',
  Critical = 'Critical',
  Debug = 'Debug',
  Default = 'Default',
  Emergency = 'Emergency',
  Error = 'Error',
  Info = 'Info',
  Notice = 'Notice',
  Warning = 'Warning'
}

export type LogsConnection = {
  __typename?: 'LogsConnection';
  edges: Array<LogsEdge>;
  pageInfo: LogsPageInfo;
};

export type LogsEdge = {
  __typename?: 'LogsEdge';
  cursor: Scalars['Int']['output'];
  node: Log;
};

export type LogsPageInfo = {
  __typename?: 'LogsPageInfo';
  endCursor?: Maybe<Scalars['Int']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
};

export type Mission = {
  __typename?: 'Mission';
  achievePositionId?: Maybe<Scalars['Int']['output']>;
  botId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  status: MissionStatus;
  targetPositionId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MissionBackwardDetails = {
  __typename?: 'MissionBackwardDetails';
  achievePosition?: Maybe<Position>;
  achievePositionId?: Maybe<Scalars['Int']['output']>;
  bot: BotBackwardDetails;
  botId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  status: MissionStatus;
  targetPosition: Position;
  targetPositionId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MissionForwardDetails = {
  __typename?: 'MissionForwardDetails';
  achievePosition?: Maybe<Position>;
  achievePositionId?: Maybe<Scalars['Int']['output']>;
  botId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  status: MissionStatus;
  targetPosition: Position;
  targetPositionId: Scalars['Int']['output'];
  tasks: Array<TaskForwardDetails>;
  updatedAt: Scalars['DateTime']['output'];
};

export type MissionShallowBackwardDetails = {
  __typename?: 'MissionShallowBackwardDetails';
  achievePosition?: Maybe<Position>;
  achievePositionId?: Maybe<Scalars['Int']['output']>;
  bot: BotDetails;
  botId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  status: MissionStatus;
  targetPosition: Position;
  targetPositionId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum MissionStatus {
  Closed = 'Closed',
  Closing = 'Closing',
  Created = 'Created',
  Ignored = 'Ignored',
  Opened = 'Opened',
  Opening = 'Opening'
}

export type Mutation = {
  __typename?: 'Mutation';
  addTagToWalletAccount: WalletAccount;
  addWalletAccount: WalletAccount;
  allowAuto: User;
  autoTesting: Scalars['Boolean']['output'];
  batchCreateBots: Array<BotBackwardDetails>;
  buildPnlSnapshots?: Maybe<PnlSnapshotInitializedFlag>;
  cancelOrderAfterTimeout: ContractExecutionResult;
  changePassword: Scalars['Boolean']['output'];
  changeUserPermission: User;
  checkLog: Log;
  closeMission: Scalars['Boolean']['output'];
  closeTradeMarket: ContractExecutionResult;
  createAutoPlan: Scalars['Boolean']['output'];
  createBot: BotBackwardDetails;
  createPlan: Plan;
  deleteBot: BotBackwardDetails;
  deleteCategory: TagCategory;
  deletePlan: Scalars['Int']['output'];
  deleteTag: Tag;
  dynamicSnapshotBuild?: Maybe<PnlSnapshotInitializedFlag>;
  endPlan: Scalars['Boolean']['output'];
  generateNewFollower: Follower;
  getToken: AccessToken;
  ignoreMission: Scalars['Boolean']['output'];
  initializePnlSnapshot: Scalars['Boolean']['output'];
  liveBot: Scalars['Boolean']['output'];
  makeSafeApp: Scalars['Boolean']['output'];
  pauseSystem: Scalars['Boolean']['output'];
  performTask: Scalars['Boolean']['output'];
  removeTagFromWalletAccount: WalletAccount;
  resumeSystem: Scalars['Boolean']['output'];
  startPlan: Scalars['Boolean']['output'];
  stopBot: Scalars['Boolean']['output'];
  stopTask: Scalars['Boolean']['output'];
  updatePlan: Plan;
  upsertCategory: TagCategory;
  upsertTag: Tag;
  withdrawAllETH: Scalars['Boolean']['output'];
  withdrawAllUSDC: Scalars['Boolean']['output'];
  withdrawETHToUser: Scalars['Boolean']['output'];
  withdrawUSDCToUser: Scalars['Boolean']['output'];
};


export type MutationAddTagToWalletAccountArgs = {
  input: ChangeUserTagInput;
};


export type MutationAddWalletAccountArgs = {
  input: AddUserInput;
};


export type MutationAllowAutoArgs = {
  address: Scalars['String']['input'];
  allowAuto: Scalars['Boolean']['input'];
  budget: Scalars['Float']['input'];
  followerContractId: Scalars['Int']['input'];
  ratio: Scalars['Float']['input'];
};


export type MutationAutoTestingArgs = {
  startDate: Scalars['String']['input'];
};


export type MutationBatchCreateBotsArgs = {
  input: Array<CreateBotAndStrategyInput>;
};


export type MutationBuildPnlSnapshotsArgs = {
  dateStr: Scalars['String']['input'];
  isForceBuild: Scalars['Boolean']['input'];
};


export type MutationCancelOrderAfterTimeoutArgs = {
  input: CancelOrderAfterTimeoutInput;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationChangeUserPermissionArgs = {
  address: Scalars['String']['input'];
  permission: Scalars['String']['input'];
};


export type MutationCheckLogArgs = {
  id: Scalars['Int']['input'];
};


export type MutationCloseMissionArgs = {
  id: Scalars['Int']['input'];
  isForce: Scalars['Boolean']['input'];
};


export type MutationCloseTradeMarketArgs = {
  input: CloseTradeInput;
};


export type MutationCreateBotArgs = {
  input: CreateBotInput;
};


export type MutationCreatePlanArgs = {
  createPlanInput: CreatePlanInput;
};


export type MutationDeleteBotArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePlanArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteTagArgs = {
  tag: Scalars['String']['input'];
};


export type MutationDynamicSnapshotBuildArgs = {
  dateStr: Scalars['String']['input'];
};


export type MutationEndPlanArgs = {
  id: Scalars['Int']['input'];
};


export type MutationGetTokenArgs = {
  signature: Scalars['String']['input'];
  timestamp: Scalars['String']['input'];
  walletAddress: Scalars['String']['input'];
};


export type MutationIgnoreMissionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationInitializePnlSnapshotArgs = {
  beginingDate: Scalars['DateTime']['input'];
  isForceBuild: Scalars['Boolean']['input'];
};


export type MutationLiveBotArgs = {
  id: Scalars['Int']['input'];
};


export type MutationMakeSafeAppArgs = {
  password: Scalars['String']['input'];
};


export type MutationPerformTaskArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveTagFromWalletAccountArgs = {
  input: ChangeUserTagInput;
};


export type MutationResumeSystemArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationStartPlanArgs = {
  id: Scalars['Int']['input'];
};


export type MutationStopBotArgs = {
  id: Scalars['Int']['input'];
};


export type MutationStopTaskArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdatePlanArgs = {
  updatePlanInput: UpdatePlanInput;
};


export type MutationUpsertCategoryArgs = {
  input: TagCategoryInput;
};


export type MutationUpsertTagArgs = {
  input: TagInput;
};


export type MutationWithdrawAllEthArgs = {
  input: WithdrawAllInput;
};


export type MutationWithdrawAllUsdcArgs = {
  input: WithdrawAllInput;
};


export type MutationWithdrawEthToUserArgs = {
  amount: Scalars['Float']['input'];
  contractId: Scalars['Int']['input'];
};


export type MutationWithdrawUsdcToUserArgs = {
  amount: Scalars['Float']['input'];
  contractId: Scalars['Int']['input'];
};

export type Plan = {
  __typename?: 'Plan';
  description: Scalars['String']['output'];
  endedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  scheduledEnd: Scalars['DateTime']['output'];
  scheduledStart: Scalars['DateTime']['output'];
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  status: PlanStatus;
  title: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type PlanConnection = {
  __typename?: 'PlanConnection';
  edges: Array<PlanEdge>;
  pageInfo: PlanPageInfo;
};

export type PlanEdge = {
  __typename?: 'PlanEdge';
  cursor: Scalars['Int']['output'];
  node: PlanForwardDetails;
};

export type PlanForwardDetails = {
  __typename?: 'PlanForwardDetails';
  bots: Array<BotForwardDetails>;
  description: Scalars['String']['output'];
  endedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  scheduledEnd: Scalars['DateTime']['output'];
  scheduledStart: Scalars['DateTime']['output'];
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  status: PlanStatus;
  title: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type PlanPageInfo = {
  __typename?: 'PlanPageInfo';
  endCursor?: Maybe<Scalars['Int']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
};

export enum PlanStatus {
  Created = 'Created',
  Finished = 'Finished',
  Started = 'Started',
  Stopped = 'Stopped'
}

export type PnlSnapshot = {
  __typename?: 'PnlSnapshot';
  accUSDPnl: Scalars['Float']['output'];
  address: Scalars['String']['output'];
  contractId: Scalars['Int']['output'];
  dateStr: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  kind: PnlSnapshotKind;
};

export type PnlSnapshotDetails = {
  __typename?: 'PnlSnapshotDetails';
  accUSDPnl: Scalars['Float']['output'];
  address: Scalars['String']['output'];
  contractId: Scalars['Int']['output'];
  dateStr: Scalars['String']['output'];
  histories: Array<TradeHistory>;
  id: Scalars['Int']['output'];
  kind: PnlSnapshotKind;
};

export type PnlSnapshotDetailsConnection = {
  __typename?: 'PnlSnapshotDetailsConnection';
  edges: Array<PnlSnapshotDetailsEdge>;
  pageInfo: PnlSnapshotDetailsPageInfo;
};

export type PnlSnapshotDetailsEdge = {
  __typename?: 'PnlSnapshotDetailsEdge';
  cursor: Scalars['Int']['output'];
  node: PnlSnapshotDetails;
};

export type PnlSnapshotDetailsPageInfo = {
  __typename?: 'PnlSnapshotDetailsPageInfo';
  endCursor?: Maybe<Scalars['Int']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
};

export type PnlSnapshotDevDetails = {
  __typename?: 'PnlSnapshotDevDetails';
  accUSDPnl: Scalars['Float']['output'];
  address: Scalars['String']['output'];
  contractId: Scalars['Int']['output'];
  dateStr: Scalars['String']['output'];
  histories: Array<TradeHistory>;
  id: Scalars['Int']['output'];
  kind: PnlSnapshotKind;
  regression: Regression;
  statistic: Statistic;
};

export type PnlSnapshotDevDetailsV5 = {
  __typename?: 'PnlSnapshotDevDetailsV5';
  accUSDPnl: Scalars['Float']['output'];
  address: Scalars['String']['output'];
  contractId: Scalars['Int']['output'];
  dateStr: Scalars['String']['output'];
  histories: Array<TradeHistory>;
  id: Scalars['Int']['output'];
  kind: PnlSnapshotKind;
  score: Scalars['Float']['output'];
};

export type PnlSnapshotInitializedFlag = {
  __typename?: 'PnlSnapshotInitializedFlag';
  dateStr: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isInit: Scalars['Boolean']['output'];
};

export enum PnlSnapshotKind {
  AllTime = 'ALL_TIME',
  Day = 'DAY',
  HalfYear = 'HALF_YEAR',
  Month = 'MONTH',
  ThreeDay = 'THREE_DAY',
  ThreeMonth = 'THREE_MONTH',
  TwoDay = 'TWO_DAY',
  TwoWeek = 'TWO_WEEK',
  Week = 'WEEK',
  Year = 'YEAR'
}

export type Position = {
  __typename?: 'Position';
  address: Scalars['String']['output'];
  contractId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  index: Scalars['Int']['output'];
};

export type PositionInfo = {
  __typename?: 'PositionInfo';
  address: Scalars['String']['output'];
  contractId: Scalars['Int']['output'];
  index: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  allLogs: LogsConnection;
  findContract: Contract;
  findStrategy?: Maybe<Strategy>;
  findStrategyMetadata: StrategyMetadata;
  getAlertTasks: Array<TaskBackwardDetails>;
  getAllCategories: Array<TagCategory>;
  getAllContracts: Array<Contract>;
  getAllFollowerDetails: Array<FollowerDetail>;
  getAllFollowers: Array<Follower>;
  getAllStrategy: Array<Strategy>;
  getAllStrategyMetadata: Array<StrategyMetadata>;
  getAllTags: Array<Tag>;
  getAllUsers: Array<User>;
  getAllWalletAccounts: Array<WalletAccount>;
  getBotsByStatus: BotConnection;
  getDevPnlSnapshots: Array<PnlSnapshotDevDetails>;
  getDevPnlSnapshotsV4: Array<PnlSnapshotDevDetails>;
  getDevPnlSnapshotsV5: Array<PnlSnapshotDevDetailsV5>;
  getLogsSeverityCounts: Array<SeverityCount>;
  getMonthlyDevPnlSnapshots: Array<TradeHistory>;
  getPendingOrders: Array<FollowerPendingOrder>;
  getPlanById?: Maybe<PlanForwardDetails>;
  getPlansByStatus: PlanConnection;
  getPnlSnapshotInitializedFlag: Array<PnlSnapshotInitializedFlag>;
  getPnlSnapshots: PnlSnapshotDetailsConnection;
  getPnlSnapshotsByAddress: Array<PnlSnapshot>;
  getServerTime: ServerTime;
  getTestingReport: TestingReportConnection;
  getTestingReportV2: TestingReportV2Connection;
  getTestingReportV3: TestingReportV3Connection;
  getTestingReportV4: TestingReportV3Connection;
  getTestingReportV5: TestingReportV5Connection;
  getTradeCollaterals: Array<TradeCollateral>;
  getTradeHistories: Array<TradeHistory>;
  getTradePairs: Array<TradePair>;
  getTradeTransactionCounts: TradeTransactionCount;
  getTrades: Array<FollowerTrade>;
  getUserTransactionCounts: Array<TradeTransactionCount>;
  getWalletAccountByAddress: WalletAccount;
  getWholeCompressedHistories: WholeCompressedHistories;
  getWholeCompressedHistoriesV2: WholeCompressedHistories;
  getWholeCompressedHistoriesV3: WholeCompressedHistories;
  getWholeCompressedHistoriesV4: WholeCompressedHistories;
  getWholeCompressedHistoriesV5: WholeCompressedHistories;
  getWholeResultHistories: Array<TradeHistory>;
  isPnlSnapshotInitialized?: Maybe<PnlSnapshotInitializedFlag>;
  isSafeApp: Scalars['Boolean']['output'];
  systemStatus: Scalars['Boolean']['output'];
};


export type QueryAllLogsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  checked: Scalars['Boolean']['input'];
  first: Scalars['Int']['input'];
  severity?: InputMaybe<LogSeverity>;
};


export type QueryFindContractArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFindStrategyArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFindStrategyMetadataArgs = {
  key: Scalars['String']['input'];
};


export type QueryGetAllFollowerDetailsArgs = {
  contractId: Scalars['Int']['input'];
};


export type QueryGetBotsByStatusArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first: Scalars['Int']['input'];
  status: BotStatus;
};


export type QueryGetDevPnlSnapshotsArgs = {
  dateStr: Scalars['String']['input'];
  filterParams: ExportFilter;
};


export type QueryGetDevPnlSnapshotsV4Args = {
  dateStr: Scalars['String']['input'];
  filterParams: Array<ExportFilterV3>;
  ratio: Scalars['Float']['input'];
};


export type QueryGetDevPnlSnapshotsV5Args = {
  dateStr: Scalars['String']['input'];
  filterParams: ExportFilterV5;
};


export type QueryGetMonthlyDevPnlSnapshotsArgs = {
  dateStr: Scalars['String']['input'];
  filterParams: ExportFilter;
};


export type QueryGetPendingOrdersArgs = {
  address: Scalars['String']['input'];
  contractId: Scalars['Int']['input'];
};


export type QueryGetPlanByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetPlansByStatusArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first: Scalars['Int']['input'];
  status: PlanStatus;
};


export type QueryGetPnlSnapshotsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  contractId: Scalars['Int']['input'];
  dateStr: Scalars['String']['input'];
  first: Scalars['Int']['input'];
  kind: PnlSnapshotKind;
};


export type QueryGetPnlSnapshotsByAddressArgs = {
  address: Scalars['String']['input'];
  dateStr: Scalars['String']['input'];
};


export type QueryGetTestingReportArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first: Scalars['Int']['input'];
};


export type QueryGetTestingReportV2Args = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first: Scalars['Int']['input'];
};


export type QueryGetTestingReportV3Args = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first: Scalars['Int']['input'];
};


export type QueryGetTestingReportV4Args = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first: Scalars['Int']['input'];
};


export type QueryGetTestingReportV5Args = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first: Scalars['Int']['input'];
};


export type QueryGetTradeCollateralsArgs = {
  contractId: Scalars['Int']['input'];
};


export type QueryGetTradeHistoriesArgs = {
  address: Scalars['String']['input'];
  contractId: Scalars['Int']['input'];
};


export type QueryGetTradePairsArgs = {
  contractId: Scalars['Int']['input'];
};


export type QueryGetTradeTransactionCountsArgs = {
  addresses: Array<Scalars['String']['input']>;
  contractIds: Array<Scalars['Int']['input']>;
};


export type QueryGetTradesArgs = {
  address: Scalars['String']['input'];
  contractId: Scalars['Int']['input'];
};


export type QueryGetUserTransactionCountsArgs = {
  inputs: Array<GetUserTransactionCountsInput>;
};


export type QueryGetWalletAccountByAddressArgs = {
  input: GetUserByAddressInput;
};


export type QueryGetWholeCompressedHistoriesArgs = {
  filterParams: ExportFilter;
};


export type QueryGetWholeCompressedHistoriesV2Args = {
  filterParams: Array<ExportFilterV2>;
};


export type QueryGetWholeCompressedHistoriesV3Args = {
  filterParams: Array<ExportFilterV3>;
};


export type QueryGetWholeCompressedHistoriesV4Args = {
  filterParams: Array<ExportFilterV3>;
  isTestnet: Scalars['Boolean']['input'];
  ratio: Scalars['Float']['input'];
  startDate: Scalars['String']['input'];
};


export type QueryGetWholeCompressedHistoriesV5Args = {
  filterParams: ExportFilterV5;
  isTestnet: Scalars['Boolean']['input'];
  ratio: Scalars['Float']['input'];
  startDate: Scalars['String']['input'];
};


export type QueryGetWholeResultHistoriesArgs = {
  filterParams: ExportFilter;
};


export type QueryIsPnlSnapshotInitializedArgs = {
  dateStr: Scalars['String']['input'];
};

export type Regression = {
  __typename?: 'Regression';
  chi2: Scalars['Float']['output'];
  intercept: Scalars['Float']['output'];
  r: Scalars['Float']['output'];
  r2: Scalars['Float']['output'];
  rmsd: Scalars['Float']['output'];
  slope: Scalars['Float']['output'];
};

export type ServerTime = {
  __typename?: 'ServerTime';
  timestamp: Scalars['Float']['output'];
  timezone: Scalars['String']['output'];
};

export type SeverityCount = {
  __typename?: 'SeverityCount';
  counts: Scalars['Int']['output'];
  severity: LogSeverity;
};

export type Statistic = {
  __typename?: 'Statistic';
  averageIn: Scalars['Float']['output'];
  countIn: Scalars['Int']['output'];
};

export type Strategy = {
  __typename?: 'Strategy';
  collateralBaseline: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lifeTime: Scalars['Int']['output'];
  maxCollateral: Scalars['Int']['output'];
  maxLeverage: Scalars['Int']['output'];
  minCollateral: Scalars['Int']['output'];
  minLeverage: Scalars['Int']['output'];
  params: Scalars['String']['output'];
  ratio: Scalars['Float']['output'];
  strategyKey: Scalars['String']['output'];
};

export type StrategyMetadata = {
  __typename?: 'StrategyMetadata';
  description: Scalars['String']['output'];
  key: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  botCreated: Array<BotBackwardDetails>;
  botUpdated: Array<BotBackwardDetails>;
  missionCreated: Array<MissionBackwardDetails>;
  missionUpdated: Array<MissionBackwardDetails>;
  newLog: Log;
  planCreated: Plan;
  planUpdated: Plan;
  taskCreated: Array<TaskBackwardDetails>;
  taskUpdated: Array<TaskBackwardDetails>;
};


export type SubscriptionBotCreatedArgs = {
  userId: Scalars['String']['input'];
};


export type SubscriptionBotUpdatedArgs = {
  userId: Scalars['String']['input'];
};


export type SubscriptionMissionCreatedArgs = {
  userId: Scalars['String']['input'];
};


export type SubscriptionMissionUpdatedArgs = {
  userId: Scalars['String']['input'];
};


export type SubscriptionNewLogArgs = {
  checked: Scalars['Boolean']['input'];
  severity?: InputMaybe<LogSeverity>;
};


export type SubscriptionPlanCreatedArgs = {
  userId: Scalars['String']['input'];
};


export type SubscriptionPlanUpdatedArgs = {
  userId: Scalars['String']['input'];
};


export type SubscriptionTaskCreatedArgs = {
  userId: Scalars['String']['input'];
};


export type SubscriptionTaskUpdatedArgs = {
  userId: Scalars['String']['input'];
};

export type Tag = {
  __typename?: 'Tag';
  categoryId?: Maybe<Scalars['Int']['output']>;
  color: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  tag: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type TagCategory = {
  __typename?: 'TagCategory';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

export type TagCategoryInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
};

export type TagInput = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  color: Scalars['String']['input'];
  description: Scalars['String']['input'];
  tag: Scalars['String']['input'];
};

export type TaskBackwardDetails = {
  __typename?: 'TaskBackwardDetails';
  action: Action;
  actionId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  followerActions: Array<FollowerActionDetails>;
  id: Scalars['Int']['output'];
  logs: Array<Scalars['String']['output']>;
  mission: MissionBackwardDetails;
  missionId: Scalars['Int']['output'];
  status: TaskStatus;
};

export type TaskForwardDetails = {
  __typename?: 'TaskForwardDetails';
  action: Action;
  actionId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  followerActions: Array<FollowerActionDetails>;
  id: Scalars['Int']['output'];
  logs: Array<Scalars['String']['output']>;
  missionId: Scalars['Int']['output'];
  status: TaskStatus;
};

export enum TaskStatus {
  Await = 'Await',
  Completed = 'Completed',
  Created = 'Created',
  Failed = 'Failed',
  Initiated = 'Initiated',
  Stopped = 'Stopped'
}

export type TestingReport = {
  __typename?: 'TestingReport';
  avgLoss: Scalars['Float']['output'];
  avgProfit: Scalars['Float']['output'];
  bottomAccProfit: Scalars['Float']['output'];
  calculatedR2: Scalars['Float']['output'];
  calculatedSlope: Scalars['Float']['output'];
  closePositionCountsByPnlSnapshotKind: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  investedUSD: Scalars['Float']['output'];
  lossCount: Scalars['Int']['output'];
  maxLoss: Scalars['Float']['output'];
  maxProfit: Scalars['Float']['output'];
  maxR2: Scalars['Float']['output'];
  maxSlope: Scalars['Int']['output'];
  minR2: Scalars['Float']['output'];
  minSlope: Scalars['Int']['output'];
  peakAccProfit: Scalars['Float']['output'];
  profitCount: Scalars['Int']['output'];
  recentTradedDays: Scalars['Int']['output'];
  totalPositions: Scalars['Int']['output'];
  totalTasks: Scalars['Int']['output'];
  totalTraders: Scalars['Int']['output'];
  totalUSDPnl: Scalars['Float']['output'];
  totalUniqueTraders: Scalars['Int']['output'];
  usdPnls: Array<Scalars['Float']['output']>;
};

export type TestingReportConnection = {
  __typename?: 'TestingReportConnection';
  edges: Array<TestingReportEdge>;
  pageInfo: TestingReportPageInfo;
};

export type TestingReportEdge = {
  __typename?: 'TestingReportEdge';
  cursor: Scalars['Int']['output'];
  node: TestingReport;
};

export type TestingReportPageInfo = {
  __typename?: 'TestingReportPageInfo';
  endCursor?: Maybe<Scalars['Int']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
};

export type TestingReportV2 = {
  __typename?: 'TestingReportV2';
  avgLoss: Scalars['Float']['output'];
  avgProfit: Scalars['Float']['output'];
  bottomAccProfit: Scalars['Float']['output'];
  calculatedR2: Scalars['Float']['output'];
  calculatedSlope: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  investedUSD: Scalars['Float']['output'];
  lossCount: Scalars['Int']['output'];
  maxLoss: Scalars['Float']['output'];
  maxProfit: Scalars['Float']['output'];
  maxSlope: Scalars['Int']['output'];
  minSlope: Scalars['Int']['output'];
  peakAccProfit: Scalars['Float']['output'];
  profitCount: Scalars['Int']['output'];
  r2MinsByPnlSnapshotKind: Scalars['String']['output'];
  totalPositions: Scalars['Int']['output'];
  totalTasks: Scalars['Int']['output'];
  totalTraders: Scalars['Int']['output'];
  totalUSDPnl: Scalars['Float']['output'];
  totalUniqueTraders: Scalars['Int']['output'];
  usdPnls: Array<Scalars['Float']['output']>;
};

export type TestingReportV2Connection = {
  __typename?: 'TestingReportV2Connection';
  edges: Array<TestingReportV2Edge>;
  pageInfo: TestingReportV2PageInfo;
};

export type TestingReportV2Edge = {
  __typename?: 'TestingReportV2Edge';
  cursor: Scalars['Int']['output'];
  node: TestingReportV2;
};

export type TestingReportV2PageInfo = {
  __typename?: 'TestingReportV2PageInfo';
  endCursor?: Maybe<Scalars['Int']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
};

export type TestingReportV3 = {
  __typename?: 'TestingReportV3';
  avgLoss: Scalars['Float']['output'];
  avgProfit: Scalars['Float']['output'];
  bottomAccProfit: Scalars['Float']['output'];
  calculatedR2: Scalars['Float']['output'];
  calculatedSlope: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  investedUSD: Scalars['Float']['output'];
  lossCount: Scalars['Int']['output'];
  maxCount: Scalars['Int']['output'];
  maxLoss: Scalars['Float']['output'];
  maxProfit: Scalars['Float']['output'];
  maxSize: Scalars['Int']['output'];
  minCount: Scalars['Int']['output'];
  minR2: Scalars['String']['output'];
  minSize: Scalars['Int']['output'];
  peakAccProfit: Scalars['Float']['output'];
  profitCount: Scalars['Int']['output'];
  totalPositions: Scalars['Int']['output'];
  totalTasks: Scalars['Int']['output'];
  totalTraders: Scalars['Int']['output'];
  totalUSDPnl: Scalars['Float']['output'];
  totalUniqueTraders: Scalars['Int']['output'];
  usdPnls: Array<Scalars['Float']['output']>;
};

export type TestingReportV3Connection = {
  __typename?: 'TestingReportV3Connection';
  edges: Array<TestingReportV3Edge>;
  pageInfo: TestingReportV3PageInfo;
};

export type TestingReportV3Edge = {
  __typename?: 'TestingReportV3Edge';
  cursor: Scalars['Int']['output'];
  node: TestingReportV3;
};

export type TestingReportV3PageInfo = {
  __typename?: 'TestingReportV3PageInfo';
  endCursor?: Maybe<Scalars['Int']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
};

export type TestingReportV5 = {
  __typename?: 'TestingReportV5';
  avgLoss: Scalars['Float']['output'];
  avgProfit: Scalars['Float']['output'];
  bottomAccProfit: Scalars['Float']['output'];
  calculatedR2: Scalars['Float']['output'];
  calculatedSlope: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  investedUSD: Scalars['Float']['output'];
  lossCount: Scalars['Int']['output'];
  m: Scalars['Int']['output'];
  maxLoss: Scalars['Float']['output'];
  maxProfit: Scalars['Float']['output'];
  minR2: Scalars['Float']['output'];
  minScore: Scalars['Float']['output'];
  n: Scalars['Int']['output'];
  peakAccProfit: Scalars['Float']['output'];
  profitCount: Scalars['Int']['output'];
  totalPositions: Scalars['Int']['output'];
  totalTasks: Scalars['Int']['output'];
  totalTraders: Scalars['Int']['output'];
  totalUSDPnl: Scalars['Float']['output'];
  totalUniqueTraders: Scalars['Int']['output'];
  usdPnls: Array<Scalars['Float']['output']>;
  window: Scalars['Int']['output'];
};

export type TestingReportV5Connection = {
  __typename?: 'TestingReportV5Connection';
  edges: Array<TestingReportV5Edge>;
  pageInfo: TestingReportV5PageInfo;
};

export type TestingReportV5Edge = {
  __typename?: 'TestingReportV5Edge';
  cursor: Scalars['Int']['output'];
  node: TestingReportV5;
};

export type TestingReportV5PageInfo = {
  __typename?: 'TestingReportV5PageInfo';
  endCursor?: Maybe<Scalars['Int']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
};

export type TotalBot = {
  __typename?: 'TotalBot';
  address: Scalars['String']['output'];
  contractId: Scalars['Int']['output'];
  dateStr: Scalars['String']['output'];
};

export enum TradeActionType {
  TradeClosedLiq = 'TradeClosedLIQ',
  TradeClosedMarket = 'TradeClosedMarket',
  TradeClosedSl = 'TradeClosedSL',
  TradeClosedTp = 'TradeClosedTP',
  TradeLeverageUpdate = 'TradeLeverageUpdate',
  TradeOpenedLimit = 'TradeOpenedLimit',
  TradeOpenedMarket = 'TradeOpenedMarket',
  TradePosSizeDecrease = 'TradePosSizeDecrease',
  TradePosSizeIncrease = 'TradePosSizeIncrease'
}

export type TradeCollateral = {
  __typename?: 'TradeCollateral';
  collateral: Scalars['String']['output'];
  collateralIndex: Scalars['Int']['output'];
  isActive: Scalars['Boolean']['output'];
  precision: Scalars['String']['output'];
  precisionDelta: Scalars['String']['output'];
};

export type TradeHistory = {
  __typename?: 'TradeHistory';
  action: TradeActionType;
  address: Scalars['String']['output'];
  block: Scalars['Int']['output'];
  collateralDelta?: Maybe<Scalars['String']['output']>;
  collateralIndex: Scalars['Int']['output'];
  collateralPriceUsd: Scalars['String']['output'];
  contractId: Scalars['Int']['output'];
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  leverage: Scalars['Int']['output'];
  leverageDelta?: Maybe<Scalars['Int']['output']>;
  long: Scalars['Int']['output'];
  marketPrice?: Maybe<Scalars['String']['output']>;
  pair: Scalars['String']['output'];
  pnl: Scalars['String']['output'];
  price: Scalars['String']['output'];
  size: Scalars['String']['output'];
  tradeId?: Maybe<Scalars['String']['output']>;
  tradeIndex: Scalars['Int']['output'];
};

export type TradePair = {
  __typename?: 'TradePair';
  from: Scalars['String']['output'];
  pairIndex: Scalars['Int']['output'];
  to: Scalars['String']['output'];
};

export type TradeTransactionCount = {
  __typename?: 'TradeTransactionCount';
  daily: Scalars['Int']['output'];
  monthly: Scalars['Int']['output'];
  weekly: Scalars['Int']['output'];
};

export type UpdatePlanInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  endedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['Int']['input'];
  scheduledEnd?: InputMaybe<Scalars['DateTime']['input']>;
  scheduledStart?: InputMaybe<Scalars['DateTime']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status: PlanStatus;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  address: Scalars['String']['output'];
  allowAuto: Scalars['Boolean']['output'];
  budget: Scalars['Float']['output'];
  followerContractId: Scalars['Int']['output'];
  permission: UserPermission;
  ratio: Scalars['Float']['output'];
};

export enum UserPermission {
  Admin = 'Admin',
  Trader = 'Trader',
  Trial = 'Trial'
}

export type WalletAccount = {
  __typename?: 'WalletAccount';
  address: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  tags: Array<Tag>;
  userId: Scalars['String']['output'];
};

export type WholeCompressedHistories = {
  __typename?: 'WholeCompressedHistories';
  accPnls: Array<AccPnl>;
  actionTypeCount?: Maybe<Scalars['String']['output']>;
  botCounts: Array<BotCount>;
  maxInvested: Scalars['Float']['output'];
  totalBots: Array<TotalBot>;
  uniqueTraders?: Maybe<Array<Scalars['String']['output']>>;
};

export type WithdrawAllInput = {
  address: Scalars['String']['input'];
  contractId: Scalars['Int']['input'];
};
