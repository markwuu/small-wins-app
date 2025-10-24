import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  points: Points;
  goals: Goal[];
  prizes: {
    type: Prize[];
    redeemed: RedeemedPrize[];
  };
  updatedAt: Timestamp | string;
};

export type Points = {
  current: number;
  total: number;
  redeemed: number;
};

export type Goal = {
  title: string;
  point: number;
  category: string;
  checked: boolean;
};

export type Prize = {
  title: string;
  points: number;
  category: string;
  redeemNumber: number;
};

export type RedeemedPrize = {
  title: string;
  date: Timestamp | string;
};
