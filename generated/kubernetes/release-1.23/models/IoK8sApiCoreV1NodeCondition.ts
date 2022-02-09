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

import { exists, mapValues } from '../runtime';
/**
 * NodeCondition contains condition information for a node.
 * @export
 * @interface IoK8sApiCoreV1NodeCondition
 */
export interface IoK8sApiCoreV1NodeCondition {
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeCondition
     */
    lastHeartbeatTime?: string;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeCondition
     */
    lastTransitionTime?: string;
    /**
     * Human readable message indicating details about last transition.
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeCondition
     */
    message?: string;
    /**
     * (brief) reason for the condition's last transition.
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeCondition
     */
    reason?: string;
    /**
     * Status of the condition, one of True, False, Unknown.
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeCondition
     */
    status: string;
    /**
     * Type of node condition.
     * 
     * Possible enum values:
     *  - `"DiskPressure"` means the kubelet is under pressure due to insufficient available disk.
     *  - `"MemoryPressure"` means the kubelet is under pressure due to insufficient available memory.
     *  - `"NetworkUnavailable"` means that network for the node is not correctly configured.
     *  - `"PIDPressure"` means the kubelet is under pressure due to insufficient available PID.
     *  - `"Ready"` means kubelet is healthy and ready to accept pods.
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeCondition
     */
    type: IoK8sApiCoreV1NodeConditionTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum IoK8sApiCoreV1NodeConditionTypeEnum {
    DiskPressure = 'DiskPressure',
    MemoryPressure = 'MemoryPressure',
    NetworkUnavailable = 'NetworkUnavailable',
    PidPressure = 'PIDPressure',
    Ready = 'Ready'
}

export function IoK8sApiCoreV1NodeConditionFromJSON(json: any): IoK8sApiCoreV1NodeCondition {
    return IoK8sApiCoreV1NodeConditionFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1NodeConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1NodeCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastHeartbeatTime': !exists(json, 'lastHeartbeatTime') ? undefined : (new Date(json['lastHeartbeatTime'])),
        'lastTransitionTime': !exists(json, 'lastTransitionTime') ? undefined : (new Date(json['lastTransitionTime'])),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function IoK8sApiCoreV1NodeConditionToJSON(value?: IoK8sApiCoreV1NodeCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastHeartbeatTime': value.lastHeartbeatTime === undefined ? undefined : (value.lastHeartbeatTime.toISOString()),
        'lastTransitionTime': value.lastTransitionTime === undefined ? undefined : (value.lastTransitionTime.toISOString()),
        'message': value.message,
        'reason': value.reason,
        'status': value.status,
        'type': value.type,
    };
}
