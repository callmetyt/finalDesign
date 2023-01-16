interface GardenInfo {
  name: string; // 茶园名字
  teaType: string; // 茶叶类型
  altitude: number; // 海拔
  ph: number; // ph值
  area: number; // 面积
  address: string; // 详细地址
}

interface PickInfo {
  time: number; // 采摘时间 y/m/d
  num: number; // 采摘批次编号
}

interface SaleInfo {
  transport: number; // 物流编号
  time: number; // 物流时间 y/m/d
  shop: number; // 商家编号
}

interface TeaInfo {
  tid: number; // 茶叶编号
  garden: GardenInfo;
  pick: PickInfo;
  sale: SaleInfo;
}

type HttpCode = 200;

interface MyResponse<T> {
  code: HttpCode;
  body: T;
}

type TeaInfoResponse = MyResponse<TeaInfo[]>;
type VaildChainResponse = MyResponse<boolean>;

export type {
  GardenInfo,
  PickInfo,
  SaleInfo,
  TeaInfo,
  TeaInfoResponse,
  VaildChainResponse,
};
