/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt Containerized Data Importer API
 * Containerized Data Importer for KubeVirt.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime';
import {
  V1ObjectMeta,
  V1ObjectMetaFromJSON,
  V1ObjectMetaToJSON,
  V1beta1DataSourceSpec,
  V1beta1DataSourceSpecFromJSON,
  V1beta1DataSourceSpecToJSON,
  V1beta1DataSourceStatus,
  V1beta1DataSourceStatusFromJSON,
  V1beta1DataSourceStatusToJSON,
} from './';

/**
 * DataSource references an import/clone source for a DataVolume
 * @export
 * @interface V1beta1DataSource
 */
export interface V1beta1DataSource {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof V1beta1DataSource
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1beta1DataSource
   */
  kind?: string;
  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1beta1DataSource
   */
  metadata?: V1ObjectMeta;
  /**
   *
   * @type {V1beta1DataSourceSpec}
   * @memberof V1beta1DataSource
   */
  spec: V1beta1DataSourceSpec;
  /**
   *
   * @type {V1beta1DataSourceStatus}
   * @memberof V1beta1DataSource
   */
  status?: V1beta1DataSourceStatus;
}

export function V1beta1DataSourceFromJSON(json: any): V1beta1DataSource {
  return V1beta1DataSourceFromJSONTyped(json, false);
}

export function V1beta1DataSourceFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1beta1DataSource {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
    spec: V1beta1DataSourceSpecFromJSON(json['spec']),
    status: !exists(json, 'status') ? undefined : V1beta1DataSourceStatusFromJSON(json['status']),
  };
}

export function V1beta1DataSourceToJSON(value?: V1beta1DataSource | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    kind: value.kind,
    metadata: V1ObjectMetaToJSON(value.metadata),
    spec: V1beta1DataSourceSpecToJSON(value.spec),
    status: V1beta1DataSourceStatusToJSON(value.status),
  };
}