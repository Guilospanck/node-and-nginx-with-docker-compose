export interface HttpRequest<H = any, B = any> {
  headers: H
  body: B
}

export interface HttpResponse {
  statusCode: number,
  headers: any,
  body: any
}

export interface Params {body?: any, headers?: any}

export function success (params: Params = {}): HttpResponse {
  return {
    statusCode: 200,
    body: params?.body,
    headers: params?.headers
  }
}

export function created (params: Params = {}): HttpResponse {
  return {
    statusCode: 201,
    body: params?.body,
    headers: params?.headers
  }
}

export function badRequest (params: Params = {}): HttpResponse {
  return {
    statusCode: 400,
    body: params?.body,
    headers: params?.headers
  }
}

export function unauthorized (params: Params = {}): HttpResponse {
  return {
    statusCode: 401,
    body: params?.body,
    headers: params?.headers
  }
}

export function forbidden (params: Params = {}): HttpResponse {
  return {
    statusCode: 403,
    body: params?.body,
    headers: params?.headers
  }
}

export function notFound (params: Params = {}): HttpResponse {
  return {
    statusCode: 404,
    body: params?.body,
    headers: params?.headers
  }
}

export function conflict (params: Params = {}): HttpResponse {
  return {
    statusCode: 409,
    body: params?.body,
    headers: params?.headers
  }
}

export function unsupportedMediaType (params: Params = {}): HttpResponse {
  return {
    statusCode: 415,
    body: params?.body,
    headers: params?.headers
  }
}

export function internalServerError (params: Params = {}): HttpResponse {
  return {
    statusCode: 500,
    body: params?.body,
    headers: params?.headers
  }
}
