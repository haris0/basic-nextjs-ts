import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

export interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
}

export interface Dashboard {
  post: number;
  likes: number;
  followers: number;
  following: number;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
}

export interface Comment {
  id: number;
  text: string;
}
