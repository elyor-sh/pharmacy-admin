import {pharmApiInstanceAuth} from "./axios";

export const apiAuthLogin = (param: any) => pharmApiInstanceAuth.post('/auth/login', param)