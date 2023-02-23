import { z } from "zod"
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import axios, { AxiosInstance } from "axios";
import { inspect } from "util";
// schemas and types
import {
  characterSchema,
} from './schemas'

import {
  CharacterType,
} from './schemas'

class RMsdk {
  private static instance: RMsdk;
  private req: AxiosInstance;
  private readonly baseConfig: AxiosRequestConfig = {
    baseURL: "https://rickandmortyapi.com/api",
    headers: {
      Accept: "application/json",
      // Authorization:
      //   "Bearer APP_USR-347859323995954-081714-61597aa46383e42037bf46928e1e8d2a-529407762",
      // "Content-Type": "application/json",
    },
  };

  private constructor() {
    this.req = axios.create(this.baseConfig);
  }

  /**
   * Checks if the data is valid against the provided schema.
   * Should it not be, throws an error as long as we are not in production.
   * It is is intended to be used in development and testing to catch errors
   * early and nail down the poorly defined schemas provided by ML.
   *
   * @param schema
   * @param data
   * @private
   */
  private static checkSchema<Schema extends z.Schema, Data = z.infer<Schema>>(
    schema: Schema,
    data: Data
  ): Data {
    try {
      schema.parse(data);
    } catch (error: unknown) {
      console.debug(inspect(data, false, null, true));
      if (!(error instanceof z.ZodError)) {
        throw error;
      } else if (process.env.VERCEL_ENV !== "production") {
        throw error;
      }

      console.warn("An schema must be corrected!", error);
    }

    return data;
  }

  public static getInstance(): RMsdk {
    if (RMsdk.instance === undefined) {
      RMsdk.instance = new RMsdk();
    }

    return RMsdk.instance;
  }

  public async getAllCharacters(): Promise<CharacterType> {
    const url = `/character`;
    const { data } = await this.req.get<CharacterType>(url)

    return RMsdk.checkSchema(characterSchema, data);
  }

  public async getCharacterById(Ids: any): Promise<CharacterType> {
    const url = `/character`;
    const config: AxiosRequestConfig = {
      params: Ids,
    };
    const { data } = await this.req.get<CharacterType>(url, config)

    return RMsdk.checkSchema(characterSchema, data);
  }

}

export const rmSDK = RMsdk.getInstance();



// axios way of use

// this.req = axios
// apiCode = afsafafsfaaf

// 1._
// this.req({
//   url: `https://example/api/v1?code=${apiCode}`,
//   method: 'POST',
//   data: addressData,
// })

// 2._
// this.req('https://example/api', { 
//   url: 'v1'
//   params: { code: apiCode },
//   method: 'POST'
// })

// 3._
// this.req.post('https://example/api', {
//   url: 'v1'
//   params: { code: apiCode },
// })
