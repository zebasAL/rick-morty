import { z } from "zod";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import axios, { AxiosInstance } from "axios";
import { inspect } from "util";
// schemas and types
import {
  allCharactersSchema,
  AllCharactersType,
  allEpisodesSchema,
  AllEpisodesType,
  allLocationsSchema,
  AllLocationsType,
  characterSchema,
} from "./schemas";

import { CharacterType } from "./schemas";
import { inputSchema } from "./schemas/inputs";

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

  public async getAllCharacters(): Promise<AllCharactersType> {
    const url = `/character`;
    const { data } = await this.req.get<AllCharactersType>(url);

    return RMsdk.checkSchema(allCharactersSchema, data);
  }

  public async getCharacterById(Id: Number): Promise<CharacterType> {
    const url = `/character/${Id}`;
    const config: AxiosRequestConfig = {
      params: Id,
    };
    const { data } = await this.req.get<CharacterType>(url, config.params);

    return RMsdk.checkSchema(characterSchema, data);
  }

  public async getAllEpisodes(): Promise<AllEpisodesType> {
    const url = `/episode`;
    const { data } = await this.req.get<AllEpisodesType>(url);

    return RMsdk.checkSchema(allEpisodesSchema, data);
  }

  public async getAllLocations(): Promise<AllLocationsType> {
    const url = `/location`;
    const { data } = await this.req.get<AllLocationsType>(url);

    return RMsdk.checkSchema(allLocationsSchema, data);
  }
}
export const validateInput = (input: unknown) => {
  const isValidData = inputSchema.parse(input);
  return isValidData;
};

export const rmSDK = RMsdk.getInstance();

export const multipleCharactersSchema = z.array(characterSchema);

export type MultipleCharactersType = z.infer<typeof multipleCharactersSchema>;

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
