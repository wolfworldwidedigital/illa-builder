export interface RESTAPIFormProps {

}

export type Params = {
  key: string,
  value: string
}

export interface RESTAPIFormValues {
  Name: string
  BaseURL?: string
  URLParameters?: Params[]
  Headers?: Params[]
  ExtraBodyValues?: Params[]
  CookiesToForward?: string[]
  Authentication?: string
  BasicAuthUsername?: string
  BasicAuthPassword?: string
  UseClientCredentialsAuth?: boolean
  AuthorizationURL?: string
  AccessTokenURL?: string
  ClientId?: string
  ClientSecret?: string
  Scopes?: string
  Audience?: string
  AccessToken?: string
  RefreshToken?: string
  AccessTokenLifespan?: number
  EnableAuthVertificationEndpoint?: boolean
}
