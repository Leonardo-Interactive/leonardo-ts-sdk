/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteModelByIdRequest = {
  /**
   * The ID of the model to delete.
   */
  id: string;
};

/**
 * columns and relationships of "custom_models"
 */
export type CustomModels = {
  id?: string | null | undefined;
};

/**
 * Responses for DELETE /models/{id}
 */
export type DeleteModelByIdResponseBody = {
  /**
   * columns and relationships of "custom_models"
   */
  deleteCustomModelsByPk?: CustomModels | null | undefined;
};

export type DeleteModelByIdResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  /**
   * Responses for DELETE /models/{id}
   */
  object?: DeleteModelByIdResponseBody | undefined;
};

/** @internal */
export const DeleteModelByIdRequest$inboundSchema: z.ZodType<
  DeleteModelByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeleteModelByIdRequest$Outbound = {
  id: string;
};

/** @internal */
export const DeleteModelByIdRequest$outboundSchema: z.ZodType<
  DeleteModelByIdRequest$Outbound,
  z.ZodTypeDef,
  DeleteModelByIdRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteModelByIdRequest$ {
  /** @deprecated use `DeleteModelByIdRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteModelByIdRequest$inboundSchema;
  /** @deprecated use `DeleteModelByIdRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteModelByIdRequest$outboundSchema;
  /** @deprecated use `DeleteModelByIdRequest$Outbound` instead. */
  export type Outbound = DeleteModelByIdRequest$Outbound;
}

export function deleteModelByIdRequestToJSON(
  deleteModelByIdRequest: DeleteModelByIdRequest,
): string {
  return JSON.stringify(
    DeleteModelByIdRequest$outboundSchema.parse(deleteModelByIdRequest),
  );
}

export function deleteModelByIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteModelByIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteModelByIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteModelByIdRequest' from JSON`,
  );
}

/** @internal */
export const CustomModels$inboundSchema: z.ZodType<
  CustomModels,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
});

/** @internal */
export type CustomModels$Outbound = {
  id?: string | null | undefined;
};

/** @internal */
export const CustomModels$outboundSchema: z.ZodType<
  CustomModels$Outbound,
  z.ZodTypeDef,
  CustomModels
> = z.object({
  id: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomModels$ {
  /** @deprecated use `CustomModels$inboundSchema` instead. */
  export const inboundSchema = CustomModels$inboundSchema;
  /** @deprecated use `CustomModels$outboundSchema` instead. */
  export const outboundSchema = CustomModels$outboundSchema;
  /** @deprecated use `CustomModels$Outbound` instead. */
  export type Outbound = CustomModels$Outbound;
}

export function customModelsToJSON(customModels: CustomModels): string {
  return JSON.stringify(CustomModels$outboundSchema.parse(customModels));
}

export function customModelsFromJSON(
  jsonString: string,
): SafeParseResult<CustomModels, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomModels$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomModels' from JSON`,
  );
}

/** @internal */
export const DeleteModelByIdResponseBody$inboundSchema: z.ZodType<
  DeleteModelByIdResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  delete_custom_models_by_pk: z.nullable(
    z.lazy(() => CustomModels$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "delete_custom_models_by_pk": "deleteCustomModelsByPk",
  });
});

/** @internal */
export type DeleteModelByIdResponseBody$Outbound = {
  delete_custom_models_by_pk?: CustomModels$Outbound | null | undefined;
};

/** @internal */
export const DeleteModelByIdResponseBody$outboundSchema: z.ZodType<
  DeleteModelByIdResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteModelByIdResponseBody
> = z.object({
  deleteCustomModelsByPk: z.nullable(z.lazy(() => CustomModels$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    deleteCustomModelsByPk: "delete_custom_models_by_pk",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteModelByIdResponseBody$ {
  /** @deprecated use `DeleteModelByIdResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteModelByIdResponseBody$inboundSchema;
  /** @deprecated use `DeleteModelByIdResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteModelByIdResponseBody$outboundSchema;
  /** @deprecated use `DeleteModelByIdResponseBody$Outbound` instead. */
  export type Outbound = DeleteModelByIdResponseBody$Outbound;
}

export function deleteModelByIdResponseBodyToJSON(
  deleteModelByIdResponseBody: DeleteModelByIdResponseBody,
): string {
  return JSON.stringify(
    DeleteModelByIdResponseBody$outboundSchema.parse(
      deleteModelByIdResponseBody,
    ),
  );
}

export function deleteModelByIdResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DeleteModelByIdResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteModelByIdResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteModelByIdResponseBody' from JSON`,
  );
}

/** @internal */
export const DeleteModelByIdResponse$inboundSchema: z.ZodType<
  DeleteModelByIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => DeleteModelByIdResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type DeleteModelByIdResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: DeleteModelByIdResponseBody$Outbound | undefined;
};

/** @internal */
export const DeleteModelByIdResponse$outboundSchema: z.ZodType<
  DeleteModelByIdResponse$Outbound,
  z.ZodTypeDef,
  DeleteModelByIdResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => DeleteModelByIdResponseBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteModelByIdResponse$ {
  /** @deprecated use `DeleteModelByIdResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteModelByIdResponse$inboundSchema;
  /** @deprecated use `DeleteModelByIdResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteModelByIdResponse$outboundSchema;
  /** @deprecated use `DeleteModelByIdResponse$Outbound` instead. */
  export type Outbound = DeleteModelByIdResponse$Outbound;
}

export function deleteModelByIdResponseToJSON(
  deleteModelByIdResponse: DeleteModelByIdResponse,
): string {
  return JSON.stringify(
    DeleteModelByIdResponse$outboundSchema.parse(deleteModelByIdResponse),
  );
}

export function deleteModelByIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteModelByIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteModelByIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteModelByIdResponse' from JSON`,
  );
}
