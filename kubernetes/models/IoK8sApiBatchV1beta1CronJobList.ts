/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: unversioned
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime';
import {
  IoK8sApiBatchV1beta1CronJob,
  IoK8sApiBatchV1beta1CronJobFromJSON,
  IoK8sApiBatchV1beta1CronJobToJSON,
  IoK8sApimachineryPkgApisMetaV1ListMeta,
  IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
  IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * CronJobList is a collection of cron jobs.
 * @export
 * @interface IoK8sApiBatchV1beta1CronJobList
 */
export interface IoK8sApiBatchV1beta1CronJobList {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof IoK8sApiBatchV1beta1CronJobList
   */
  apiVersion?: string;
  /**
   * items is the list of CronJobs.
   * @type {Array<IoK8sApiBatchV1beta1CronJob>}
   * @memberof IoK8sApiBatchV1beta1CronJobList
   */
  items: Array<IoK8sApiBatchV1beta1CronJob>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiBatchV1beta1CronJobList
   */
  kind?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
   * @memberof IoK8sApiBatchV1beta1CronJobList
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiBatchV1beta1CronJobListFromJSON(
  json: any,
): IoK8sApiBatchV1beta1CronJobList {
  return IoK8sApiBatchV1beta1CronJobListFromJSONTyped(json, false);
}

export function IoK8sApiBatchV1beta1CronJobListFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiBatchV1beta1CronJobList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    items: (json['items'] as Array<any>).map(IoK8sApiBatchV1beta1CronJobFromJSON),
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
  };
}

export function IoK8sApiBatchV1beta1CronJobListToJSON(
  value?: IoK8sApiBatchV1beta1CronJobList | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    items: (value.items as Array<any>).map(IoK8sApiBatchV1beta1CronJobToJSON),
    kind: value.kind,
    metadata: IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
  };
}