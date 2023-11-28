import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type Aadhaar = string;
export interface Entry { 'Aadhaar' : Aadhaar, 'desc' : string }
export type Name = string;
export interface _SERVICE {
  'insert' : ActorMethod<[Name, Entry], undefined>,
  'lookup' : ActorMethod<[Name], [] | [Entry]>,
}
