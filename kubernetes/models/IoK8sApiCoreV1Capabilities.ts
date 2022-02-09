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
/**
 * Adds and removes POSIX capabilities from running containers.
 * @export
 * @interface IoK8sApiCoreV1Capabilities
 */
export interface IoK8sApiCoreV1Capabilities {
  /**
   * Added capabilities
   * @type {Array<string>}
   * @memberof IoK8sApiCoreV1Capabilities
   */
  add?: Array<string>;
  /**
   * Removed capabilities
   * @type {Array<string>}
   * @memberof IoK8sApiCoreV1Capabilities
   */
  drop?: Array<string>;
}

export function IoK8sApiCoreV1CapabilitiesFromJSON(json: any): IoK8sApiCoreV1Capabilities {
  return IoK8sApiCoreV1CapabilitiesFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1CapabilitiesFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1Capabilities {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    add: !exists(json, 'add') ? undefined : json['add'],
    drop: !exists(json, 'drop') ? undefined : json['drop'],
  };
}

export function IoK8sApiCoreV1CapabilitiesToJSON(value?: IoK8sApiCoreV1Capabilities | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    add: value.add,
    drop: value.drop,
  };
}