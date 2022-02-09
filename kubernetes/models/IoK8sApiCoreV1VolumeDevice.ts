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

/**
 * volumeDevice describes a mapping of a raw block device within a container.
 * @export
 * @interface IoK8sApiCoreV1VolumeDevice
 */
export interface IoK8sApiCoreV1VolumeDevice {
  /**
   * devicePath is the path inside of the container that the device will be mapped to.
   * @type {string}
   * @memberof IoK8sApiCoreV1VolumeDevice
   */
  devicePath: string;
  /**
   * name must match the name of a persistentVolumeClaim in the pod
   * @type {string}
   * @memberof IoK8sApiCoreV1VolumeDevice
   */
  name: string;
}

export function IoK8sApiCoreV1VolumeDeviceFromJSON(json: any): IoK8sApiCoreV1VolumeDevice {
  return IoK8sApiCoreV1VolumeDeviceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1VolumeDeviceFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1VolumeDevice {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    devicePath: json['devicePath'],
    name: json['name'],
  };
}

export function IoK8sApiCoreV1VolumeDeviceToJSON(value?: IoK8sApiCoreV1VolumeDevice | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    devicePath: value.devicePath,
    name: value.name,
  };
}